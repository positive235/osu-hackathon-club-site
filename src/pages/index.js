import React from "react";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "../assets/style.css";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/osu_hackathon_club_logo_icon_right.png";
import { Helmet } from "react-helmet";


export default () => (
    <Layout>
        <Helmet>
            <title>Home | Oregon State University Hackathon Club</title>
        </Helmet>
        <Jumbotron>
            <h1>Oregon State University Hackathon Club</h1>
            <div className="right yellow">
                <h2>Home of BeaverHacks</h2>
            </div>
            <br />
            <img src={logo} alt="OSU BeaverHacks mascot" />
            <div className="orange">
                <p> Our mission is to strengthen the OSU community by fostering connections between students and building stronger programming skills through quarterly coding competitions and workshops. </p>
            </div>
        </Jumbotron>

        <h2>Announcements</h2>
        <div className="upcoming-events scroll">
            <br />
            <div className="green">
                <h3>July 5, 2020</h3>
                <h4>BeaverHacks Summer 2020 Results:</h4>
                <ul>
                    <li>🥇FIRST PLACE OVERALL: <a href="https://devpost.com/software/scribe-y89kw4"><Button variant="orange" size="sm">Scribe</Button></a></li>
                    <li>🥈SECOND PLACE OVERALL: <a href="https://devpost.com/software/library-zfcwo5"><Button variant="orange" size="sm">Readify</Button></a></li>
                    <li>🥉THIRD PLACE OVERALL: <a href="https://devpost.com/software/welcome-to-osu"><Button variant="orange" size="sm">Welcome to OSU</Button></a></li>
                    <li>🏅FIRST PLACE NEW STUDENT: <a href="https://devpost.com/software/welcome-to-osu"><Button variant="orange" size="sm">Welcome to OSU</Button></a></li>
                    <p>Check out all of the projects here: <a href="https://beaverhacks-summer-2020.devpost.com/submissions" target="_blank"><Button variant="orange" size="sm">Devpost</Button></a></p>
                </ul>
            </div>

            <br />
            <div className="blue">
                <h3>May 14, 2020</h3>
                <h4>Hackathon Club in the OSU EECS News!</h4>
                <p><a href="http://blogs.oregonstate.edu/eecsnews/2020/05/14/its-business-as-usual-for-online-hackathon-club/"><Button variant="orange" size="sm">Article here</Button></a></p>
            </div>

            <br />
            <div className="green">
                <h3>May 7, 2020</h3>
                <h4>BeaverHacks Summer 2020</h4><p>Register on Devpost by 11:59 pm on 6/15</p><a href="https://beaverhacks-summer-2020.devpost.com/" target="_blank"><Button variant="orange" size="sm">Devpost</Button></a>
            </div>

            <br />

            <div className="blue">
                <h3>April 27, 2020</h3>
                <h4>HackerRank Weekly Challenges</h4>            
                <a href="https://osu-cs.slack.com/archives/C5GHWF84A" target="_blank"><Button variant="orange" size="sm">Take on our challenges here!</Button></a>
            </div>
        </div>
    </Layout>
)
