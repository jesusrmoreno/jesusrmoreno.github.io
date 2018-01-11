import React from "react";
import Logo from './Logo';

const Intro = () => (
    <div
        style={{
            paddingTop: 32,
            textAlign: 'center',
        }}
    >
        <div style={{ height: 72 }}>
            <img src={Logo} style={{ height: "100%" }} />
        </div>
        <h1 style={{ paddingTop: 8, paddingBottom: 16, fontWeight: 600, color: "#444" }}>
            Jesus Moreno
        </h1>
        <h2 style={{ color: "#888", lineHeight: '1.35em', fontWeight: 400 }}>
            Software developer at{" "}
            <a
                style={{
                    fontWeight: "inherit",
                    fontSize: "inherit",
                    color: "rgba(243,91,36,1.00)",
                    padding: 0
                }}
                href="https://experoinc.com"
            >
                Expero
            </a>{" "}
            with a passion for creating beautiful and performant front-end
            applications.
        </h2>
    </div>
);

export default Intro;
