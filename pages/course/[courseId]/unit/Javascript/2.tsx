import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import Navbar from "../../../../../components/Navbar";

const JS1 = () => {
  const data: CardData[] = [
    {
      title: "React Compoents and Props",
      link: "https://reactjs.org/docs/components-and-props.html",
      image: "/images/component.png",
      description: "explore the builing blocks of React",
    },
    {
      title: "React Hooks",
      link: "https://reactjs.org/docs/hooks-state.html",
      image: "/images/hook.jpeg",
      description: "How to make the most of the useState and useEffect hooks",
    },
    {
      title: "Conditional Rendering",
      link: "https://reactjs.org/docs/conditional-rendering.html",
      image: "/images/conditional.jpeg",
      description:
        "Have the power to render different pages, making your possibilities endless",
    },
    {
      title: "Getting your First App running",
      link: "https://reactjs.org/docs/create-a-new-react-app.html",
      image: "/images/steps.png",
      description: "Build your first app",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 bg-white p-8 m-8 space-y-4">
        <h1 className="font-bold text-5xl">React 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lessons</p>
            <p>
              React is a powerful library that makes web development very
              scalable and painless. With the React library we can use
              Javascript or TypeScript to make interactive webpages with many
              interesting built-in features which will talk about in the next{" "}
              <section className=""></section>
            </p>
            <p className="font-bold">Javascript Roadmap</p>

            <div className="flex flex-col space-y-2">
              <p className="font-bold">Tutorials</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.map((it) => (
                  <Card
                    title={it.title}
                    image={it.image}
                    description={it.description}
                    link={it.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS1;
