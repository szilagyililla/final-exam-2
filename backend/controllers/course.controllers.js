import Course from "../models/course.js";

//GET A COURSE BY ID
export const getCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({  message: "Course not found." });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//GET ALL COURSES
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//CREATE A COURSE
export const createCourse = async (req, res) => {
    const {
        title,
        category,
        instructor,
        price,
        duration,
        level,
        isOnline,
        available
    } = req.body;
console.log(req.body);

    if (
        !title ||
        !category ||
        !instructor ||
        price === null||
        duration === null ||
        !level ||
        isOnline === undefined ||
        available === undefined
    ) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    console.log(title);
    

    try {
        const newCourse = new Course({
            title,
            category,
            instructor,
            price,
            duration,
            level,
            isOnline,
            available
        });
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//UPDATE AN ITEM
export const updateExistingCourse = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        category,
        instructor,
        price,
        duration,
        level,
        isOnline,
        available
    } = req.body;

    if (
        !title ||
        !category ||
        !instructor ||
        price === null ||
        duration === null ||
        !level ||
        isOnline === undefined ||
        available === undefined
    ) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            {
                title,
                category,
                instructor,
                price,
                duration,
                level,
                isOnline,
                available
            },
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found." })
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//DELETE AN ITEM
export const deleteExistingCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found." });
        }

        res.status(200).json({ message: "Course deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
