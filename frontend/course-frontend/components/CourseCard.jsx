// components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">{course.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-black text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {course.category}
        </span>
        <span className="inline-block bg-black text-white rounded-full px-3 py-1 text-sm font-semibold">
        ₹{course.price}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
