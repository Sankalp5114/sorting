import React, { Component } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

const minDelay = 700;
const maxDelay = 900;
const minLetters = 10;
const maxLetters = 18;
const delay = 75;
const startAscii = 65;
const endAscii = 91;

const title = {
    "first-header": "ALGORITHM",
    "second-header": "VISUALIZER"
};

// Utility function to get element by ID
function byId(id) {
    return document.getElementById(id);
}

class Home extends Component {
    componentDidMount() {
        this.headerAnimation();
        byId("header").onclick = this.headerAnimation;
    }

    oneHeaderAnimation = (whichId) => {
        byId(whichId).innerHTML.split("").forEach((item, i) => {
            this.letterAnimation(whichId, item, i);
        });
    }

    headerAnimation = () => {
        this.oneHeaderAnimation('first-header');
        this.oneHeaderAnimation('second-header');
    }

    letterAnimation = async (child, letter, i) => {
        await this.sleep(Math.floor(Math.random() * minDelay) + maxDelay - minDelay);
        let rand = Math.floor(Math.random() * minLetters) + maxLetters - minLetters;
        let target = [];

        for (let k = 0; k < rand; k++) target.push(this.randomLetter());

        target.push(title[child][i]);

        for (let j = 0; j < target.length; j++) {
            this.changeLetter(child, target[j], i);
            await this.sleep(delay);
        }
    }

    randomLetter = () => {
        return String.fromCharCode(startAscii + Math.floor(Math.random() * (endAscii - startAscii)));
    }

    changeLetter = (child, repl, i) => {
        child = byId(child);
        let temp = child.innerHTML;
        child.innerHTML = temp.substr(0, i) + repl + temp.substr(i + 1);
    }

    sleep = (delay) => {
        return new Promise(resolve => {
            setTimeout(resolve, delay);
        });
    }

    render() {
        return (
            <div className='background'>
                <Navbar />
                <div className='container'>
                    <div id="header">
                        <span id="first-header">RATGIMHLO</span><br />
                        <span id="second-header">ISVAULERZI</span>
                    </div>
                </div>
                <div className="content">
                    <a className="card" href="sorting">
                        <div className="front">
                            <p>Sorting</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Sorting algorithms arrange elements in a specific order to optimize data retrieval and processing efficiency, enhancing performance in applications like databases and data analysis.</p>
                                <button className="button">Algorithms</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="searching">
                        <div className="front">
                            <p>Searching</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Searching algorithms efficiently locate specific elements in data structures, enhancing quick access and overall performance in applications.</p>
                                <button className="button">Algorithms</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
