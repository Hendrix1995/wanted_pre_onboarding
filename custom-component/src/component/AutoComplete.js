import React, { useState, useEffect } from "react";

function AutoComplete() {
    const [inputValue, setInputValue] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [options, setOptions] = useState(["antique", "vintage", "중고A급", "rustic", "refurbished"]);
    const [suggestions, setSuggestions] = useState([]);

    const inputValueHandler = (text) => {
        let matches = [];
        if (text) {
            setIsEmpty(true);
            matches = options.filter((el) => {
                const regex = new RegExp(`${text}`, "gi");
                return el.match(regex);
            });
        } else {
            setIsEmpty(false);
        }
        setSuggestions(matches);
        setInputValue(text);
    };

    const dropDownClickHandler = (option) => {
        setInputValue(option);
        const selectedOption = options.filter((el) => el === option);
        setOptions(selectedOption);
    };

    const deleteInputHandler = () => {
        setInputValue("");
        setSuggestions([]);
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
                    <input type="text" className="autocomplete-input" onChange={(e) => inputValueHandler(e.target.value)} value={inputValue} />
                    <i className="fas fa-times" onClick={deleteInputHandler} />
                </div>
                {isEmpty ? (
                    <div className={suggestions.length === 0 ? "" : "dropDownList-box"}>
                        {suggestions.map((el, index) => (
                            <li className="dropDownList" key={index} onClick={() => dropDownClickHandler(el)}>
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
