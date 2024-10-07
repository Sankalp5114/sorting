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
        window.location.href = "/sorting-visualize";  // Redirect to visualize page
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="content">
                    <a className="card" href="sorting-visualize">
                        <div className="front">
                            <p>Bubble Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Bubble sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Bubble Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="sorting-visualize">
                        <div className="front">
                            <p>Quick Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Quick sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Quick Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="sorting-visualize">
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
                    <a className="card" href="sorting-visualize">
                        <div className="front">
                            <p>Insertion Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Insertion sort is a sorting algorithm that builds the final sorted array one item at a time by repeatedly inserting the current element into its correct position among the previously sorted elements.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Insertion Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="sorting-visualize">
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
                    <a className="card" href="sorting-visualize">
                        <div className="front">
                            <p>Heap Sort</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to repeatedly extract the maximum (or minimum) element and build a sorted array.</p>
                                <button className="button" onClick={() => this.setSortingMethod("Heap Sort")}>Visualize</button>
                            </div>
                        </div>
                    </a>
                </div>
                </>
        );
    }
}

export default Sorting;
