import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { WordProblemModel } from "./WordProblemModel";

export enum AnswerType {
  NUMBER,
  BOOLEAN,
  STRING,
  ARRAY,
}

export type Question = {
  text: string;
  answer: string; // only accepts strings so Array<Num> doesn't work
  answerType: AnswerType;
  questionType: QuestionType;
  skill?: Skill;
  operator?: string; //Numbers unit does not have a operator
  wordProblem?: WordProblemModel; //value is only stored if QuestionType is wordProblem
  multipleChoice?: MCModel;
  fillInTheBlank?: fillBlankModel;
  placeholder?: string; // placeholder value for fill in the blanks
  displayNum?: number; //randomizes visualnumber type
  arrayAns?: Array<number>;
  budgetCostModel? :Array<ItemCostModel>;
};

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  title?: string;
  options: Array<MCOption>;
};
export type fillBlankModel = {
  options: Array<FillOption>;
};

export type FillOption = {
  text: string;
};

export type ItemCostModel = {
  title: string;
  cost: number;
}

export type personData = {
  name: string,
  month: string,
  income: Array<ItemCostModel>,
  expenses:Array<ItemCostModel>,
  totalIncome: number,
  totalExpenses: number,
};
