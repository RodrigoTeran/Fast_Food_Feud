import * as React from "react"
import { Fragment } from 'react'
import ChipComponent from "../Chip/Chip"

export function CatColumn({
    categories,
    currCategory,
    setCurrCategory
}) {
    return (
        <div className="CategoriesColumn col" >
            <div className="categories options">
                <h2 className="title">Categories</h2>
                {categories.map((item, index) => (
                    <Fragment key={index}>
                        <ChipComponent _click={() => {
                            setCurrCategory(item)
                        }} isActive={currCategory == item} label={item} />
                    </Fragment>
                ))}
            </div>
        </div >
    )
}

export default CatColumn