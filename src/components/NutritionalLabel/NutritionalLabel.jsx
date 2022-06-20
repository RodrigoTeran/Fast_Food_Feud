import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel({
  item
}) {
  if (item) {
    return (
      <div className="nutritional-label">
        <h3 className="title">Nutrition Facts</h3>
        <h4 className="item-name">{item.item_name}</h4>
        <ul className="fact-list">
          {nutritionFacts.map(itemMap => {
            return (
              <React.Fragment key={itemMap.id}>
                <NutritionalLabelFact
                  label={itemMap.label}
                  attribute={itemMap.attribute}
                  item={item} />
              </React.Fragment>
            )
          })}
        </ul>
      </div>
    )
  }
  return null;
}

export function NutritionalLabelFact({
  label, attribute, item
}) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{label}</span>{" "}
      <span className="fact-value">
        {item[attribute]}
      </span>
    </li>
  )
}

export default NutritionalLabel
