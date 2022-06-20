import * as React from "react"
import NutritionalLabelComponent from "../NutritionalLabel/NutritionalLabel"

export function NutritionalFacts({
    currItem,
    isNutritionalFactRendered,
}) {
    return (
        <div className="NutritionFacts nutrition-facts">
            {isNutritionalFactRendered && (
                <NutritionalLabelComponent item={currItem} />
            )}
        </div>
    )
}

export default NutritionalFacts