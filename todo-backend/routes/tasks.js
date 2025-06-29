import express from "express";
import jwt from "jsonwebtoken";
import Task from "../models/Task.js";
import User from "../models/User.js";

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.sendStatus(403);
  }
};

router.use(authMiddleware);

// router.get("/", async (req, res) => {
//   const tasks = await Task.find({
//     $or: [{ owner: req.userId }, { sharedWith: req.userId }]
//   }).sort("-createdAt");
//   res.json(tasks);
// });
router.get('/', async (req, res) =>{
  return res.json({
    message:"returned from the task"
  });
});
router.post("/", async (req, res) => {
  const task = new Task({ ...req.body, owner: req.userId });
  await task.save();
  req.app.locals.io.to(req.userId).emit("taskUpdate", task);
  res.json(task);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  req.app.locals.io.to(task.owner.toString()).emit("taskUpdate", task);
  task.sharedWith.forEach(userId =>
    req.app.locals.io.to(userId.toString()).emit("taskUpdate", task)
  );
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

router.post("/:id/share", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("User not found");
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { sharedWith: user._id } },
    { new: true }
  );
  req.app.locals.io.to(user._id.toString()).emit("taskUpdate", task);
  res.json(task);
});

export default router;
