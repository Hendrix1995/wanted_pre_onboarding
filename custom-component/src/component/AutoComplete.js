import React, { useState, useEffect } from "react";

function AutoComplete() {
    const [inputValue, setInputValue] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [options, setOptions] = useState(["antique", "vintage", "중고A급", "rustic", "refurbished"]);

    const inputValueHandler = (text) => {
        if (text) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
        setInputValue(text);

        const Regex = new RegExp(text, "i");
        const selectedOption = options.filter((el) => el.match(Regex));
    };

    const dropDownClickHandler = (option) => {
        setInputValue(option);
        const selectedOption = options.filter((el) => el === option);
        setOptions(selectedOption);
    };

    const deleteInputHandler = () => {
        setInputValue("");
    };

    useEffect(() => {
        if (inputValue === "") {
            setIsEmpty(false);
        }
    }, [inputValue]);

    return (
        <section>
            <h2>Autocomplete</h2>
            <div className="autocomplete-container">
                <div className="autocomplete-input-container">
                    <input type="text" className="autocomplete-input" autoComplete="on" onChange={(e) => inputValueHandler(e.target.value)} value={inputValue} />
                    <i className="fas fa-times" onClick={deleteInputHandler} />
                </div>
                {isEmpty ? (
                    <div className="dropDownList-box">
                        {options.map((el, index) => (
                            <li className="dropDownList" key={index} onClick={dropDownClickHandler}>
                                {el}
                            </li>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export default AutoComplete;
