import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, _click = ()=>{} }) {
  return (
    <button className={`${isActive ? "chip active" : "chip"}`} onClick={_click}>
      <p className="label">
        {label}
      </p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

/*
calories: "580"
carbohydrates: "43"
cholesterol: "85"
dietary_fiber: "7"
food_category: "Salads"
item_description: "Grilled Market Salad w/ Chick n Strips, Lettuce, Baby Greens, Red Cabbage, Carrots, Blue Cheese, Red Apples, Green Apples, Strawberries & Blueberries, Salads; Choice of Adding: Harvest Nut Granola, Roasted Nut Blend & Dressing"
item_name: "Grilled Market Salad w/ Chick n Strips"
protein: "39"
restaurant: "Chick-Fil-A"
saturated_fat: "2.5"
serving_size: ""
serving_size_unit: ""
sodium: "1090"
sugar: "14"
total_fat: "30"
trans_fat: "0"
*/