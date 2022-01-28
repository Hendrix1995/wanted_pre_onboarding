import React, { useState } from "react";

function Tab() {
    const tabArr = ["Tab1", "Tab2", "Tab3"];

    const [isSelected, setIsSelected] = useState(0);
    const changeText = (index) => {
        if (index === 0) return "ONE";
        if (index === 1) return "TWO";
        if (index === 2) return "THREE";
    };

    const tabSelectHandler = (index) => {
        setIsSelected(index);
    };

    return (
        <section>
            <h2>Tab</h2>
            <div className="tab-container">
                <div className="tab-box">
                    {tabArr.map((tabs, index) => (
                        <div className={isSelected === index ? "tab-content-selected" : "tab-content"} onClick={() => tabSelectHandler(index)}>
                            {tabs}
                        </div>
                    ))}
                </div>
                <div className="description">Tab menu {changeText(isSelected)}</div>
            </div>
        </section>
    );
}

export default Tab;
