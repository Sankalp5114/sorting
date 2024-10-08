import React, { Component } from 'react';
import './Sorting.css';
import Navbar from '../components/Navbar';

// Utility function to get element by ID
function byId(id) {
    return document.getElementById(id);
}

class Sorting extends Component {
    setSortingMethod = (method) => {
        localStorage.setItem("selectedAlgorithm", method);
        window.location.href = "/searching-visualize";  // Redirect to visualize page
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="content">
                    <a className="card" href="searching-visualize">
                        <div className="front">
                            <p>Linear Search</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Linear search is an algorithm that checks each element in a list sequentially until the desired element is found or the list ends.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Bubble Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="searching-visualize">
                        <div className="front">
                            <p>Binary Search</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Binary search is an efficient algorithm that repeatedly divides a sorted list in half to locate a target value.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Quick Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>                    
                </div>
                </>
        );
    }
}

export default Sorting;
