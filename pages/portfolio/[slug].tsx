import React, { useEffect } from "react";
import { session, useSession } from "next-auth/client";
import Navbar from "../../components/Navbar";
import initializeApollo from "../../lib/apollo";
import { gql, useQuery } from "@apollo/client";
import { FETCH_FLASHCARD_GUESSES } from "../../graphql/fetchFlashcardGuesses";
import _ from "lodash";
import Link from "next/link";
import { getSkillIdFromSlug, userId } from "../../graphql/utils/constants";

const Portfolio = ({ slug }) => {
  const [session, loading] = useSession();
  const guessesResult = useQuery(FETCH_FLASHCARD_GUESSES, {
    variables: {
      userId: userId(session),
      skillId: getSkillIdFromSlug(slug),
    },
  });

  const [guesses, setGuesses] = React.useState([]);
  const [practiceSessions, setPracticeSessions] = React.useState([]);

  useEffect(() => {
    if (guessesResult.data && userId(session) != "-1") {
      setGuesses(guessesResult.data.flashcard_guesses);
      const sessions = groupByPracticeSession(
        guessesResult.data.flashcard_guesses
      );
      setPracticeSessions(sessions);
    }
  }, [guessesResult, session]);

  const groupByPracticeSession = (guesses) => {
    const dict = _.groupBy(guesses, function (guess) {
      return guess.session_id;
    });
    const res = [];
    for (var key in dict) {
      res.push(dict[key]);
    }
    return res;
  };
  const sessionRollup = (guesses) => {
    let correct = 0;
    let speed = 0;
    let date = "";
    let session_id = null;

    if (guesses.length > 0) {
      date = guesses[0].created_at;
      session_id = guesses[0].session_id;
    }

    for (let index = 0; index < guesses.length; index++) {
      const element = guesses[index];
      if (element.is_correct) {
        correct++;
      }
      speed += element.timeTaken;
    }

    const accuracy = Math.round((correct * 100) / guesses.length);
    return { accuracy, speed, date, session_id };
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gradient-to-t from-purple-500 via-purple-400 to-purple-300">
      <Navbar />
      <h1 className="text-lg p-4">Quiz Attempts - {slug}</h1>
      <div className="flex items-center justify-between p-4 mx-4 border-b-4 bg-white rounded-t-md">
        <p>Date</p>
        <p>Accuracy</p>
        <p>Speed</p>
      </div>
      <ul className="mx-4">
        {practiceSessions.map((it) => {
          const stats = sessionRollup(it);
          return (
            <Link
              key={stats.session_id}
              href={"/sessionDetails/" + stats.session_id}
            >
              <li className="flex items-center justify-between p-4 bg-white border-b-2 hover:bg-blue-100">
                <p className="text-sm">{new Date(stats.date).toDateString()}</p>
                <p className="text-sm">{stats.accuracy}% </p>
                <p className="text-sm">{stats.speed} seconds</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "Numbers" } }],
    fallback: true,
  };
}

export default Portfolio;
