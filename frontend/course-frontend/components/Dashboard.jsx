import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from backend API
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    };
    
    fetchCourses();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
