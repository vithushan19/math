import React from "react";
import { Story, Meta } from "@storybook/react";

import UnitPriceQuestion, { UnitPriceQuestionProps } from "./UnitPriceQuestion";
import { QuestionType } from "../../pages/api/questionTypes";
import { Question } from "../../pages/api/question";

export default {
  title: "finance/Unit Price",
  component: UnitPriceQuestion,
  argTypes: {},
} as Meta;

const Template: Story<UnitPriceQuestionProps> = (args) => (
  <UnitPriceQuestion {...args} />
);

export const Primary = Template.bind({});
const question: Question = {
  text: "Question",
  answer: "100",
  questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM,
};
Primary.args = {
  total: 1000,
  numberOfObjects: 10,
  image: "/images/banana.png",
  name: "Kari",
  singularFruit: "banana",
  pluralFruit: "bananas",
  question: text,
};
