const CoursePage = ({ course }) => {
    return (
        <div>
            <h1>{course.title}</h1>
            {item.category}
            <p>
                <strong>Instructor: </strong> {course.instructor}
            </p>
            <p>
                <strong>Price: </strong> ${course.price.toFixed(2)}
            </p>
            <p>
                <strong>Duration: </strong> {course.duration}h
            </p>
            <p>
                <strong>Level: </strong> {course.level}
            </p>
            <p>
                 <strong>Online:</strong> {course.isOnline ? "Yes" : "No"}
             </p>
             <p>
                 <strong>Available:</strong> {course.available ? "Yes" : "No"}
            </p>
            <p>
              <em>Added: {new Date(course.createdAt).toLocaleString()}</em>
            </p>
        </div>
    );
};

export default CoursePage;