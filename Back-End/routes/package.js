import express from "express";
import { insertPackage, getPackages } from "../controllers/package.js";
const router = express.Router();

// @route   GET /package/all
// @desc    Get all packages
// @access  Public
router.get("/all", getPackages);

// @route   POST /package/create
// @desc    Create a new package
// @access  Public
router.post("/create", insertPackage);

export default router;
