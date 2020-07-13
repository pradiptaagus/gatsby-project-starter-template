import React, { useReducer } from "react";
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
    faDotCircle
} from "@fortawesome/free-solid-svg-icons";

type Action = {
    type: string,
    payload: boolean
};

function reducer(state: {expanded: boolean}, action: Action) {
    switch (action.type) {
        case 'EXPAND': 
            return {
                ...state,
                expanded: action.payload
            }
        default: 
            return state;
    }
}

const LeftSidebar: React.FC<{}> = ({}) => {
    const [state, dispatch] = useReducer(reducer, {expanded: false});

    return (
        <aside className="left-sidebar">
            <nav className="sidebar-nav">
                <ul className="nav-parent">
                    <li className="nav-item-cap">
                        <FontAwesomeIcon icon={faEllipsisH} className="icon" />
                        <span className="menu">Main Menu</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link active">
                            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
                            <span className="menu">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                            <span className="menu">Calendar</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faCommentDots} className="icon" />
                            <span className="menu">Chat Apps</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faAddressBook} className="icon" />
                            <span className="menu">Contact</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faBookmark} className="icon" />
                            <span className="menu">Invoice</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faStickyNote} className="icon" />
                            <span className="menu">Notes</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faClipboardList} className="icon" />
                            <span className="menu">Todo</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu1" className="nav-link">
                            <FontAwesomeIcon icon={faChalkboard} className="icon" />
                            <span className="menu">Taskboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a style={{cursor: 'pointer'}} className={`nav-link has-arrow active ${state.expanded ? 'expanded' : null}`} onClick={() => dispatch({type: "EXPAND", payload: !state.expanded})}>
                            <FontAwesomeIcon icon={faCopy} className="icon" />
                            <span className="menu">More menu</span>
                        </a>
                        <ul className={`nav-parent collapse ${state.expanded ? 'expanded' : null}`}>
                            <li className="nav-item">
                                <Link to="/menu1" className="nav-link">
                                    <FontAwesomeIcon icon={faDotCircle} className="icon" />
                                    <span className="menu">Child Menu 2</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu1" className="nav-link">
                                    <FontAwesomeIcon icon={faDotCircle} className="icon" />
                                    <span className="menu">Child Menu 1</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default LeftSidebar;