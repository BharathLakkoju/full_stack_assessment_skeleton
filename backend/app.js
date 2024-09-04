import express from "express";
import cors from "cors";
import sequelize from "./models/index.js";
import userRoutes from "./routes/userRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to match your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/user", userRoutes);
app.use("/home", homeRoutes);

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Failed to sync database: ", err);
  });
