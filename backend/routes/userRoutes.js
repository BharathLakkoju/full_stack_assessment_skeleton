import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

router.get("/find-all", userController.findAllUsers);
router.get("/find-by-home", userController.findUsersByHome);

export default router;
