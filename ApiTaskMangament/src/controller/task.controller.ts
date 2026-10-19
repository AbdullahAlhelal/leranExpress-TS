import { Request, Response } from "express";
import { taskService } from "../services/task.service";

export class TaskController {
    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const tasks = await taskService.getAll();

            res.status(200).json({
                success: true,
                data: tasks,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message: "Failed to retrieve tasks",
            });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const { title, description } = req.body;

            if (typeof title !== "string" || !title.trim()) {
                res.status(400).json({
                    success: false,
                    message: "Title is required",
                });
                return;
            }

            if (
                description !== undefined &&
                description !== null &&
                typeof description !== "string"
            ) {
                res.status(400).json({
                    success: false,
                    message: "Description must be a string or null",
                });
                return;
            }

            const id = await taskService.create(
                title.trim(),
                description ?? null
            );

            res.status(201).json({
                success: true,
                message: "Task created successfully",
                data: { id, title: title.trim(), description: description ?? null },
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message: "Failed to create task",
            });
        }
    }
}

export const taskController = new TaskController();