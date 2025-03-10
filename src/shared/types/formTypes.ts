import { UserFormKey } from "../constants";
import { SexType } from "./user";

export type OptionValue<T> = {
  label: string;
  value: T;
};

export interface IMemberFormData {
  [UserFormKey.NICKNAME]: string;
  [UserFormKey.CELLPHONE]: string;
  [UserFormKey.SEX]: SexType;
  [UserFormKey.AGE]: string;
  [UserFormKey.CITY]: string;
  [UserFormKey.DISTRICT]: string;
  [UserFormKey.GOALS]: string[];
  [UserFormKey.CATEGORY]: string[];
}
export enum GoalsList {
  physicalStrength = "physicalStrength",
  diet = "diet",
  muscle = "muscle",
  bodyAlignment = "bodyAlignment",
}

export enum CategoryList {
  pt = "pt",
  yogaAndPilates = "yogaAndPilates",
  swimming = "swimming",
  dance = "dance",
  golf = "golf",
  tennis = "tennis",
}
