import express from "express";
import {getCurrentUser, google, login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post('/google', google);
router.get("/currentUser", getCurrentUser); // New route

export default router;
