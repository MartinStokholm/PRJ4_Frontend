import React from "react";
import Link from "next/link";
import MealPlanColoumn from "./MealPlanColoumn";

const MealPlan = ({ mealDays, mealData }) => {
  return (
    <div className="flex md:flex-wrap flex-col justify-center bg-white overflow-hidden shadow-lg p-2">
      <MealPlanColoumn mealDays={mealDays} mealData={mealData} day="Monday" />
      <MealPlanColoumn mealDays={mealDays} mealData={mealData} day="Tuesday" />
      <MealPlanColoumn
        mealDays={mealDays}
        mealData={mealData}
        day="Wednesday"
      />
      <MealPlanColoumn mealDays={mealDays} mealData={mealData} day="Thursday" />
      <MealPlanColoumn mealDays={mealDays} mealData={mealData} day="Friday" />
      <MealPlanColoumn mealDays={mealDays} mealData={mealData} day="Saturday" />
      <MealPlanColoumn mealDays={mealDays} mealData={mealData} day="Sunday" />
    </div>
  );
};

export default MealPlan;
