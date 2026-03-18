import React from "react";

const ScrollSpy = ({ titulo, link1, link2, drop1, drop2, drop3, Contenido1, Contenido2, Contenido3, Contenido4, Contenido5 }) => {
    return (
        <div>

            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                <a className="navbar-brand" href="#">
                    {titulo}
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">
                            {link1}
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">
                            {link2}
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                        >
                            Dropdown
                        </a>

                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#scrollspyHeading3">
                                    {drop1}
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#scrollspyHeading4">
                                    {drop2}
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#scrollspyHeading5">
                                    {drop3}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true"
                className="scrollspy-example bg-body-tertiary p-3 rounded-2"
                tabIndex="0"
                style={{ height: "200px", overflowY: "scroll" }}
            >
                <h4 id="scrollspyHeading1">{link1}</h4>
                <p>{Contenido1}</p>

                <h4 id="scrollspyHeading2">{link2}</h4>
                <p>{Contenido2}</p>

                <h4 id="scrollspyHeading3">{drop1}</h4>
                <p>{Contenido3}</p>

                <h4 id="scrollspyHeading4">{drop2}</h4>
                <p>{Contenido4}</p>

                <h4 id="scrollspyHeading5">{drop3}</h4>
                <p>{Contenido5}</p>
            </div>

        </div>
    );
};

export default ScrollSpy;