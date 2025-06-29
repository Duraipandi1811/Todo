import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { deflate } from "zlib";

const router = express.Router();

// ====== Existing Google OAuth routes ======

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.redirect(`http://localhost:3000/dashboard?token=${token}`);

  });



export default router;