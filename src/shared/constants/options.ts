import { CategoryList, GoalsList, OptionValue } from "../types";

export const exerciseList: OptionValue<CategoryList>[] = [
  { label: "PT", value: CategoryList.pt },
  { label: "요가필라테스", value: CategoryList.yogaAndPilates },
  { label: "수영", value: CategoryList.swimming },
  { label: "댄스", value: CategoryList.dance },
  { label: "테니스", value: CategoryList.tennis },
  { label: "골프", value: CategoryList.golf },
];
export const fieldList: OptionValue<GoalsList>[] = [
  { label: "기초 체력 증진", value: GoalsList.physicalStrength },
  { label: "체충 감량", value: GoalsList.diet },
  { label: "근력 향상", value: GoalsList.muscle },
  { label: "체형 교정", value: GoalsList.bodyAlignment },
];
