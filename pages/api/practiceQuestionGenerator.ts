import { createWordProblemModel, WordProblemModel } from "./WordProblemModel";
import { QuestionType } from "./questionTypes";
import { AnswerType, Question } from "./question";
import { Skill, Topic } from "./questionGenerator";
import { MCModel, MCOption } from "./question";
import { random, shuffle, StringNullableChain } from "lodash";
import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";
import { tweleveMap } from "./factorsOfTwelveMap";

const NUM_QUESTIONS = 5;

const generateQuestionsForTopic = (
  digitDifficulty: string,
  numberOfQuestions: number,
  operator: Topic
) => {
  let questionGenerator: (min: number, max: number) => Question;
  switch (operator) {
    case Topic.SUBTRACTION:
      questionGenerator = getRandomSubtractionQuestion;
      break;
    case Topic.ADDITION:
      questionGenerator = getRandomAdditionQuestion;
      break;
    case Topic.MULTIPLICATION:
      questionGenerator = getRandomMultiplicationQuestion;
      break;
    default:
      console.log("ERROR");
  }
  const res = [];
  for (let i = 0; i < numberOfQuestions; i++) {
    let min = 1;
    let max = 10;
    if (digitDifficulty == "double-digit") {
      min = 11;
      max = 100;
    } else if (digitDifficulty == "upto_5X5") {
      min = 1;
      max = 6;
    } else if (digitDifficulty == "triple-digit") {
      min = 101;
      max = 1000;
    } else if (digitDifficulty == "upto_100_divide_10") {
      max = 11;
    } else if (digitDifficulty == "12_items_equally") {
      max = 13;
    }
    if (operator === Topic.DIVISION) {
      res.push(getRandomDivisionQuestion(min, max, digitDifficulty));
    } else {
      res.push(questionGenerator(min, max));
    }
  }
  return res;
};

export const generateAdditionPropertyQuestions = () => {
  const res = [];
  for (let i = 0; i < NUM_QUESTIONS; ++i) {
    let min = 1;
    let max = 15;
    res.push(getRandomPropertyAdditionQuestion(min, max));
  }
  return res;
};

export const generateAdditionQuestions = (difficulty: string) => {
  if (difficulty != null) {
    const digitDifficulty = difficulty;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.ADDITION
    );
  }
  return [];
};
export const generateSubtractionQuestions = (slug: string) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.SUBTRACTION
    );
  }
  return [];
};
export const generateMultiplicationQuestions = (slug: string) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.MULTIPLICATION
    );
  }
  return [];
};
export const generateDivisionQuestions = (slug: string) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.DIVISION
    );
  }
  return [];
};

function getRandomAdditionQuestion(min: number, max: number) {
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add);
}

function getRandomSubtractionQuestion(min: number, max: number) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract);
}
function getRandomMultiplicationQuestion(min: number, max: number) {
  const multiplication = (a: number, b: number) => a * b;
  return getRandomBinaryQuestion(min, max, "x", multiplication);
}
function getRandomDivisionQuestion(min: number, max: number, digitDifficulty) {
  const a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  let text;
  if (digitDifficulty == "12_items_equally") {
    let factor;
    factor = Object.keys(tweleveMap[a]);
    b = getRndInteger(1, factor.length);
    text = `${a} / ${b} =`;
  } else {
    const product = a * b;
    text = `${product} / ${b} =`;
  }

  const types = [
    QuestionType.LONG_DIVISION_PROBLEM,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
  ];
  const type = types[getRndInteger(0, types.length)];
  let wordProblemModel;
  if (type == QuestionType.BINARY_WORD_PROBLEM) {
    wordProblemModel = createWordProblemModel("÷");
  }
  return {
    text: text,
    answer: a.toString(),
    answerType: AnswerType.NUMBER,
    questionType: type,
    operator: "÷",
    wordProblem: wordProblemModel,
  };
}

function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number
): Question {
  const a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  const text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} =`;
  const types = [
    QuestionType.VERTICAL_EQUATION,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
    QuestionType.TRUE_OR_FALSE_PROBLEM,
  ];
  const typeIndex = getRndInteger(0, types.length);
  const type = types[typeIndex];
  let wordProblemModel;
  //condition for if it is wordProblem
  if (type === QuestionType.BINARY_WORD_PROBLEM) {
    wordProblemModel = createWordProblemModel(operator);
  }
  return {
    text: text,
    answer: answerFunction(Math.max(a, b), Math.min(a, b)).toString(),
    answerType: AnswerType.NUMBER,
    skill: Skill.ADDITION_SINGLE,
    questionType: type,
    operator: operator,
    wordProblem: wordProblemModel,
  };
}
// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPropertyAdditionQuestion(min: number, max: number) {
  const randomProperty = getRndInteger(0, 2);
  if (randomProperty == 0) {
    return getRandomSentencePropertyQuestion(min, max, "+");
  } else if (randomProperty == 1) {
    return getRandomWordPropertyQuestion(min, max, "+");
  // } else if (randomProperty == 2) {
  //   return getRandomFillPropertyQuestion(min, max, "+")
  // }
}

// function getRandomFillPropertyQuestion(
//   min: number, 
//   max: number, 
//   operator: string,
// ): Question {
//   const a = getRndInteger(min, max)
//   const b
// }


function getRandomWordPropertyQuestion(
  min: number,
  max: number,
  operator: string
): Question {
  // correct answers

  // 2+3 = 3 + 2
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);

  const commutativeOption = `${Math.max(a, b)} ${operator} ${Math.min(
    a,
    b
  )} = ${Math.min(a, b)} ${operator} ${Math.max(a, b)}`;

  // 2 + 0 = 2
  const identitynum = getRndInteger(min, max);

  const identityOption = `${identitynum} ${operator} 0 = ${identitynum}`;

  // (2 + 3) + 4 = 2 + (3+4)

  const x = getRndInteger(min, max);
  const y = getRndInteger(min, max);
  const z = getRndInteger(min, max);

  const associativeOption = `(${x} ${operator} ${y}) ${operator} ${z} = ${x} ${operator} (${y} ${operator} ${z})`;

  // answer array chooser

  const correctAnswers = [commutativeOption, identityOption, associativeOption];
  const correctIndex = getRndInteger(0, correctAnswers.length);
  const finalCorrectAnswer = correctAnswers[correctIndex];

  const questionOption: MCOption = { text: finalCorrectAnswer, id: "a" };

  const questionModel = [questionOption];

  const modelProperty: MCModel = { options: questionModel };

  return {
    text: modelProperty.options[0].text,
    answer: "a",
    answerType: AnswerType.STRING,
    skill: Skill.ADDITION_PROPERTY,
    operator: operator,
    questionType: QuestionType.MULTIPLE_CHOICE_WORD,
    multipleChoice: modelProperty,
  };
}

function getRandomSentencePropertyQuestion(
  min: number,
  max: number,
  operator: string
): Question {
  // correct answers

  // 2+3 = 3 + 2
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);

  const commutativeOption = `${Math.max(a, b)} ${operator} ${Math.min(
    a,
    b
  )} = ${Math.min(a, b)} ${operator} ${Math.max(a, b)}`;

  // 2 + 0 = 2
  const identitynum = getRndInteger(min, max);

  const identityOption = `${identitynum} ${operator} 0 = ${identitynum}`;

  // (2 + 3) + 4 = 2 + (3+4)

  const x = getRndInteger(min, max);
  const y = getRndInteger(min, max);
  const z = getRndInteger(min, max);

  const associativeOption = `(${x} ${operator} ${y}) ${operator} ${z} = ${x} ${operator} (${y} ${operator} ${z})`;

  // wrong answers

  // 2 + 3 = 2 + 3

  const wrongCommutativeOption = `${Math.max(a, b)} ${operator} ${Math.min(
    a,
    b
  )} = ${Math.max(a, b)} ${operator} ${Math.min(a, b)}`;

  // (2 + 1) + 4 = 2 + 1 + 1
  const wrongAssociativeOption = `(${x} ${operator} ${y}) ${operator} ${z} = (${x} ${operator} ${y}) ${operator} ${y}`;

  // 2 +0 =20
  const wrongIdentityOption = `${identitynum} ${operator} 0 = ${identitynum}0`;

  const wrongOptions: string[] = [
    wrongCommutativeOption,
    wrongAssociativeOption,
    wrongIdentityOption,
  ];

  const wrongIndex = getRndInteger(0, wrongOptions.length);

  const wrongDisplay = wrongOptions[wrongIndex];

  // correct answer determiner

  const additionPropertyTypes = [
    AdditionProperty.ASSOCIATIVE,
    AdditionProperty.COMMUTATIVE,
    AdditionProperty.IDENTITY,
  ];
  const typeIndex = getRndInteger(0, additionPropertyTypes.length);
  const additionPropertyType = additionPropertyTypes[typeIndex];
  const text = `Which equation shows the ${additionPropertyType} Property?`;

  // final question arr

  const questionArr: string[] = [
    commutativeOption,
    identityOption,
    associativeOption,
    wrongDisplay,
  ];

  const option1: MCOption = { text: questionArr[0], id: "a" };
  const option2: MCOption = { text: questionArr[1], id: "b" };
  const option3: MCOption = { text: questionArr[2], id: "c" };
  const option4: MCOption = { text: questionArr[3], id: "d" };

  const optionarr = [option1, option2, option3, option4];

  const model: MCModel = { options: shuffle(optionarr) };

  return {
    text: text,
    skill: Skill.ADDITION_PROPERTY,
    answerType: AnswerType.STRING,
    answer: additionPropertyType,
    operator: operator,
    questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE,
    multipleChoice: model,
  };
}
}
