import React from "react";

const Modal = ({movie, show, onClose}) => {
    if (!show) {
        return null;
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{movie.title}</h2>
                </div>
                <div className="modal-body">
                    <p>{movie.description}</p>
                </div>
                <div className="modal-footer">
                    <button 
                        className="home-login"
                        onClick={onClose}
                        >
                            Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;