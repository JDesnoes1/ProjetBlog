import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";

const app = express();
app.use(express.json());

const port = 8800;

app.use("/api/auth", authRoutes);
app.use("/api/users", postRoutes);
app.use("/api/posts", usersRoutes);

app.listen(port, () => {
  console.log(`Vous êtes connecté sur le port : http://localhost:${port}`);
});
