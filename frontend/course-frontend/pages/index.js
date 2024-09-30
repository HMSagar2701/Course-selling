// pages/index.js
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import NavBar from '../components/NavBar';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React from scratch with this comprehensive guide.',
    image: 'image2.jpg', // Adjust the image path
    category: 'Web Development',
    price: '999',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Take your JavaScript skills to the next level.',
    image: 'image1.jpg', // Adjust the image path
    category: 'Programming',
    price: '499',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
