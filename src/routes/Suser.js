import './Svisualize.css';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import linearSearch from '../algorithms/LinearSearch';
import binarySearch from '../algorithms/BinarySearch';

const springAnim = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

class Suser extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      method: 'Linear Search', // Set default algorithm to Linear Search
      length: 0,
      comparisonCount: 0,
      speed: 600,
      isSorting: false,
      currentInterval: null,
      currentStep: 0,
      results: [],
      arraySizeInput: Math.floor(window.innerWidth / 50 / 2),
      low: null, // Initialize low
      mid: null, // Initialize mid
      high: null, // Initialize high
      comparisonResult: '', // Initialize comparisonResult
      target: null, // Store target value
      arrayInput: '', // Initialize arrayInput
      errorMessage: '', // Initialize errorMessage
      resultMessage: '', // Add this line

    };
  }

  createArrayFromInput = (size) => {
    let values = this.state.arrayInput
      .split(',')
      .map((val) => parseInt(val.trim(), 10))
      .filter((val) => !isNaN(val));
    const arr = values.map((value, index) => ({
      value: value,
      id: 'id-' + index,
    }));
    this.setState({
      arr: arr,
      length: size,
      comparisonCount: 0,
      isSorting: false,
      currentStep: 0,
      results: [],
      low: null,
      mid: null,
      high: null,
      comparisonResult: '',
      // Do not reset target here
    });
  };

  handleArrayInputChange = (e) => {
    this.setState({ arrayInput: e.target.value });
  };

  handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    this.setState({ target: value });
  };

  sortFunc = (e) => {
    e.preventDefault();
    const { arr, target } = this.state;
    let results = [];
    let comparisonCount = 0;

    // Reset results and comparisonCount before new search
    this.setState({ results: [], comparisonCount: 0 });

    document.getElementById('error').style.display = 'none';

    // Check if target is not null before proceeding
    if (target !== null) {
      if (this.state.method === 'Linear Search') {
        const searchResult = linearSearch(arr, arr.length, target);
        results = searchResult.result;
        comparisonCount = searchResult.comparisonCount;
      } else if (this.state.method === 'Binary Search') {
        // Ensure the array is sorted before performing binary search
        const sortedArr = [...arr].sort((a, b) => a.value - b.value);
        const searchResult = binarySearch(sortedArr, target);
        results = searchResult.result;
        comparisonCount = searchResult.comparisonCount;

        // Set the sorted array back into state to visualize properly
        this.setState({ arr: sortedArr });
      }

      // Check if results are empty, indicating the element was not found
      if (results.length === 0) {
        this.setState({ comparisonResult: 'Element not found in the array.' ,
          resultMessage: 'Element not found!',
         });
      } else { 
        this.setState({ results, comparisonCount, target, comparisonResult: '' }, () => {
          this.playPause();
        });
      }
    } else {
      // Set an error message in the state instead of using alert
      this.setState({ errorMessage: 'Enter a target value.' });
      document.getElementById('error').style.display = 'block';
    }
  };

  playPause = () => {
    if (this.state.isSorting) {
      clearInterval(this.state.currentInterval);
    } else {
      this.runSortingAnimation();
    }
    this.setState({ isSorting: !this.state.isSorting });
  };

  runSortingAnimation = () => {
    const { results, speed } = this.state;

    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.currentStep < results.length) {
          const {
            arr: newArr,
            low,
            mid,
            high,
            comparisonResult,
            comparisonCount,
          } = results[prevState.currentStep];

          return {
            arr: newArr,
            currentStep: prevState.currentStep + 1,
            comparisonCount,
            low: low !== null ? low : null, // Keep low index
            mid: mid !== null ? mid : null, // Keep mid index
            high: high !== null ? high : null, // Keep high index
            comparisonResult,
          };
        } else {
          clearInterval(intervalId);
          return { isSorting: false, currentStep: 0 };
        }
      });
    }, speed);

    this.setState({ currentInterval: intervalId });
  };

  changeSpeed = (e) => {
    this.setState({
      speed: 1100 - e.target.value,
    });
  };

  getAlgorithmTheory = () => {
    const { method } = this.state;
    switch (method) {
      case 'Linear Search':
        return (
          <>
            <br></br>
            <b>Time Complexity:</b>
            <table className="tc">
              <thead>
                <tr>
                  <th style={{ border: '2px solid white' }}>Case</th>
                  <th style={{ border: '2px solid white' }}>Time Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '2px solid white' }}>Best Case</td>
                  <td style={{ border: '2px solid white' }}>O(1)</td>
                </tr>
                <tr>
                  <td style={{ border: '2px solid white' }}>Average Case</td>
                  <td style={{ border: '2px solid white' }}>O(n)</td>
                </tr>
                <tr>
                  <td style={{ border: '2px solid white' }}>Worst Case</td>
                  <td style={{ border: '2px solid white' }}>O(n)</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            Linear search algorithm is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found; otherwise, the search continues till the end of the dataset.
            <br></br>
            <b>Steps of the Linear Search Algorithm:</b>
            <br />
            <ol>
              <li>Begin at the first element of the collection of elements.</li>
              <li>Compare the current element with the desired element.</li>
              <li>If the current element is equal to the desired element, return true or index to the current element.</li>
              <li>Otherwise, move to the next element in the collection.</li>
              <li>Repeat steps 2-4 until we have reached the end of collection.</li>
              <li>If the end of the collection is reached without finding the desired element, return that the desired element is not in the array.</li>
            </ol>
            <br></br>
            <b>Advantages of Linear Search:</b>
            <br />
            - Linear search can be used irrespective of whether the array is sorted or not. It can be used on arrays of any data type.
            <br />
            - Does not require any additional memory.
            <br></br>
            <b>Disdvantages of Linear Search:</b>
            <br />
            - Linear search has a time complexity of O(n), which in turn makes it slow for large datasets.
            <br />
            - Not suitable for large arrays.
            <br></br>
            <b>Applications of Linear Search:</b>
            <br />
            - When we are dealing with a small dataset.
            <br />
            - When you are searching for a dataset stored in contiguous memory.
            <br></br>
          </>
        );
      case 'Binary Search':
        return (
          <>
            <br></br>
            <b>Time Complexity:</b>
            <table className="tc">
              <thead>
                <tr>
                  <th>Case</th>
                  <th>Time Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Case</td>
                  <td>O(1)</td>
                </tr>
                <tr>
                  <td>Average Case</td>
                  <td>O(log n)</td>
                </tr>
                <tr>
                  <td>Worst Case</td>
                  <td>O(log n)</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.
            The idea of binary search is to use the information that the array is sorted and reduce the time complexity.
            <br></br>
            <b>Steps of the Binary Search Algorithm:</b>
            <br />
            <ol>
              <li>Divide the search space into two halves by finding the middle index “mid”.</li>
              <li>Compare the middle element of the search space with the key.</li>
              <li>If the key is found at middle element, the process is terminated.</li>
              <li>If the key is not found at middle element, choose which half will be used as the next search space.</li >
              <li>This process is continued until the key is found or the total search space is exhausted.</li>
            </ol>
            <br></br>
            <b>Advantages of Binary Search:</b>
            <br />
            - Binary search is faster than linear search, especially for large arrays.
            <br />
            - More efficient than other searching algorithms with a similar time complexity, such as interpolation search or exponential search.
            <br></br>
            <b>Disdvantages of Binary Search:</b>
            <br />
            - The array should be sorted.
            <br />
            - Binary search requires that the data structure being searched be stored in contiguous memory locations.
            <br></br>
            <b>Applications of Binary Search:</b>
            <br />
            - Binary search can be used as a building block for more complex algorithms used in machine learning, such as algorithms for training neural networks or finding the optimal hyperparameters for a model.
            <br />
            - It can be used for searching a database.
            <br></br>
          </>
        );
      default:
        return 'Please select an algorithm to learn more about how it works.';
    }
  };

  render() {
    return (
      <>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.method}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setState({ method: 'Linear Search' })
                      }
                    >
                      Linear Search
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        this.setState({ method: 'Binary Search' })
                      }
                    >
                      Binary Search
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Controls
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="ml-3 nav-item">
                      <a className="nav-link">Array Size</a>
                      <input
                        onChange={this.handleArraySizeInput}
                        type="number"
                        min="2"
                        max={Math.floor(window.screen.width / 10)}
                        value={this.state.arraySizeInput}
                        id="arraySizeInput"
                        className="form-control"
                      />
                    </li>
                    <li className="ml-3 nav-item">
                      <a className="nav-link">Increase Speed</a>
                      <input
                        onChange={this.changeSpeed}
                        type="range"
                        min="100"
                        max="1000"
                        defaultValue={500}
                        id="changeSpeed"
                        className="form-control"
                      />
                    </li>
                  </div>
                </li>
                {/* Added input element for target value after Controls */}
                <li className="nav-item ml-3">
                  <form onSubmit={this.sortFunc} className="form-inline">
                    <label htmlFor="target" className="mr-2" style={{ color: '#000000' }}>
                      Target Value:
                    </label>
                    <input
                      type="number"
                      value={this.state.target}
                      onChange={this.handleInputChange}
                      className="form-control ml-2"
                      style={{
                        width: '100px',
                        backgroundColor: '#054d4d',
                        color: '#FFFFFF',
                        border: 'none',
                        outline: 'none',
                      }}
                      maxLength={3}
                      min={0}
                      max={999}
                    />
                  </form>
                </li>

                <div
                  id="error"
                  className="alert alert-danger"
                  style={{ marginLeft: '10px', display: 'none' ,width: '250px',position:"absolute",right:'42%',height:'50px'}}
                  role="alert"
                >
                  {this.state.errorMessage}
                </div>
              </ul>
              <input
                type="text"
                className="array-input"
                placeholder="Enter array values (comma separated)"
                value={this.state.arrayInput}
                style={{
                  margin: '10px',
                  fontSize: '14px',
                }}
                onChange={this.handleArrayInputChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.createArrayFromInput}
                style={{ margin: '10px' }}
              >
                Generate
              </button>
              <br />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.sortFunc}
              >
                Search
              </button>
              <button className="btn btn-primary ml-2" onClick={this.playPause}>
                {this.state.isSorting ? 'Pause' : 'Play'}
              </button>
            </div>
          </nav>

          <div className="bars1" id="bars1" style={{ margin: '0px' }}>
            {this.state.arr && this.state.arr.length > 0 ? (
              this.state.arr.map((element, index) => (
                <motion.div
                  key={element.id}
                  layout
                  transition={springAnim}
                  className={`bar1 ${element.style}`} // Assign the style based on the element state
                  id={element.id}
                  style={{ height: element.value * 3, order: index }}
                >
                  {element.value}
                </motion.div>
              ))
            ) : (
              <div style={{ color: 'black' }}>Search Completed!</div>
            )}
          </div>

          <div
            className="info"
            style={{
              backgroundColor: '#000000f6',
              padding: '10px',
              borderRadius: '0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems : 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'white',
                margin: '-20px 0',
              }}
            >
              <p style={{ margin: '0 70px' }}>
                No. of Comparisons: {this.state.comparisonCount}
                 
              </p>

              {/* Render comparison details only if Binary Search is selected */}
              {this.state.low !== null &&
                this.state.mid !== null &&
                this.state.high !== null &&
                this.state.method === 'Binary Search' && (
                  <>
                    <p style={{ margin: '0 50px' }}>Low: {this.state.low}</p>
                    <p style={{ margin: '0 0px' }}>Mid: {this.state.mid}</p>
                    <p style={{ margin: '0 50px' }}>High: {this.state.high}</p>
                    <p style={{ margin: '0 50px' }}>
                      Comparison: {this.state.comparisonResult}
                    </p>
                  </>
                )}
                 {/* Render comparison details only if Binary Search is selected */}
              {
                this.state.method === 'Linear Search' && (
                  <>
                   
                    <p style={{ margin: '0 50px' }}>
                      Comparison: {this.state.comparisonResult}
                    </p>
                  </>
                )}
               
            </div>
          </div>

          <div className="theory-section">
            <h3>{this.state.method}</h3>
            <p>{this.getAlgorithmTheory()}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Suser;