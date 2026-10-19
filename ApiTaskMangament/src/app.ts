import express from "express";
import taskRoutes from "./routes/task.routes";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "API is running" });
});

app.use("/api/tasks", taskRoutes);

export default app;