"use client";
import apiData from "@/data/course-data.json";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import Link from "next/link";

const FeaturedCourses = () => {
    interface Course {
        id: number;
        title: string;
        slug: string;
        description: string;
        price: number;
        instructor: string;
        isFeatured: boolean;
        image: string;
    }

    const apiData1:Course[] = [
        {
            "id": 1,
            "title": "Introduction to HTML",
            "slug": "introduction-to-html",
            "description": "Learn the basics of HTML to start building web pages from scratch.",
            "price": 49.99,
            "instructor": "Alice Green",
            "isFeatured": true,
            "image": "/courses/html.jpg"
        },
        {
            "id": 2,
            "title": "CSS for Beginners",
            "slug": "css-for-beginners",
            "description": "Master the fundamentals of CSS and style your web pages with ease.",
            "price": 59.99,
            "instructor": "Bob White",
            "isFeatured": false,
            "image": "/courses/css.jpg"
        },  
    ]
    
  return (
    <>
      <div className="py-12 bg-slate-800 w-full">
        <div>
          <div className="text-center">
            <h2 className="text-cyan-500 font-medium text-2xl ">
              Our Cources Era
            </h2>
            <span className="text-3xl leading-normal font-bold">
              This cources help to learn About{" "}
            </span>
            <span className="text-3xl leading-normal font-bold text-cyan-500">
              WEB-DEV
            </span>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center w-[100%]">
            <div className="p-3">

        <ul className="list-none flex items-center justify-center flex-row flex-wrap p-3">
            {
                apiData1.map((curElem: Course) => {
                    
                    return <>
                        <li key={curElem.id} className="p-4 w-[30%]">
                            <h1>{curElem.title}</h1>
                            <p>{curElem.description}</p>
                            <p>{curElem.instructor}</p>
                        </li>
                    </>
                })
            }
        </ul>
                    </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center">
            <Link href={'#'}>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-cyan-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Explore Cources
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
