"use client";
import apiData from "@/data/course-data.json";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

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
                          <Image  src={image} alt={image} height="400" width="400" className="md:object-contain mb-3 md:h-[300px] w-[310px] rounded-lg border-2 border-cyan-700" />
                          <p className="text-[15px] mb-4">{description}</p>
                          <p className="text-[14px] font-thin ">Instructor: {instructor}</p>
                          <div className="mt-4 border border-white w-[140px] pl-2 pr-2 pt-2 pb-2 rounded-full  bg-stone-800 text-[14px] text-center mb-2
                            animate-shimmer  items-center justify-center bg-[linear-gradient(110deg,#000103,50%,#5F004E,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-0 focus:ring-offset-slate-50
                          
                          " >Price: {price} $</div>
                          <Link href={`/courses/${curElem.slug}`} className="text-[10px] inline-block  font-thin mb-4 border border-cyan-600 pl-2 pr-2 pt-1 pb-1 rounded-xl bg-cyan-700 mt-2 ">
                          Learn More
                          </Link>
                        </li>
                      </BackgroundGradient>
                    </ul>
                    </>
                  )
                })
              }
            </div>
        </div>
        <div className="flex justify-center items-center mt-4 ">
          <div className=" flex justify-center items-center   ">
            <Link href={'#'}>
              <button className= " inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-cyan-800 bg-[linear-gradient(110deg,#000106,45%,#4ec7e1,50%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-0 focus:ring-offset-slate-50">
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
