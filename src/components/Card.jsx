import React from "react";

export default function Card(props) {
    let badgeText = "";
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText !== "" && <div className="card--badge">{badgeText}</div>}
            <img src = {`/images/${props.item.coverImg}`} className = "card--image"/>
            <div className = "card--stats">
                <img src = "/images/star.png" className = "star"/>
                <span className = "grey">{props.item.stats.rating}</span>
                <span className = "grey">({props.item.stats.reviewCount}) • </span>
                <span className = "grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} / person"</span></p>
        </div>
    )
}