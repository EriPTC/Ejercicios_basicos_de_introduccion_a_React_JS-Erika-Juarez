import React from "react";

const Paginacion = ({ anterior, pagina1, pagina2, pagina3, siguiente }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">

                <li className="page-item">
                    <a className="page-link" href="#">
                        {anterior}
                    </a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">
                        {pagina1}
                    </a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">
                        {pagina2}
                    </a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">
                        {pagina3}
                    </a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">
                        {siguiente}
                    </a>
                </li>

            </ul>
        </nav>
    );
};

export default Paginacion;