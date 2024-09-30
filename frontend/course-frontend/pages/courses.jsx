// pages/courses.jsx
import CourseCard from '../components/CourseCard';

const courses = [
  {
    title: 'Course 1',
    description: 'This is the description for course 1.',
    image: 'image2.jpg',
    category: 'Category 1',
    price: 100,
  },
  {
    title: 'Course 2',
    description: 'This is the description for course 2.',
    image: 'image2.jpg',
    category: 'Category 2',
    price: 150,
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default Courses;
