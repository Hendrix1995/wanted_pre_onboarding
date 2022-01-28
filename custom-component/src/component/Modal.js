import React, { useState } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <h2>Modal</h2>
            <div className="modal-container">
                <button className="modal-button" onClick={openModalHandler}>
                    Open Modal
                </button>
                {isOpen ? (
                    <div className="modal-backdrop" onClick={openModalHandler}>
                        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                            <i className="fas fa-times" onClick={openModalHandler} />
                            <h4>HELLO CODESTATES!</h4>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export default Modal;
