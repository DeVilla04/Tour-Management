import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./db.js";
import packageRoutes from "./routes/package.js";
// Load env variables
dotenv.config();
const app = express();

// Connect to MongoDB
dbConnect();

// app use
// cors Middleware
const corsOptions = {
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));
// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

// Routes
app.use("/package", packageRoutes);

// Start Server
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
