import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import Intro from "../components/Introduction";

const SectionHeader = ({ label }) => (
    <div style={{ textAlign: "left", paddingTop: 72 }}>
        <h4
            style={{
                color: "rgba(25,151,252,1.00)",
                fontWeight: 600
            }}
        >
            {label}
        </h4>
    </div>
);

const ExperienceHeader = ({
    role,
    organization,
    timespan,
    noBorder,
    small
}) => (
    <div
        style={{
            paddingTop: small ? 24 : 48,
            borderBottom: noBorder ? null : "1px solid rgba(230,230,230,1.00)",
            paddingBottom: 8
        }}
    >
        <div
            style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between"
            }}
        >
            <div>
                <h3 style={{ fontWeight: 200 }}>{organization}</h3>
                <h5 style={{ paddingTop: 8 }}>{role}</h5>
            </div>
            <div>
                <h5>{timespan}</h5>
            </div>
        </div>
    </div>
);

const Experience = ({ children }) => (
    <div
        style={{
            paddingTop: 16,
            fontSize: "0.95em",
            fontWeight: 400,
            color: "#666666",
            display: "flex",
            flexDirection: "column"
        }}
    >
        {children}
    </div>
);

const Exp = ({ children }) => (
    <div style={{ paddingBottom: 8 }}>{children}</div>
);
const Tech = ({ children }) => (
    <h5 style={{ color: "#888", fontWeight: 600, paddingTop: 16 }}>
        Tech: {children}
    </h5>
);

const Footer = () => (
    <div
        style={{
            height: 128,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column"
        }}
    />
);

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <SectionHeader label="Experience" />
                <ExperienceHeader
                    small
                    role="Frontend Developer"
                    organization="Expero"
                    timespan="July 2016 - Present"
                />
                <Experience>
                    <Exp>
                        Collaborated on a variety of projects including fin-tech
                        solutions, several rapid proptypes, and mobile
                        applications. All focused on being performant and easy
                        to use.
                    </Exp>

                    <Tech>
                        ReactJS, React Native, D3.js, Electron, HTML, CSS,
                        JavaScript
                    </Tech>
                </Experience>
                <ExperienceHeader
                    role="Programmer"
                    organization="TiltFactor"
                    timespan="June 2014 - July 2016"
                />
                <Experience>
                    <Exp>
                        Created a REST API using MongoDB and NodeJS collecting
                        user OCR corrections.
                    </Exp>
                    <Exp>
                        Created a web socket (socket.io + Go / Golang) based
                        server to quickly prototype multiplayer games
                    </Exp>
                    <Exp>
                        Created a REST API using basic natural language
                        processing for getting similar sentences for user input
                        for use in a game (Go / Golang)
                    </Exp>
                    <Tech>
                        Golang / Go, jQuery, MongoDB, NodeJS, HTML, CSS,
                        JavaScript
                    </Tech>
                </Experience>
                <ExperienceHeader
                    role="Programming Intern"
                    organization="MyBestPlan LLC"
                    timespan="June 2015 - Aug 2016"
                />
                <Experience>
                    <Exp>
                        Part of a team that maintained and iterated the set of
                        existing in-house tools to aid in calculation of the
                        best electrical plan for their customers
                    </Exp>
                    <Exp>
                        Increased performances through refactoring of existing
                        Python code and redesigning of database schemas
                    </Exp>
                    <Exp>
                        Took part in a major upgrade from Django 1.4 to Django
                        1.8
                    </Exp>
                    <Tech>
                        Python 2.7 (Django), HTML / CSS, Javascript, MySQL
                    </Tech>
                </Experience>
                <SectionHeader label="Education" />
                <ExperienceHeader
                    noBorder
                    small
                    role="Computer Science"
                    organization="Dartmouth College"
                    timespan="Sept 2012 - June 2016"
                />
                <Footer />
            </div>
        );
    }
}
