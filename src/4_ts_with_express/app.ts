import express, { Application } from "express";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app: Application = express();
app.use(express.json());

app.use(authRoutes);

app.use(errorHandler);
export default app;