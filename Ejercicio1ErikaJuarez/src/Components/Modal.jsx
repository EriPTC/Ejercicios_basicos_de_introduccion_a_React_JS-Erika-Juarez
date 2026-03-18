import React from "react";

const Modal = ({ titulo, contenido, textoBoton }) => {
    return (
        <div>

            {/* Botón para abrir */}
            <button
                type="button"
                className="btn btn-primary mb-3"
                data-bs-toggle="modal"
                data-bs-target="#miModal"
            >
                {textoBoton}
            </button>

            <div className="modal fade" id="miModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">{titulo}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <p>{contenido}</p>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>

                            <button type="button" className="btn btn-primary">
                                Ok
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;