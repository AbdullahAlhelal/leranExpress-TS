import app from "./app";
import { pool } from "./config/database";

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
    try {
        await pool.query("SELECT 1");

        console.log("MySQL connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("MySQL connection failed:", error);
        process.exit(1);
    }
}

startServer();