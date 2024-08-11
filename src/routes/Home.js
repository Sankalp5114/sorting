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
    "first-header": "SORTING",
    "second-header": "VISUALIZER"
};

// Utility function to get element by ID
function byId(id) {
    return document.getElementById(id);
}

class Home extends Component {
    setSortingMethod = (method) => {
        localStorage.setItem("selectedAlgorithm", method);
        window.location.href = "/visualize";  // Redirect to visualize page
    }
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
                        <span id="first-header">IGNORTS</span><br />
                        <span id="second-header">ISVAULERZI</span>
                    </div>
                </div>
                <div className="content">
                    <a className="card" href="visualize">
                        <div className="front">
                            <p>Bubble Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Bubble sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order.</p>
                                <button className="button">Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="visualize">
                        <div className="front">
                            <p>Quick Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Quick sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions.</p>
                                <button className="button"onClick={() => this.setSortingMethod("Quick Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="visualize">
                        <div className="front">
                            <p>Merge Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Merge sort is a divide-and-conquer sorting algorithm that recursively divides the array into halves, sorts each half, and then merges the sorted halves to produce a fully sorted array.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Merge Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="visualize">
                        <div className="front">
                            <p>Insertion Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Insertion sort is a sorting algorithm that builds the final sorted array one item at a time by repeatedly inserting the current element into its correct position among the previously sorted elements.</p>
                                <button className="button">Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="visualize">
                        <div className="front">
                            <p>Selection Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Selection sort is a comparison-based algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first unsorted element.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Selection Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="visualize">
                        <div className="front">
                            <p>Heap Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to repeatedly extract the maximum (or minimum) element and build a sorted array.</p>
                                <button className="button">Visualize</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
