

import './Visualize.css';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import selectionSort from '../algorithms/SelectionSort';
import mergeSort from '../algorithms/MergeSort';
import quickSort from '../algorithms/QuickSort';
import bubbleSort from '../algorithms/BubbleSort';
import insertionSort from '../algorithms/InsertionSort';
import heapSort from '../algorithms/HeapSort';

const springAnim = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

class Visualize extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      method: localStorage.getItem('selectedAlgorithm') || 'Algorithms',
      length: 0,
      swapCount: 0,
      passCount: 0,
      speed: 600,
      isSorting: false,
      currentInterval: null,
      currentStep: 0,
      results: [],
      arraySizeInput: Math.floor(window.innerWidth / 50 / 2),
    };
  }

  createArray = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push({
        value: Math.floor(Math.random() * (170 - 30 + 1)) + 30,
        id: 'id-' + i,
      });
    }
    this.setState({
      arr: arr,
      length: size,
      swapCount: 0,
      passCount: 0,
      isSorting: false,
      currentStep: 0,
      results: [],
    });
  };

  handleArraySizeInput = (e) => {
    const size = Math.max(2, Math.min(Math.floor(window.screen.width / 50), parseInt(e.target.value)));
    this.setState({ arraySizeInput: size }, () => {
      this.createArray(size);
    });
  };

  componentDidMount() {
    this.createArray(this.state.arraySizeInput);
    window.addEventListener('resize', () => {
      this.createArray(this.state.arraySizeInput);
    });
  }

  randomize = () => {
    this.createArray(this.state.length);
  };

  sortFunc = (e) => {
    e.preventDefault();
    const { arr, length, method } = this.state;
    let results = [];
    let swapCount = 0;
    let passCount = 0;

    document.getElementById('error').style = 'display:none';

    if (method === 'Algorithms') {
      document.getElementById('error').style = 'display:block';
    } else {
      let sortedResult;
      if (method === 'Bubble Sort') sortedResult = bubbleSort(arr, length);
      else if (method === 'Selection Sort') sortedResult = selectionSort(arr, length);
      else if (method === 'Merge Sort') sortedResult = mergeSort(arr, length);
      else if (method === 'Quick Sort') sortedResult = quickSort(arr, arr.length);
      else if (method === 'Insertion Sort') sortedResult = insertionSort(arr, length);
      else if (method === 'Heap Sort') sortedResult = heapSort(arr, length);

      results = sortedResult.result;
      swapCount = sortedResult.swapCount;
      passCount = sortedResult.passCount;

      this.setState({ results, swapCount, passCount }, () => {
        this.playPause();
      });
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
          const { arr: newArr, swapCount, passCount } = results[prevState.currentStep];

          return {
            arr: newArr,
            currentStep: prevState.currentStep + 1,
            swapCount,
            passCount,
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
      case 'Bubble Sort':
        return (
          <>
          <br></br>           <b>Time Complexity:</b>
<table className="tc"
   
>
    <thead>
        <tr>
            <th style={{ border: '2px solid white' }}>Case</th>
            <th style={{ border: '2px solid white' }}>Time Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style={{ border: '2px solid white' }}>Best Case</td>
            <td style={{ border: '2px solid white' }}>O(n)</td>
        </tr>
        <tr>
            <td style={{ border: '2px solid white' }}>Average Case</td>
            <td style={{ border: '2px solid white' }}>O(n<sup>2</sup>)</td>
        </tr>
        <tr>
            <td style={{ border: '2px solid white' }}>Worst Case</td>
            <td style={{ border: '2px solid white' }}>O(n<sup>2</sup>)</td>
        </tr>
    </tbody>
</table><br></br>
            Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
            the adjacent elements if they are in the wrong order. This algorithm is not suitable for 
            large data sets as its average and worst-case time complexity are quite high.<br/><br/>

            <b>Steps of the Bubble Sort Algorithm:</b><br/>
            <ol>
                <li>Start at the first element of the array.</li>
                <li>Compare the current element with the next element.</li>
                <li>If the current element is greater than the next element, swap them.</li>
                <li>Move to the next pair of elements and repeat the comparison and swap if needed.</li>
                <li>After each complete pass through the array, the largest unsorted element is placed at its correct position at the end of the array.</li>
                <li>Repeat the above process of a pass for the remaining unsorted elements until the entire array is sorted.</li>
            </ol>
            
            <b>Advantages of Bubble Sort:</b><br/>
            - Bubble sort is easy to understand and implement.<br/>
            - It does not require any additional memory space.<br/><br/>
            
            <b>Disdvantages of Bubble Sort:</b><br/>
            - Bubble sort has a time complexity of O(n<sup>2</sup>) which makes it very slow for large data sets.<br/>
            - Bubble sort is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases.<br/><br/>
            
            <b>Applications of Bubble Sort:</b><br/>
            - A good choice for sorting small lists when simplicity is more important than efficiency.<br/>
            - Used in simple graphics applications that require sorting small arrays.<br/><br/>

 

          </>
        );
      case 'Selection Sort':
        return (
          <><br></br>     <b>Time Complexity:</b>
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
              <td>O(n<sup>2</sup>)</td>
          </tr>
          <tr>
              <td>Average Case</td>
              <td>O(n<sup>2</sup>)</td>
          </tr>
          <tr>
              <td>Worst Case</td>
              <td>O(n<sup>2</sup>)</td>
          </tr>
      </tbody>
  </table><br></br>
            Selection Sort is a comparison-based sorting algorithm. 
            It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. 
            This process continues until the entire array is sorted.<br/><br/>

            <b>Steps of the Selection Sort Algorithm:</b><br/>
            <ol>
                <li>Start with the first element as the initial position.</li>
                <li>Find the smallest element in the unsorted portion of the array.</li>
                <li>Swap this smallest element with the first unsorted element.</li>
                <li>Move the boundary of the sorted portion one element forward.</li>
                <li>Repeat steps 2-4 for the remaining unsorted elements until the entire array is sorted.</li>
            </ol>

            <b>Advantages of Selection Sort:</b><br/>
            - Easy to understand and implement, making it ideal for teaching basic sorting concepts.<br/>
            - Requires only a constant O(1) extra memory space.<br/><br/>

            <b>Disdvantages of Selection Sort:</b><br/>
            - Selection sort has a time complexity of O(n^2) makes it slower compared to algorithms like Quick Sort or Merge Sort.<br/>
            - Does not maintain the relative order of equal elements.<br/><br/>

            <b>Applications of Selection Sort:</b><br/>
            - Ideal for systems with limited memory due to its in-place sorting capability.<br/>
            - Used in simple embedded systems where resource availability is limited and simplicity is important.<br/>
            - Perfect for teaching fundamental sorting mechanisms and algorithm design.<br/><br/>

       
          </>
        );
      case 'Merge Sort':
        return (
            <><br></br>
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
                  <td>O(n log n)</td>
              </tr>
              <tr>
                  <td>Average Case</td>
                  <td>O(n log n)</td>
              </tr>
              <tr>
                  <td>Worst Case</td>
                  <td>O(n log n)</td>
              </tr>
          </tbody>
      </table><br></br>
              Merge sort is a sorting algorithm that follows the divide-and-conquer approach. 
              It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.<br/><br/>

              <b>Steps of the Merge Sort Algorithm:</b><br/>
              It follows the divide-and-conquer approach to sort a given array of elements.
            <ol>
                <li><b>Divide:</b> Divide the list or array recursively into two halves until it can no more be divided.</li>
                <li><b>Conquer:</b> Each subarray is sorted individually using the merge sort algorithm.</li>
                <li><b>Merge:</b> The sorted subarrays are merged back together in sorted order. 
                  The process continues until all elements from both subarrays have been merged.</li>
            </ol>

              <b>Advantages of Merge Sort:</b><br/>
              - <b>Stability:</b> Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.<br/>
              - <b>Guaranteed worst-case performance:</b> Merge sort has a worst-case time complexity of O(n log n) , which means it performs well even on large datasets.<br/>
              - <b>Simple to implement:</b> The divide-and-conquer approach is straightforward.<br/><br/>

              <b>Disdvantages of Merge Sort:</b><br/>
              - <b>Space complexity:</b> Merge sort requires additional memory to store the merged sub-arrays during the sorting process.<br/>
              - <b>Not in-place:</b> Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.<br/><br/>

              <b>Applications of Selection Sort:</b><br/>
              - Inversion counting<br/>
              - It is a preferred algorithm for sorting Linked lists.<br/>
              - It can be easily parallelized as we can independently sort subarrays and then merge.<br/><br/>

              
            </>
          );
      case 'Quick Sort':
        return (
          <><br></br>
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
                <td>&Omega;[O(n log n)]</td>
            </tr>
            <tr>
                <td>Average Case</td>
                <td>&theta;[O(n log n)]</td>
            </tr>
            <tr>
                <td>Worst Case</td>
                <td>O(n<sup>2</sup>)</td>
            </tr>
        </tbody>
    </table>
    <br></br>
            QuickSort is a sorting algorithm based on the <b>Divide and Conquer</b> that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.<br/><br/>

            <b>Steps of the Quick Sort Algorithm:</b><br/>
            <ol>
                <li><b>Choose a Pivot:</b> Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median).</li>
                <li><b>Partition the Array:</b> Rearrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.</li>
                <li><b>Recursively Call:</b> Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).</li>
                <li><b>Base Case:</b> The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.</li>
            </ol>

            <b>Advantages of Quick Sort:</b><br/>
            - Fastest general purpose algorithm for large data when stability is not required.<br/>
            - It is tail recursive and hence all the tail call optimization can be done.<br/>
            - It is Cache Friendly as we work on the same array to sort and do not copy data to any auxiliary array.<br/><br/>

            <b>Disdvantages of Quick Sort:</b><br/>
            - It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions).<br/>
            - It has a worst-case time complexity of O(n2), which occurs when the pivot is chosen poorly.<br/><br/>

            <b>Applications of Quick Sort:</b><br/>
              - Important in theoretical computer science for analyzing average-case complexity and developing new techniques.<br/>
              - Applied in cryptography for generating random permutations and unpredictable encryption keys.<br/>
              - Used in partitioning problems like finding the kth smallest element or dividing arrays by pivot.<br/><br/>

           
          </>
        );
      case 'Insertion Sort':
        return (
          <>
          <br/><b>Time Complexity:</b>
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
                <td>O(n)</td>
            </tr>
            <tr>
                <td>Average Case</td>
                <td>O(n<sup>2</sup>)</td>
            </tr>
            <tr>
                <td>Worst Case</td>
                <td>O(n<sup>2</sup>)</td>
            </tr>
        </tbody>
    </table><br/>
            Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. 
            It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output.<br/><br/>

            <b>Steps of the Insertion Sort Algorithm:</b><br/>
            <ol>
                <li>Start with second element of the array as first element in the array is assumed to be sorted.</li>
                <li>Compare second element with the first element and check if the second element is smaller then swap them.</li>
                <li>Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.</li>
                <li>Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.</li>
                <li>Repeat until the entire array is sorted.</li>
            </ol>

            <b>Advantages of Insertion Sort:</b><br/>
            - Space-efficient.<br/>
            - Adoptive. The number of inversions is directly proportional to number of swaps. For example, no swapping happens for a sorted array and it takes O(n) time only.<br/><br/>

            <b>Disdvantages of Insertion Sort:</b><br/>
            - Inefficient for large lists.<br/>
            - Not as efficient as other sorting algorithms (e.g., merge sort, quick sort) for most cases.<br/><br/>
            
            <b>Applications of Insertion Sort:</b><br/>
              - Used as a subroutine in Bucket Sort<br/>
              - Can be useful when array is already almost sorted (very few inversions)<br/>
              - Since Insertion sort is suitable for small sized arrays, it is used in Hybrid Sorting algorithms along with other efficient algorithms like Quick Sort and Merge Sort. When the subarray size becomes small, we switch to insertion sort in these recursive algorithms. For example IntroSort and TimSort use insertions sort.<br/><br/>
            
          </>
        );
      case 'Heap Sort':
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
                <td>O(n log n)</td>
            </tr>
            <tr>
                <td>Average Case</td>
                <td>O(n log n)</td>
            </tr>
            <tr>
                <td>Worst Case</td>
                <td>O(n log n)</td>
            </tr>
        </tbody>
    </table><br></br>
            Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. 
            It can be seen as an optimization over Selection Sort where we first find the max (or min) element and swap it with the last (or first).<br/><br/>

            <b>Steps of the Heap Sort Algorithm:</b><br/>
            <ol>
                <li>Treat the Array as a Complete Binary Tree</li>
                <li>Build a Max Heap</li>
                <li>Sort the array by placing largest element at end of unsorted array.</li>
                <li>Repeat these steps until there’s only one element left in the heap.</li>
            </ol>

            <b>Advantages of Heap Sort:</b><br/>
            - Memory usage can be minimal. So apart from what is necessary to hold the initial list of items to be sorted, it needs no additional memory space to work.<br/>
            - Simpler to understand than other equally efficient sorting algorithms because it does not use advanced computer science concepts such as recursion.<br/><br/>

            <b>Disdvantages of Heap Sort:</b><br/>
            - Heap sort is costly as the constants are higher compared to merge sort even if the time complexity is O(n Log n) for both.<br/>
            - Heap sort is unstable. It might rearrange the relative order.<br/><br/>
            
            <b>Applications of Heap Sort:</b><br/>
              - Efficiently handles large arrays or lists due to its O(n log n) time complexity.<br/>
              - Used to implement priority queues where elements are processed based on priority.<br/>
              - Suitable for real-time systems that require guaranteed time complexity.<br/><br/>

            
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
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.randomize}>
                    Randomize
                  </a>
                </li>
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
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.setState({ method: 'Bubble Sort' })}
                    >
                      Bubble Sort
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.setState({ method: 'Quick Sort' })}
                    >
                      Quick Sort
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.setState({ method: 'Merge Sort' })}
                    >
                      Merge Sort
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.setState({ method: 'Insertion Sort' })}
                    >
                      Insertion Sort
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.setState({ method: 'Selection Sort' })}
                    >
                      Selection Sort
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.setState({ method: 'Heap Sort' })}
                    >
                      Heap Sort
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
                        max={1000}
                        defaultValue={500}
                        id="changeSpeed"
                      />
                    </li>
                  </div>
                </li>
                <div
                  id="error"
                  className="alert alert-danger"
                  style={{ marginLeft: '10px', display: 'none' }}
                  role="alert"
                >
                  Select an algorithm first!
                </div>
              </ul>
              <button
  className="btn mr-2"  // Increased margin-right for more space
  onClick={() => window.location.href = '/user'}
  style={{ backgroundColor: '#d9534f', color: 'white' }}  // Nicer red shade
>
  Try Custom Input
</button>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick={this.sortFunc}
                >
                  Sort
                </button>
              </form>
              <button className="btn btn-primary ml-2" onClick={this.playPause}>
                {this.state.isSorting ? 'Pause' : 'Play'}
              </button>{' '}
            </div>
          </nav>

          <div className="bars" id="bars" style={{ margin: '0px' }}>
            {this.state.arr && this.state.arr.length > 0 ? (
              this.state.arr.map((element, index) => (
                <motion.div
                  key={element.id}
                  layout
                  transition={springAnim}
                  className={`bar ${element.style}`}
                  id={element.id}
                  style={{ height: element.value * 3, order: index }}
                >
                  {element.value}
                </motion.div>
              ))
            ) : (
              <div>Sorted Successfully!</div>
            )}
          </div>
          <div className="info" style={{ backgroundColor: '#000000f6', padding: '10px', borderRadius: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: 'white', margin: '5px 0' }}>No. of Swaps: {this.state.swapCount}</p>
            <p style={{ color: 'white', margin: '5px 30px' }}>No. of Passes: {this.state.passCount}</p>
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

export default Visualize;
