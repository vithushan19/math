import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../components/coding/studentPortal/LessonComponent";

const React2 = ({ lessonComponents }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "React and Javascript Recipes",
    },

    {
      component: "description",
      text: "This page contains small, contained CodeSandbox examples of React and / or Javascript code created by Skillify's coaches. Use these recipes to help you with your assignments or apps",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Communicating between child components",
          description:
            "React example where two child components communicate between each other via the parent app component. Also shows you how to pass functions as props ",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://codesandbox.io/s/child-to-child-communication-via-parent-kpb10d",
        },
        {
          title: "Using onBlur with input forms",
          description:
            "Example of using the onBlur method to update a state variable attached to an input form. This is an alternative to a form's onChange property",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://codesandbox.io/s/onblur-example-x1hfc3",
        },
      ],
    },
  ];
  return { props: { lessonComponents } };
}

export default React2;
