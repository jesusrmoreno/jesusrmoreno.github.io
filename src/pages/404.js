import React from "react";

const NotFoundPage = () => (
    <div
        style={{
            margin: "0 auto",
            maxWidth: 700,
            width: "100%",
            paddingLeft: 32,
            paddingRight: 32
        }}
    >
        <div
            style={{
                paddingTop: 32,
                textAlign: "left"
            }}
        >
            <h1 style={{ paddingBottom: 16, fontWeight: 600, color: "#444" }}>
                Not Found
            </h1>
            <h2 style={{ color: "#888", lineHeight: "1.35em" }}>
                You just hit a page that doesn't exist... :(
            </h2>
        </div>
    </div>
);

export default NotFoundPage;
