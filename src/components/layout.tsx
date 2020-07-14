/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import LeftSidebar from "./left-sidebar";
import "../styles/style.scss";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [sidebarType, setSidebarType] = useState("full-sidebar");
    const [expand, setExpand] = useState<boolean>(false);
    const [pageWidth, setPageWidth] = useState<number>(0);

    function handleSidebarType(): void {
        if (sidebarType === "full-sidebar") {
            setSidebarType("mini-sidebar");
        } else {
            setSidebarType("full-sidebar");
        }
    }

    function handleSidebarHover(): void {
        if (pageWidth >= 768) {
            setExpand(!expand);
        }
    }

    useEffect(() => {
        function handleResize(): void {
            const width = window.innerWidth;
            setPageWidth(width);

            if (width < 768) {
                setSidebarType("mini-sidebar");
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="main-wrapper" data-sidebartype={sidebarType}>
            <Header
                handleSidebar={handleSidebarType}
                onNavbarHeaderHover={handleSidebarHover}
                isNavbarHeaderExpanded={expand}
            />
            <LeftSidebar
                handleSidebarType={handleSidebarType}
                onSidebarHover={handleSidebarHover}
                isExpand={expand}
            />
            <div className="page-wrapper">
                <main>{children}</main>
                <footer className="footer">
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
