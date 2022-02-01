import React, { useState } from "react";

function ClickToEdit() {
    const [clickToEditValue, setClickToEditValue] = useState({
        name: "김코딩",
        age: 20,
    });

    const onblurHandler = (key) => (e) => {
        setClickToEditValue({ ...clickToEditValue, [key]: e.target.value });
    };

    return (
        <section>
            <h2>ClickToEdit</h2>
            <div className="click-to-adit-container">
                <div className="click-to-adit-box">
                    <span>이름</span>
                    <input type="text" className="click-to-adit-box-input" defaultValue={"김코딩"} onBlur={onblurHandler("name")} />
                </div>
                <div className="click-to-adit-box">
                    <span>나이</span>
                    <input type="number" className="click-to-adit-box-input" defaultValue={20} onBlur={onblurHandler("age")} />
                </div>
                <div className="description">
                    이름 {clickToEditValue.name} 나이 {clickToEditValue.age}
                </div>
            </div>
        </section>
    );
}

export default ClickToEdit;
