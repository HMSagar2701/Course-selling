// routes/course.js
const express = require("express");
const { createCourse, getCourses, getCourseById } = require("../controllers/course");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createCourse);
router.get("/", getCourses);
router.get("/:id", getCourseById);

module.exports = router;
