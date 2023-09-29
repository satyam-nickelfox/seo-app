"use client";
import Link from "next/link";
import React from "react";

const Categories = ({ icon, category, link }) => {
  return (
    <div className="flex items-center flex-col gap-4 bg-white p-8 rounded-md">
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <Link href={`/${link}`}>
        <div className="text-sm rounded-lg p-2 text-white bg-teal-500 hover:bg-teal-700 cursor-pointer">
          View More
        </div>
      </Link>
    </div>
  );
};

export default Categories;
