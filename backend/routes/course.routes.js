import express from "express"
import { 
    getCourseById,
    getAllCourses,
    createCourse,
    deleteExistingCourse,
    updateExistingCourse
 } from "../controllers/course.controllers.js"

 const router = express.Router()

router.get("/", getAllCourses)
router.get("/:id", getCourseById)
router.post("/", createCourse)
router.put("/:id", updateExistingCourse)
router.delete("/:id", deleteExistingCourse)

export default router