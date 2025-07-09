import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
        },
        instructor: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        level: {
            type: String,
            required: true,
            enum: ["Beginner", "Intermediate", "Advanced"],
        },
        isOnline: {
            type: Boolean,
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true
    }
);
export default mongoose.model("Course", courseSchema);