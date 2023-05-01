import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());

const port = 8800;
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`Vous êtes connecté sur le port : http://localhost:${port}`);
});
