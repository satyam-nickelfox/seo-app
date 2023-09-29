import React from "react";
import Categories from "./Categories";
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

const Courses = () => {
  const categories = [
    {
      id: 1,
      icon: <FiPenTool />,
      category: "Design",
      link : "design"
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      category: "Development",
      link : "development"
    },
    {
      id: 3,
      icon: <BsBarChartLine />,
      category: "Business",
      link : "business"
    },
    {
      id: 4,
      icon: <MdOutlineScience />,
      category: "Science",
      link : "science"
    },
  ];

  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
