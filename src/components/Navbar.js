import React from "react";
import Link from "gatsby-link";

const Navbar = () => {
    return (
        <nav
            style={{
                display: "flex",
                height: "5em",
                minHeight: "5em",
                backgroundColor: "white",
                alignItems: "flex-end",
                maxWidth: 700,
                width: "100%",
                margin: "0 auto",
                paddingBottom: "1.5em",
                paddingLeft: 32,
                paddingRight: 32
            }}
        >
            <div style={{ flex: 1 }}>
                <Link to="/" style={{ fontWeight: 600 }}>
                    Home
                </Link>
            </div>
            <div
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    display: "flex"
                }}
            >
                <a
                    href="https://www.github.com/jesusrmoreno"
                    style={{ fontWeight: 600 }}
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
