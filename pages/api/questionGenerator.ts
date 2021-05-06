import { QuestionType } from './questionTypes';
import { setWordProblem, WordProblemModel } from './WordProblemModel';

const NUM_QUESTIONS = 5;

export type FlashcardQuestion = {
	text: String;
	answer: number;
};
export enum Topic {
	NUMBERS,
	ADDITION,
	SUBTRACTION,
	MULTIPLICATION,
	DIVISION
}

export enum TestLength {
	SHORT,
	MEDIUM,
	LONG
}

export enum Difficulty {
	NONE,
	EASY,
	MEDIUM,
	HARD
}

export type Question = {
	text: string;
	answer: number;
	questionType: QuestionType;
	operator?: string;
	wordProblem?: WordProblemModel;
};

export const generateQuestionsForDiagnostic = (testLength: TestLength, topics: Topic[]) => {
	let questionsPerSection = 0;
	switch (testLength) {
		case TestLength.SHORT:
			questionsPerSection = 5;
			break;
		case TestLength.MEDIUM:
			questionsPerSection = 8;
			break;
		case TestLength.LONG:
			questionsPerSection = 10;
			break;
		default:
			questionsPerSection = 1;
	}
	let questions: Question[] = [];
	topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.EASY, questionsPerSection)));
	topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.MEDIUM, questionsPerSection)));
	topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.HARD, questionsPerSection)));

	return questions;
};

export const generateQuestions = (slug: string, currentLevel: number) => {
	if (slug != null) {
		if (slug.toLowerCase() == 'numbers') {
			return generateQuestionsForTopic(Topic.NUMBERS, currentLevel, NUM_QUESTIONS);
		} else {
			return generateQuestionsForTopic(Topic.ADDITION, currentLevel, NUM_QUESTIONS);
		}
	}
	return [];
};

function getRandomNumbersQuestion(min: number, max: number): Question {
	const a = getRndInteger(min, max);
	const b = getRndInteger(min, max);
	const text = `Which is bigger ${a} or ${b}?`;

	return {
		text: text,
		answer: Math.max(a, b),
		questionType: QuestionType.COMPARISON_WORD_PROBLEM
	};
}

const generateQuestionsForTopic = (topic: Topic, currentLevel: Difficulty, numberOfQuestions: number) => {
	let questionGenerator: (min: number, max: number) => FlashcardQuestion;
	switch (topic) {
		case Topic.NUMBERS:
			questionGenerator = getRandomNumbersQuestion;
			break;
		case Topic.ADDITION:
			questionGenerator = getRandomAdditionQuestion;
			break;
		case Topic.SUBTRACTION:
			questionGenerator = getRandomSubtractionQuestion;
			break;
		case Topic.MULTIPLICATION:
			questionGenerator = getRandomMultiplicationQuestion;
			break;
		case Topic.DIVISION:
			questionGenerator = getRandomDivisionQuestion;
			break;
		default:
			questionGenerator = getRandomAdditionQuestion;
	}

	const res = [];
	for (let i = 0; i < numberOfQuestions; i++) {
		let min = 1;
		let max = 10;
		if (currentLevel == Difficulty.MEDIUM) {
			min = 11;
			max = 100;
		} else if (currentLevel == Difficulty.HARD) {
			min = 101;
			max = 1000;
		}
		res.push(questionGenerator(min, max));
	}
	return res;
};

function getRandomAdditionQuestion(min: number, max: number) {
	const add = (a: number, b: number) => a + b;
	return getRandomBinaryQuestion(min, max, '+', add);
}
function getRandomSubtractionQuestion(min: number, max: number) {
	const subtract = (a: number, b: number) => a - b;
	return getRandomBinaryQuestion(min, max, '-', subtract);
}
function getRandomMultiplicationQuestion(min: number, max: number) {
	const multiply = (a: number, b: number) => a * b;
	return getRandomBinaryQuestion(min, max, 'x', multiply);
}
function getRandomDivisionQuestion(min: number, max: number) {
	const a = getRndInteger(min, max);
	const b = getRndInteger(min, max);
	const product = a * b;

	const text = `${product} / ${b} =`;
	const types = [ QuestionType.VERTICAL_EQUATION, QuestionType.HORIZONTAL_EQUATION ];
	const type = types[getRndInteger(0, types.length)];

	return {
		text: text,
		answer: a,
		questionType: type,
		operator: '÷'
	};
}

function getRandomBinaryQuestion(
	min: number,
	max: number,
	operator: string,
	answerFunction: (a: number, b: number) => number

): Question {
	const a = getRndInteger(min, max);
	const b = getRndInteger(min, max);

	const text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} =`;
	const types = [
		QuestionType.VERTICAL_EQUATION,
		QuestionType.HORIZONTAL_EQUATION,
		QuestionType.BINARY_WORD_PROBLEM
	];
	const type = types[getRndInteger(0, types.length)];
	//condition for if it is wordProblem

	return {
		text: text,
		answer: answerFunction(Math.max(a, b), Math.min(a, b)),
		questionType: type,
		operator: operator,
		wordProblem: setWordProblem(),	
	};
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}

