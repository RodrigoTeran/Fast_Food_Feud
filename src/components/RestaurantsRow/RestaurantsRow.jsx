import * as React from "react"
import { Fragment } from 'react'
import ChipComponent from "../Chip/Chip"

export function RestaurantsRow({
    restaurants,
    currRestaurant,
    setCurrRestarurant
}) {
    return (
        <div className="RestaurantsRow">
            <h2 className="title">Restaurants</h2>
            <div className="restaurants options">
                {restaurants.map((item, index) => (
                    <Fragment key={index}>
                        <ChipComponent _click={() => {
                            setCurrRestarurant(item)
                        }} isActive={currRestaurant == item} label={item} />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default RestaurantsRow