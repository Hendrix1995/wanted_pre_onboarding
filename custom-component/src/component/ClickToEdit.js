import React, { useState } from "react";

function ClickToEdit() {
    return (
        <section>
            <h2>ClickToEdit</h2>
            <div className="click-to-adit-container">
                <div className="click-to-adit-box">
                    <span>이름</span>
                    <input type="text" className="click-to-adit-box-input" />
                </div>
                <div className="click-to-adit-box">
                    <span>나이</span>
                    <input type="text" className="click-to-adit-box-input" />
                </div>
                <div className="description">이름 최해커 나이 20</div>
            </div>
        </section>
    );
}

export default ClickToEdit;
