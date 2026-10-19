import { Router } from "express";
import { taskController } from "../controller/task.controller";

const router = Router();

router.get("/", (req, res) => taskController.getAll(req, res));
router.post("/", (req, res) => taskController.create(req, res));

export default router;