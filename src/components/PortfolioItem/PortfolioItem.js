import React from "react";
import "./PortfolioItem.css";

const PortfolioItem = props => (
    <div
        className="PortfolioItem"
        style={{backgroundImage: `url(${props.backgroundImage})`}}>
        {props.children}
    </div>

);


export default PortfolioItem;
