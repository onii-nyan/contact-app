import { Request, Response } from "express";
import Contact from "../../models/contact";
import shortUUID from "short-uuid";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;     
    const limit = parseInt(req.query.limit as string) || 10;   
    const search = req.query.search as string | undefined;
    const query = search
      ? { name: { $regex: search as string, $options: "i" } } 
      : {};

    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      Contact.find(query).skip(skip).limit(limit),
      Contact.countDocuments()
    ]);

    res.json({
      error: false,
      data: contacts,
      pagination: {
        total,                          // total records in DB
        page,                           // current page
        limit,                          // rows per page
        totalPages: Math.ceil(total / limit),
      },
      message: "Contacts retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({
      error: false,
      data: savedContact,
      message: "Contact created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  } 
};

export const getContactById = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({
      error: false,
      data: contact,
      message: "Contact retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({
      error: false,
      data: updatedContact,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted", error: false });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const createBulkContact = async (req: Request, res: Response) => {
  try {
    const contacts = Array.from({ length: 100 }).map((_, i) => ({
      contactId: shortUUID.generate(),
      name: `Contact ${i + 1}`,
      email: `contact${i + 1}@example.com`,
      phone: `+6281234${(1000 + i).toString().slice(-4)}`,
      contactType: ["Employee", "Client", "Lead", "Partner", "Investor"][i % 5],
      portalAccess: i % 3 === 0,
      adminAccess: i % 5 === 0,
    }));

    const result = await Contact.insertMany(contacts);

    res.status(201).json({
      error: false,
      data: result,
      message: "Contacts created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};
