import React, { useState, useEffect } from "react";

function AutoComplete() {
    const [inputValue, setInputValue] = useState("");
    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    };
    const inputClear = () => {
        setInputValue("");
    };

    return (
        <section>
            <h2>Autocomplete</h2>
            <div className="autocomplete-container">
                <input type="text" className="autocomplete-input" autoComplete="on" onChange={inputValueHandler} />
                <i className="fas fa-times" onClick={inputClear} />
            </div>
        </section>
    );
}

export default AutoComplete;
