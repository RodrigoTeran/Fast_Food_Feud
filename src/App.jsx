import * as React from "react"
import HeaderComponent from "./components/Header/Header";
import CatColumn from "./components/CategoriesColumn/CategoriesColumn";
import RestaurantsRow from "./components/RestaurantsRow/RestaurantsRow";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import InstructionsComponent from "./components/Instructions/Instructions";
import NutritionalFacts from "./components/NutritionalFacts/NutritionalFacts";
import { useState } from "react";
import { createDataSet } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {

  const [currCategory, setCurrCategory] = useState("");
  const [currRestaurant, setCurrRestarurant] = useState("");
  const [currItem, setCurrItem] = useState({
    calories: "580",
    carbohydrates: "43",
    cholesterol: "85",
    dietary_fiber: "7",
    food_category: "Salads",
    item_description: "Grilled Market Salad w/ Chick n Strips, Lettuce, Baby Greens, Red Cabbage, Carrots, Blue Cheese, Red Apples, Green Apples, Strawberries & Blueberries, Salads; Choice of Adding: Harvest Nut Granola, Roasted Nut Blend & Dressing",
    item_name: "Grilled Market Salad w/ Chick n Strips",
    protein: "39",
    restaurant: "Chick-Fil-A",
    saturated_fat: "2.5",
    serving_size: "",
    serving_size_unit: "",
    sodium: "1090",
    sugar: "14",
    total_fat: "30",
    trans_fat: "0",
  });
  const [isNutritionalFactRendered, setIsNutritionalFactRendered] = useState(false);

  let currentMenuItems = data.filter(item => item.restaurant == currRestaurant && item.food_category == currCategory)

  return (
    <main className="App">
      <CatColumn
        categories={categories}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />

      {/* MAIN COLUMN */}
      <div className="container">
        <HeaderComponent title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} />

        <RestaurantsRow
          restaurants={restaurants}
          currRestaurant={currRestaurant}
          setCurrRestarurant={setCurrRestarurant}
        />

        <InstructionsComponent instructions={appInfo.instructions.start} />

        <div className="MenuDisplay display">
          <MainDisplay
            currItem={currItem}
            currentMenuItems={currentMenuItems}
            setCurrItem={setCurrItem}
            setIsNutritionalFactRendered={setIsNutritionalFactRendered}
          />
          <NutritionalFacts
            currItem={currItem}
            isNutritionalFactRendered={isNutritionalFactRendered}
          />
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
