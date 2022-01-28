import React, { useState } from "react";

function Toggle() {
    const [isToggleOn, setToggleOn] = useState(false);

    const toggleOnHandler = () => {
        setToggleOn(!isToggleOn);
    };

    return (
        <section>
            <h2>Toggle</h2>
            <div className="toggle-container">
                <div className="toggle-box" onClick={toggleOnHandler}>
                    <div className={isToggleOn ? "toggle-bg-on" : "toggle-bg-off"} />
                    <div className={isToggleOn ? "toggle-circle-on" : "toggle-circle"} />
                </div>
                <div className="toggle-text">Toggle Switch {isToggleOn ? "ON" : "OFF"}</div>
            </div>
        </section>
    );
}

export default Toggle;
