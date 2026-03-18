import React from "react";

const Toast = ({ titulo, tiempo, mensaje, imagen }) => {
    return (
        <div className="toast show" role="alert">

            <div className="toast-header">
                <strong className="me-auto">{titulo}</strong>
                <small className="text-body-secondary">{tiempo}</small>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                ></button>
            </div>

            <div className="toast-body">
                {mensaje}
            </div>

        </div>
    );
};

export default Toast;