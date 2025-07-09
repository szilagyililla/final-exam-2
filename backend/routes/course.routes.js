import express from "express"
import { 
    getCourseById,
    getAllCourses,
    createCourse,
    deleteExistingCourse,
    updateExistingCourse
 } from "./controllers/course.controllers.js"

 const router = express.Router()

router.get("/all", getAllCourses)
router.get("/:id", getCourseById)
router.post("/create", createCourse)
router.put("/update/:id", updateExistingCourse)
router.delete("/delete/:id", deleteExistingCourse)

export default router