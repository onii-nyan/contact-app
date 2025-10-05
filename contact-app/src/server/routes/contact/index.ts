import { Router } from "express";
import { createBulkContact, createContact, deleteContact, getContactById, getContacts, updateContact,  } from "./default";

const router = Router();

router.get("/bulk", createBulkContact);

router.get("/", getContacts);
router.get("/:id", getContactById);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
