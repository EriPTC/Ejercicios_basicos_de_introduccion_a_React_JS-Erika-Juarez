import React from "react";

const Spinner = ({ color1, color2, color3, color4, color5, color6, color7, color8, }) => {
    return (
        <div className="d-flex flex-wrap gap-2">

            <div className={`spinner-border text-${color1}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color2}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color3}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color4}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color5}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color6}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color7}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

            <div className={`spinner-border text-${color8}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    );
};

export default Spinner;