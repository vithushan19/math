import { DiagnosticState } from "../../../redux/diagnosticSlice";
import { Question } from "../question";
import { Skill, Topic } from "../skill";

const PASSING_GRADE = 0.8;

type QuestionGuess = {
  question: Question;
  guess: string;
};

export const getResultForSkill = (skill: Skill, results: DiagnosticState) => {
  const questionsWithGuesses: QuestionGuess[] = results.questions.map(
    (it, index) => ({ question: it, guess: results.guessAns[index] })
  );
  const filteredQuestionsWithGuesses = questionsWithGuesses.filter(
    (it) => it.question.skill === skill
  );
  const correctGuesses = filteredQuestionsWithGuesses.filter(
    (it) => it.guess === "Correct"
  );
  if (
    correctGuesses.length / filteredQuestionsWithGuesses.length >=
    PASSING_GRADE
  ) {
    return "Got it!";
  } else {
    return "Not yet";
  }
};

export const getGradeLevelForTopic = (
  topic: Topic,
  results: DiagnosticState
) => {
  switch (topic) {
    case Topic.ADDITION:
      if (getResultForSkill(Skill.ADDITION_TRIPLE, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.ADDITION_DOUBLE, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
    case Topic.SUBTRACTION:
      if (getResultForSkill(Skill.SUBTRACTION_TRIPLE, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.SUBTRACTION_DOUBLE, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
    case Topic.MULTIPLICATION:
      if (getResultForSkill(Skill.MULTIPLICATION_10, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.MULTIPLICATION_5, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
    case Topic.DIVISION:
      if (getResultForSkill(Skill.DIVIDE_100, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.DIVIDE_12_EQUALLY, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
  }
};

export const getSkillsForTopic = (topic: Topic) => {
  switch (topic) {
    case Topic.ADDITION:
      return [
        Skill.ADDITION_SINGLE,
        Skill.ADDITION_DOUBLE,
        Skill.ADDITION_TRIPLE,
      ];
    case Topic.SUBTRACTION:
      return [
        Skill.SUBTRACTION_SINGLE,
        Skill.SUBTRACTION_DOUBLE,
        Skill.SUBTRACTION_TRIPLE,
      ];
    case Topic.MULTIPLICATION:
      return [
        Skill.EQUAL_GROUP_10_ITEMS,
        Skill.MULTIPLICATION_5,
        Skill.MULTIPLICATION_10,
      ];
    case Topic.DIVISION:
      return [
        Skill.EQUAL_SHARING_8_ITEMS,
        Skill.DIVIDE_12_EQUALLY,
        Skill.DIVIDE_100,
      ];
  }
  return [];
};
