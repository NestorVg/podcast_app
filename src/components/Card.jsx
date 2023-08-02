import React from "react"
import '../css/card.css'

export const Card = ({children,className = "",onClickChange}) => {
    return (
        <div className={`container_card ${className}` } onClick={onClickChange}>
            {children}
        </div>
    );
}
