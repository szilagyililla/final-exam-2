import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [instructor, setInstructor] = useState("");
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(0);
    const [level, setLevel] = useState("");
    const [isOnline, setIsOnline] = useState(false);
    const [available, setAvailable] = useState(false);

    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCourse = {
            title,
            category,
            instructor,
            price,
            duration,
            level,
            isOnline,
            available,
        };

        try {
            setLoading(true);
            const res = await fetch("http://localhost:5000/api/courses/", {
                method: "POST",
                headers: { "Content-Type": "applications/json" },
                body: JSON.stringify(newCourse),
            });

            if (!res.ok) throw new Error("Failed to create course.");

            console.log("Course created successfully");
            navigate("/");
          } catch (error) {
            console.error("Error:", error.message);
          } finally {
            setLoading(false);
          }
    };

    return (
        <div>
        <h1>Add a New Course!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
  
          <div>
            <label>Category: </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
  
          <div>
            <label>Instructor: </label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              required
            />
          </div>
  
          <div>
            <label>Price: </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              required
            />
          </div>
  
          <div>
            <label>Duration (hours): </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              required
            />
          </div>
  
          <div>
            <label>Level: </label>
            <select
            value={type}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          </div>
  
          <div>
            <label>Is it an online course? </label>
            <input
              type="checkbox"
              checked={isOnline}
              onChange={(e) => setIsOnline(e.target.checked)}
              required
            />
          </div>
  
          <div>
            <label>Is it available at the moment? </label>
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              required
            />
          </div>
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Add Course"}
          </button>
        </form>
      </div>
    )
};

