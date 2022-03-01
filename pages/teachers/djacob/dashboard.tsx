import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../graphql/userAssignments/fetchUserAssignments";
import Navbar from "../../../components/ui/Navbar";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import { FETCH_ASSIGNMENT } from "../../../graphql/fetchAssignment";
import { UPDATE_SOLUTIONS_RELEASED_FOR_ASSIGNMENT } from "../../../graphql/userAssignments/updateSolutionsReleasedForAssignment";
import dynamic from "next/dynamic";
import { answers, questions } from "../../api/teachers/djacob";
import { Button } from "../../../components/ui/Button";

const FreeDrawing = dynamic(
  () => import("../../../components/ui/FreeDrawing"),
  {
    ssr: false,
  }
);

const TeacherDashboardPage = ({ data }) => {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [solutionsReleased, setSolutionsReleased] = useState(false);
  const { loading, data: assignmentFetchData } = useQuery(FETCH_ASSIGNMENT, {
    variables: {
      assignmentId: "djacob1",
    },
    onCompleted: (data) => {
      if (data && data.assignments && data.assignments[0]) {
        setSolutionsReleased(data.assignments[0].solutions_released);
      }
    },
  });
  const [updateSolutionsReleased] = useMutation(
    UPDATE_SOLUTIONS_RELEASED_FOR_ASSIGNMENT
  );
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const getGrade = () => {
    const rightGuesses: boolean[] = data.user_assignments[
      currentStudentIndex
    ].user_solution.map((guess, index) => {
      return Number.parseInt(guess) === answers[index];
    });
    const correctGuesses: number = rightGuesses.filter(
      (it) => it === true
    ).length;

    const grade =
      (correctGuesses * 100) /
      data.user_assignments[currentStudentIndex].user_solution.length;

    return grade + "%";
  };
  const getTimeSpent = () => {
    return "2 minutes and 33 seconds";
  };
  return (
    <div className="flex flex-col h-screen overflow-auto bg-scroll bg-blue-100 heropattern-architect-blue-200">
      <Navbar />
      {data && data.user_assignments && data.user_assignments[0] && (
        <div className="flex flex-col items-center">
          <h1 className="p-4 text-xl font-bold text-center">
            {data.user_assignments[0].assignment.title}
          </h1>

          {assignmentFetchData &&
            assignmentFetchData.assignments &&
            assignmentFetchData.assignments[0] && (
              <div className="flex gap-4 p-4">
                <Button
                  label={
                    solutionsReleased ? "Hide Solutions" : "Release Solutions"
                  }
                  backgroundColor="blue"
                  textColor="white"
                  onClick={(e) => {
                    updateSolutionsReleased({
                      variables: {
                        solutions_released: !solutionsReleased,
                        assignment_id: "djacob1",
                      },
                    });
                    setSolutionsReleased(!solutionsReleased);
                  }}
                />
              </div>
            )}
          <div className="flex flex-col max-w-6xl gap-8 p-4 mx-4 mb-4 shadow-lg bg-blue-50 rounded-xl">
            <p className="w-full text-2xl font-bold">Ms. Jacob's Classroom</p>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="flex flex-col col-span-4 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
                <p className="text-2xl font-bold">Average Grade</p>{" "}
                <p>{getGrade()}</p>
              </div>
              <div className="flex flex-col col-span-4 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
                <p className="text-2xl font-bold">Hardest Question</p>{" "}
                <p>Question 4</p>
              </div>
              <div className="flex flex-col col-span-4 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl">
                <p className="text-2xl font-bold">Missing Assignments</p>{" "}
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-6xl gap-8 p-4 mx-4 mb-4 shadow-lg bg-blue-50 rounded-xl">
            <p className="w-full text-2xl font-bold">Students</p>
            <select
              className="p-4 border-2 border-blue-400"
              value={currentStudentIndex}
              onChange={(e) =>
                setCurrentStudentIndex(Number.parseInt(e.target.value))
              }
            >
              {data.user_assignments.map((student, index) => (
                <option value={index}>{student.user.name}</option>
              ))}
            </select>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="flex flex-col col-span-6 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl">
                <p className="text-2xl font-bold">Grade</p> <p>{getGrade()}</p>
              </div>
              <div className="flex flex-col col-span-6 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
                <p className="text-2xl font-bold">Time Spent</p>{" "}
                <p>{getTimeSpent()}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-6 rounded-t-xl">
                <div className="grid items-center justify-between grid-cols-12 py-4 font-bold bg-yellow-600 rounded-t-xl">
                  <p className="col-span-2 text-center">#</p>
                  <p className="col-span-8 text-center">Question</p>
                  <p className="col-span-2 text-center">Guess</p>
                </div>
                {data.user_assignments[currentStudentIndex].user_solution.map(
                  (guess, index) => (
                    <div
                      onClick={() => setSelectedQuestion(index)}
                      className={`grid grid-cols-12 items-center justify-between ${
                        index === selectedQuestion
                          ? `bg-yellow-200 border-t-2 border-b-2 border-yellow-800`
                          : `bg-yellow-400`
                      } hover:bg-yellow-200 overflow-visible`}
                    >
                      <p className="col-span-2 text-center">{index + 1}</p>
                      <div className="col-span-8">
                        <TeX block>{questions[index]}</TeX>
                      </div>
                      <p
                        className={`col-span-2 text-center gap-4 ${
                          Number.parseInt(guess) === answers[index]
                            ? "flex"
                            : ""
                        }`}
                      >
                        {guess}{" "}
                        {Number.parseInt(guess) === answers[index] && (
                          <img
                            src={"/images/checkmark.png"}
                            alt="skill image"
                            className="w-8"
                          />
                        )}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="bg-green-400 md:col-span-6 rounded-t-xl">
                <p className="w-full px-4 py-2 text-xl font-bold">Their Work</p>
                <div className="col-span-10 col-start-2 overflow-scroll max-h-80">
                  <FreeDrawing
                    saveImage={() => {}}
                    lines={
                      data.user_assignments[currentStudentIndex]
                        .user_drawn_lines[selectedQuestion]
                    }
                    setLines={() => {}}
                    historyStep={
                      data.user_assignments[currentStudentIndex]
                        .user_drawn_lines[selectedQuestion].length
                    }
                    setHistoryStep={() => {}}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_USER_ASSIGNMENTS,
    variables: {
      assignment_id: "djacob1",
    },
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data } };
}

export default TeacherDashboardPage;
