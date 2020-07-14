import React, { useReducer, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisH,
    faTachometerAlt,
    faCalendarAlt,
    faCommentDots,
    faAddressBook,
    faBookmark,
    faStickyNote,
    faClipboardList,
    faChalkboard,
    faCopy,
    faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import { leftSidebarReducer } from "../reducers";

const LeftSidebar: React.FC<{
    handleSidebarType: any;
    onSidebarHover: any;
    isExpand: boolean;
}> = ({ handleSidebarType, onSidebarHover, isExpand }) => {
    const [state, dispatch] = useReducer(leftSidebarReducer, {
        expanded: false,
    });
    const wrappedRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function handleClickOutsideComponent(event: any): void {
            const pageWidth: number = window.innerWidth;

            if (pageWidth < 768) {
                if (
                    wrappedRef.current &&
                    !wrappedRef.current.contains(event?.target)
                ) {
                    handleSidebarType();
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutsideComponent);
        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutsideComponent
            );
        };
    }, [wrappedRef]);

    return (
        <aside
            className={`left-sidebar ${isExpand ? "expanded" : null}`}
            ref={wrappedRef}
            onMouseOver={() => onSidebarHover()}
            onMouseOut={() => onSidebarHover()}
        >
            <nav className="sidebar-nav">
                <ul className="nav-parent">
                    <li className="nav-item-cap">
                        <FontAwesomeIcon icon={faEllipsisH} className="icon" />
                        <span className="menu">Main Menu</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link active">
                            <FontAwesomeIcon
                                icon={faTachometerAlt}
                                className="icon"
                            />
                            <span className="menu">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="icon"
                            />
                            <span className="menu">Calendar</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faCommentDots}
                                className="icon"
                            />
                            <span className="menu">Chat Apps</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faAddressBook}
                                className="icon"
                            />
                            <span className="menu">Contact</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faBookmark}
                                className="icon"
                            />
                            <span className="menu">Invoice</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faStickyNote}
                                className="icon"
                            />
                            <span className="menu">Notes</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faClipboardList}
                                className="icon"
                            />
                            <span className="menu">Todo</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon
                                icon={faChalkboard}
                                className="icon"
                            />
                            <span className="menu">Taskboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            style={{ cursor: "pointer" }}
                            className={`nav-link has-arrow active ${
                                state.expanded ? "expanded" : null
                            }`}
                            onClick={() =>
                                dispatch({
                                    type: "EXPAND",
                                    payload: !state.expanded,
                                })
                            }
                        >
                            <FontAwesomeIcon icon={faCopy} className="icon" />
                            <span className="menu">More menu</span>
                        </a>
                        <ul
                            className={`nav-parent collapse ${
                                state.expanded ? "expanded" : null
                            }`}
                        >
                            <li className="nav-item">
                                <Link to="/menu1" className="nav-link">
                                    <FontAwesomeIcon
                                        icon={faDotCircle}
                                        className="icon"
                                    />
                                    <span className="menu">Child Menu 2</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu1" className="nav-link">
                                    <FontAwesomeIcon
                                        icon={faDotCircle}
                                        className="icon"
                                    />
                                    <span className="menu">Child Menu 1</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default LeftSidebar;
