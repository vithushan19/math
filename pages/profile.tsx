import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import initializeApollo from "../lib/apollo";
import { gql, useQuery } from "@apollo/client";
import { FETCH_USERS } from "../graphql/fetchUsers";
import { FETCH_FLASHCARD_GUESSES } from "../graphql/fetchFlashcardGuesses";

export default function Profile(props) {
  const guesses = useQuery(FETCH_FLASHCARD_GUESSES);
  console.log(guesses.data.flashcard_guesses);
  const [session] = useSession();
  const skills = [
    { title: "Numbers", image: "images/skills/counting.png", mastered: true },
    { title: "Addition", image: "images/skills/addition.png", mastered: false },
  ];

  const lockedSkills = [
    { title: "Subtraction", image: "images/skills/lock.png" },
    { title: "Multiplication", image: "images/skills/lock.png" },
    { title: "Division", image: "images/skills/lock.png" },
    { title: "Mixed Operations", image: "images/skills/lock.png" },
    { title: "Fractions", image: "images/skills/lock.png" },
    { title: "Geometry", image: "images/skills/lock.png" },
    { title: "Variables", image: "images/skills/lock.png" },
    { title: "Estimation", image: "images/skills/lock.png" },
    { title: "Logic", image: "images/skills/lock.png" },
    { title: "Patterns", image: "images/skills/lock.png" },
    { title: "Money", image: "images/skills/lock.png" },
    { title: "Time", image: "images/skills/lock.png" },
    { title: "Data", image: "images/skills/lock.png" },
    { title: "Decimals", image: "images/skills/lock.png" },
    { title: "Stats", image: "images/skills/lock.png" },
  ];

  const users = useQuery(FETCH_USERS);
  return (
    <div className="flex flex-col">
      <Navbar />
      <ul>
        {guesses.data.flashcard_guesses.map((it) => (
          <li key={it.guessId}>GUESS {it.question} {it.guess}</li>
        ))}
        {skills.map((it) => (
          <li key={it.title}>
            <div className="gap-4 flex bg-gradient-to-b from-purple-400 via-purple-500 to-purple-500 p-2 m-4 items-center justify-between text-center rounded-xl">
              <div className="flex gap-4 h-8 items-center p-2">
                <img src={it.image} alt="skill image" className="w-8" />
                <p>{it.title}</p>
              </div>
              <img
                src={
                  it.mastered ? "images/checkmark.png" : "images/progress.png"
                }
                alt="skill image"
                className="w-8"
              />
            </div>
          </li>
        ))}
        {lockedSkills.map((it) => (
          <li key={it.title}>
            <div className="gap-4 flex bg-gray-400 p-2 m-4 items-center text-center rounded-xl">
              <img src={it.image} alt="skill image" className="w-8" />
              <p>{it.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
