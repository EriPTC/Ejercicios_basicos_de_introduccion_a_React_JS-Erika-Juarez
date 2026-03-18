import React from "react";

const Progreso = ({ valor1, valor2, valor3, valor4 }) => {
    return (
        <div>

            <div
                className="progress mb-2"
                role="progressbar"
                aria-valuenow={valor1}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    className="progress-bar text-bg-success"
                    style={{ width: `${valor1}%` }}
                >
                    {valor1}%
                </div>
            </div>

            <div
                className="progress mb-2"
                role="progressbar"
                aria-valuenow={valor2}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    className="progress-bar text-bg-info"
                    style={{ width: `${valor2}%` }}
                >
                    {valor2}%
                </div>
            </div>

            <div
                className="progress mb-2"
                role="progressbar"
                aria-valuenow={valor3}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    className="progress-bar text-bg-warning"
                    style={{ width: `${valor3}%` }}
                >
                    {valor3}%
                </div>
            </div>

            <div
                className="progress mb-2"
                role="progressbar"
                aria-valuenow={valor4}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div
                    className="progress-bar text-bg-danger"
                    style={{ width: `${valor4}%` }}
                >
                    {valor4}%
                </div>
            </div>

        </div>
    );
};

export default Progreso;