"use client";

import Image from "next/image";
import recent1 from "@/assets/recent1.png";
import recent2 from "@/assets/recent2.png";
import recent3 from "@/assets/recent3.png";
import recent4 from "@/assets/recent4.png";
import RightBlog from "@/components/home/right-blog";
import BlogContent from "@/components/home/blog-content";
import AnimatedItem from "@/components/ui/animated-item";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-16">
        {/* Hero Section */}
        <section className="text-center py-20 border-y">
          <AnimatedItem
            animation="slideInLeft"
            delay={0.2}
            className="text-6xl sm:text-7xl lg:text-[160px] xl:text-[243px] font-bold mb-6 opacity-0"
          >
            THE BLOG
          </AnimatedItem>
        </section>

        {/* Recent Blog Posts Section */}
        <section className="flex flex-col container mx-auto py-8 px-4">
          <AnimatedItem animation="fadeIn" delay={0}>
            <h1 className="font-semibold text-2xl mb-8">Recent blog posts</h1>
          </AnimatedItem>

          {/* Left handside */}
          <div className="flex flex-col xl:flex-row gap-8">
            <AnimatedItem
              animation="slideInLeft"
              delay={0.1}
              className="flex flex-col w-full xl:w-1/2 cursor-pointer"
            >
              <Image
                src={recent1}
                alt="recent1"
                className="shadow-lg my-8 w-full"
              />
              <BlogContent
                author="Lana Steiner"
                date="1 Jan 2023"
                title="The future of design systems"
                description="Design systems are a hot topic in the design community, but what does the future hold for them?"
                badges={[
                  { content: "Design", color: "primary" },
                  { content: "Research", color: "secondary" },
                  { content: "Presentation", color: "tertiary" },
                ]}
              />
            </AnimatedItem>

            {/* Right handside */}
            <div className="flex flex-col gap-8 w-full xl:w-1/2 mt-8">
              <AnimatedItem animation="slideInRight" delay={0.2}>
                <RightBlog
                  image={recent2}
                  title="The future of design systems"
                  date="1 Jan 2023"
                  author="Lana Steiner"
                  description="Design systems are a hot topic in the design community, but what does the future hold for them?"
                />
              </AnimatedItem>

              <AnimatedItem animation="slideInRight" delay={0.1}>
                <RightBlog
                  image={recent3}
                  title="Another design perspective"
                  date="5 Jan 2023"
                  author="John Doe"
                  description="Exploring new approaches to modern web design and user experience."
                />
              </AnimatedItem>
            </div>
          </div>

          {/* Bottom Blog Post */}
          <AnimatedItem
            animation="scaleIn"
            delay={0.1}
            className="flex flex-col xl:flex-row mt-8 gap-8"
          >
            <Image src={recent4} alt="recent4" className="w-full xl:w-1/2" />
            <div>
              <BlogContent
                author="Lana Steiner"
                date="1 Jan 2023"
                title="The future of design systems"
                description="A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
                badges={[
                  { content: "Design", color: "primary" },
                  { content: "Interface", color: "tertiary" },
                ]}
              />
            </div>
          </AnimatedItem>
        </section>
      </div>
    </main>
  );
}
