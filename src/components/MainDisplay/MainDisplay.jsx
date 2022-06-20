import * as React from "react"
import { Fragment } from 'react'
import ChipComponent from "../Chip/Chip"

export function MainDisplay({
    currItem,
    currentMenuItems,
    setCurrItem,
    setIsNutritionalFactRendered
}) {
    return (
        <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, index) => (
                <Fragment key={index}>
                    <ChipComponent _click={() => {
                        setCurrItem(item);
                        setIsNutritionalFactRendered(true);
                    }} isActive={currItem.item_name == item.item_name} label={item.item_name} />
                </Fragment>
            ))}
        </div>
    )
}

export default MainDisplay