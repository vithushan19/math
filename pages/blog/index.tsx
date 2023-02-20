import React from "react";
import Head from "next/head";
import LandingNavbar from "../../components/LandingNavbar";
import BlogPostCard from "../../components/coding/BlogPostCard";
export default function Blog() {
  const blogData = [
    {
      date: "February 10, 2023",
      title:
        "Jest + Function Testing: A Creative & Cheap Approach to Testing Tailwind/CSS Classes",
      image: "/images/blog/jest-function-testing/software_testing.jpeg",
      description: "Cheap Unit Testing",
      link: "/blog/jest-function-testing",
    },
    {
      date: "February 8, 2023",
      title: "Making The Leap into Development",
      image:
        "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
      description:
        "Skillify students experience transitioning into software development",
      link: "/blog/making-the-leap-into-development",
    },
    {
      date: "August 15, 2022",
      title: "How to learn to code in online?",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      description: "Our guide on how to learn to code online",
      link: "/blog/learn-to-code-online",
    },
    {
      date: "August 14, 2022",
      title: "How to learn to code in Java?",
      image:
        "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      description: "Our guide on how to learn to code in Java",
      link: "/blog/learn-to-code-in-java",
    },
    {
      date: "August 13, 2022",
      title: "How to learn to code in Python?",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
      description: "Our guide on how to learn to code in Python",
      link: "/blog/learn-to-code-in-python",
    },
    {
      date: "July 11, 2022",
      title: "How to stand out to coop employers?",
      image:
        "https://images.unsplash.com/photo-1516659257916-7be846591235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      description: "An employers perspective to hiring coop students",
      link: "/blog/how-to-stand-out-to-coop-employers",
    },

    {
      date: "Apriil 13, 2022",
      title: "Do Product Manager Need Coding Skills?",
      image:
        "https://www.gooddata.com/img/blog/_1200x630/project-manager-bg.jpg",

      description:
        "We talk about whether product managers should learn how to code",
      link: "/blog/do-product-managers-need-coding-skills",
    },
    {
      date: "Apriil 2, 2022",
      title: "Are Toronto coding bootcamps worth it?",
      image: "/images/blog/are-coding-bootcamps-worth-it/thumbnail.png",
      description: "This resource lists the top coding bootcamps in Toronto",
      link: "/blog/is-it-worth-paying-for-a-coding-bootcamp",
    },
    {
      date: "March 30, 2022",
      title: "Where can I learn to code in Toronto?",
      image:
        "https://i.pcmag.com/imagery/roundups/07tAycb2jrO6jKSb5RsGUFq-1..v1569492641.jpg",
      description: "This resource lists the top coding bootcamps in Toronto",
      link: "/blog/best-toronto-coding-bootcamps-2022",
    },
  ];
  return (
    <div>
      <Head>
        <title>{"Skillify Blog"}</title>
        <meta
          name="description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:title" content={"Skillify Blog"} />
        <meta
          property="og:image"
          content={"https://www.skillify.ca/images/images/logo.png"}
        />
        <meta
          property="og:description"
          content={"Articles and resources about Toronto coding bootcamps"}
        />
        <meta property="og:url" content="https://skillify.ca/" />
        <meta property="og:type" content="website" />
      </Head>
      <LandingNavbar />
      <div className="flex justify-center w-full overflow-hidden h-72">
        <div className="relative">
          <video
            src="/images/blog/header.mp4"
            autoPlay
            className=""
            loop
            muted
          />
          <h1 className="absolute bottom-0 w-full p-4 text-5xl font-bold text-center text-white bg-gradient-to-t from-black-transparent to-black">
            Blog
          </h1>
        </div>
      </div>
      <div className="max-w-5xl lg:mt-16">
        <div className="flex flex-col items-center w-full">
          <div className="grid items-center w-full grid-cols-1 gap-16 p-4 sm:grid-cols-2 lg:grid-cols-2">
            {blogData.map((blog, i) => (
              <BlogPostCard
                key={blog.title}
                date={blog.date}
                title={blog.title}
                image={blog.image}
                description={blog.description}
                link={blog.link}
                color={i % 4}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
