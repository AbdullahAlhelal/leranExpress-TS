import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../config/database";

export interface Task extends RowDataPacket {
    id: number;
    title: string;
    description: string | null;
    is_completed: boolean;
    created_at: Date;
}

export class TaskService {
    async getAll(): Promise<Task[]> {
        const [rows] = await pool.query<Task[]>(
            "SELECT * FROM tasks ORDER BY id DESC"
        );

        return rows;
    }

    async create(
        title: string,
        description: string | null
    ): Promise<number> {
        const [result] = await pool.execute<ResultSetHeader>(
            "INSERT INTO tasks (title, description) VALUES (?, ?)",
            [title, description]
        );

        return result.insertId;
    }
}

export const taskService = new TaskService();