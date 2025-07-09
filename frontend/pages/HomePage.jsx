import React, { useState, useEffect } from 'react';
import CoursePage from "../components/CoursePage";

const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/courses");

                if (!res.ok) throw new Error("Error fetching courses");

                const data = await res.json();
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const availableCourses = courses.filter((course) => course.available);
    const sortedByPrice = courses.sort((a, b) => a.price - b.price);
    const mostExpensiveIntermediate = courses
        .filter(course => course.level === "Intermediate")
        .reduce((max, course) => course.price > max.price ? course : max, { price: 0 });

  return (
    <div>
     <h1>Programming Courses</h1>
      {!loading && courses.length === 0 && (
        <p className="text-center text-gray-500">No courses available.</p>
      )}

      {!loading && courses.length > 0 && (
        <>
         <h2>Courses Sorted By Price</h2>
          <ul>
            {sortedByPrice.map((course) => (
                <CoursePage key={course._id} course={course} />
            ))}
          </ul>
          <h2>Available Courses</h2>
          <ul>
            {availableCourses.map((course) => (
                 <CoursePage key={course._id} course={course} />
            ))}
          </ul>
          <h2>Recommended For You</h2>
            <p>
            {mostExpensiveIntermediate}
                <CoursePage key={mostExpensiveIntermediate._id} course={mostExpensiveIntermediate} />
            </p>
        </>
      )}
    </div>
  )
}

export default HomePage