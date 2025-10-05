import { Router } from "express";
import contactRoutes from "./contact";

const router = Router();

router.use("/contacts", contactRoutes);

export default router;