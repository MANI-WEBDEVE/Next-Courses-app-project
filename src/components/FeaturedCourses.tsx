"use client";
import apiData from "@/data/course-data.json";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

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
    const unique:number = Math.floor(Math.random() * 100)
    const courseData = apiData.courses.filter((course:Course) => course.isFeatured)
    
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
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {
                courseData.map((curElem:Course) =>  {
                  const {id, title, description, price, image,instructor} = curElem
                  return (
                    <>
                    <ul key={curElem.id} className="flex justify-center">
                      <BackgroundGradient className="rounded-[22px] max-w-sm p-6 sm:p-8 overflow-hidden h-[100%] bg-white dark:bg-zinc-900" >
                        <li key={id}>
                          <h1 className="text-xl font-medium
                          mb-4">{title}</h1>
                          <p className="text-[15px] mb-4">{description}</p>
                          <p className="text-[14px] font-thin ">Instructor: {instructor}</p>
                          <p className="mt-4" >Price: {price} $</p>
                        </li>
                      </BackgroundGradient>
                    </ul>
                    </>
                  )
                })
              }
            </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center">
            <Link href={'#'}>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-cyan-800 bg-[linear-gradient(110deg,#000106,45%,#4ec7e1,50%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-0 focus:ring-offset-slate-50">
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
