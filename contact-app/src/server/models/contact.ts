// models/Contact.ts
import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true },
  contactId: { type: String, required: true, unique: true },
  contactType: { type: String, required: true, 
      enum: ["Employee", "Client", "Lead", "Partner", "Investor"],
    },
  email: { type: String, maxlength: 256 },
  phone: { type: String, maxlength: 16 },
  portalAccess: { type: Boolean, default: false },
  adminAccess: { type: Boolean, default: false },
});

const Contact = models.Contact || model("Contact", ContactSchema);
export default Contact;
