import express from "express";
const router = express.Router();
import homeController from "../controllers/homeController.js";

router.get("/find-by-user", homeController.findHomesByUser);
router.post("/update-users", homeController.updateUsersForHome);

export default router;
