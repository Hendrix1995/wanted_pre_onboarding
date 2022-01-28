import React, { useState } from "react";

function Tag() {
    const [tags, setTags] = useState(["CodeStates", "JJang"]);
    const [isForced, setIsForced] = useState(false);

    const addTag = (e) => {
        const filtered = tags.filter((el) => el === e.target.value);
        console.log(filtered);
        if (e.target.value !== "" && filtered.length === 0) {
            setTags([...tags, e.target.value]);
        }
        e.target.value = "";
    };

    const removeTag = (tagIndex) => {
        setTags(tags.filter((e, index) => index !== tagIndex));
    };

    const forceHandler = () => {
        setIsForced(!isForced);
    };

    return (
        <section>
            <h2>Tag</h2>
            <div className={isForced ? "tag-container-forced" : "tag-container"}>
                <ul className="tag-list">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className="tag-content">{tag}</span>
                            <span className="fas fa-times" onClick={() => removeTag(index)} />
                        </li>
                    ))}
                </ul>
                <input className="tag-input" onFocus={forceHandler} onBlur={forceHandler} onKeyUp={(e) => (e.key === "Enter" ? addTag(e) : null)} placeholder="Press enter to add tags" />
            </div>
        </section>
    );
}

export default Tag;
