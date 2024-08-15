// import './Visualize.css'
// import React, { Component } from "react";
// import { motion } from "framer-motion";
// import selectionSort from "../algorithms/SelectionSort";
// import mergeSort from "../algorithms/MergeSort";
// import quickSort from "../algorithms/QuickSort";
// import bubbleSort from "../algorithms/BubbleSort";
// import insertionSort from "../algorithms/InsertionSort";
// import heapSort from "../algorithms/HeapSort";
// import { NavLink } from "react-router-dom";
// const springAnim = {
//     type: "spring",
//     damping: 20,
//     stiffness: 300
// };
// class Visualize extends Component{
//     constructor(){
//         super();
//         this.state={
//             arr:[],
//             method:localStorage.getItem("selectedAlgorithm") || "Algorithms",
//             length:0,
//             compare:{
//                 i:null,
//                 j:null
//             },
//             sorted:[],
//             speed:600
//         }

//     }
//     createArray=(e=Math.floor(window.innerWidth/50)/2)=>{
//         let arr=[];
//         for(let i=0;i<e;i++){
//             arr.push({
//                 value:Math.floor(Math.random() * ((window.innerHeight/4)-30+1))+30,
//                 id:"id-"+i
//             })
//         }
//         this.setState({
//             arr:arr,
//             length:e,
//             sorted:[],
//             compare:{

//             }
//         })
//     }
//     changeArray=(e)=>{
//         this.createArray(e.target.value)
//     }
//     componentDidMount(){
//         this.createArray();
//         window.addEventListener("resize",(e)=>{
//             this.createArray();
//         })
//     }
//     randomize=()=>{
//         this.createArray(this.state.length)
//     }
//     sortFunc=(e)=>{
//         e.preventDefault();
//         var arr=this.state.arr;
//         let length=this.state.arr.length;
//         var results=[]
//         document.getElementById('error').style="display:none";
//         if(this.state.method=="Algorithms"){
//             document.getElementById('error').style="display:block";
//         }
//         else{
//             if(this.state.method=="Bubble Sort")
//                 results=bubbleSort(arr,length);
//             else if(this.state.method=="Selection Sort")
//                 results=selectionSort(arr,length);
//             else if(this.state.method=="Merge Sort")
//                 results=mergeSort(arr,length);
//             else if(this.state.method=="Quick Sort")
//                 results=quickSort(arr,length);
//             else if(this.state.method=="Insertion Sort")
//                 results=insertionSort(arr,length);
//             else if(this.state.method=="Heap Sort")
//                 results=heapSort(arr,length);
//             for(let i=0;i<results.length;i++){
//                 setTimeout(()=>{
//                     this.setState({
//                         arr:results[i]
//                     })
//                 },this.state.speed*i)
//             }
//         }
//     }

//     changeSpeed=(e)=>{
//         this.setState({
//             speed:1100-e.target.value
//         })
//     }
      
//     render(){
//         return(
//             <>
//             <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"></link>
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <a className="navbar-brand" href="/">Home</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                         <li className="nav-item ">
//                             <a className="nav-link" href="#" onClick={this.randomize}>Randomize<span className="sr-only">(current)</span></a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             {this.state.method}
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                 <a className="dropdown-item" href="#" onClick={()=>this.setState({method:"Bubble Sort"})}>Bubble Sort</a>
//                                 <a className="dropdown-item" href="#" onClick={()=>this.setState({method:"Quick Sort"})}>Quick Sort</a> 
//                                 <a className="dropdown-item" href="#" onClick={()=>this.setState({method:"Merge Sort"})}>Merge Sort</a>
//                                 <a className="dropdown-item" href="#" onClick={()=>this.setState({method:"Insertion Sort"})}>Insertion Sort</a>
//                                 <a className="dropdown-item" href="#" onClick={()=>this.setState({method:"Selection Sort"})}>Selection Sort</a>
//                                 <a className="dropdown-item" href="#" onClick={()=>this.setState({method:"Heap Sort"})}>Heap Sort</a> 
//                             </div>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Controls
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li className="ml-3 nav-item">
//                                     <input onChange={this.changeArray} type="range" min="2" max={Math.floor(window.screen.width/50)} defaultValue={Math.floor((window.screen.width/50)/2)} id="changeSize" />
//                                     <a className="nav-link">Increase Array Size</a>
//                                 </li>
//                                 <li className="ml-3 nav-item">
//                                     <input onChange={this.changeSpeed} type="range" min="100" max={1000} defaultValue={500} id="changeSize"/>
//                                     <a className="nav-link">Increase Speed</a>
//                                 </li>
//                             </div>
//                         </li>
        
//                         <div id="error" className="alert alert-danger" style={{marginLeft:"10px",display:"none"}} role="alert">
//                             Select an algorithm first!
//                         </div>
//                         </ul>
//                         <form className="form-inline my-2 my-lg-0">
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.sortFunc}>Sort</button>
//                         </form>
//                     </div>
                    
//                     </nav>
//                 <div className="bars" id="bars" style={{margin:"20px"}}>
//                     {
//                     (this.state.arr.map((element,index) =>
//                     <motion.div
//                         key={element.id}
//                         layout transition={springAnim}
//                         className={`bar ${element.style}`}
//                         id={element.id}
//                         style={{height:element.value*3,order:index}}
//                     >
                    
//                     {element.value}
//                     </motion.div>
                        
//                     ))}
//                 </div>
//             </div>
//             </>
//         )
//     }
// }
// export default Visualize;

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
      arr: [], // Initialize `arr` as an empty array to avoid undefined issues
      method: localStorage.getItem('selectedAlgorithm') || 'Algorithms',
      length: 0,
      compare: {
        i: null,
        j: null,
      },
      sorted: [],
      speed: 600,
      isSorting: false, // New state for sorting status
      currentInterval: null, // Store the current interval ID
      currentStep: 0, // Keep track of the current step in the sorting process
      results: [], // Store the results from the sorting algorithm
    };
  }

  createArray = (e = Math.floor(window.innerWidth / 50) / 2) => {
    let arr = [];
    for (let i = 0; i < e; i++) {
      arr.push({
        value: Math.floor(Math.random() * ((window.innerHeight / 4) - 30 + 1)) + 30,
        id: 'id-' + i,
      });
    }
    this.setState({
      arr: arr,
      length: e,
      sorted: [],
      compare: {},
      isSorting: false, // Reset sorting state when array is recreated
      currentStep: 0, // Reset current step
      results: [], // Reset results
    });
  };

  changeArray = (e) => {
    this.createArray(e.target.value);
  };

  componentDidMount() {
    this.createArray();
    window.addEventListener('resize', () => {
      this.createArray();
    });
  }

  randomize = () => {
    this.createArray(this.state.length);
  };

  sortFunc = (e) => {
    e.preventDefault();
    var arr = this.state.arr;
    let length = this.state.arr.length;
    var results = [];
    document.getElementById('error').style = 'display:none';

    if (this.state.method === 'Algorithms') {
      document.getElementById('error').style = 'display:block';
    } else {
      if (this.state.method === 'Bubble Sort') results = bubbleSort(arr, length);
      else if (this.state.method === 'Selection Sort') results = selectionSort(arr, length);
      else if (this.state.method === 'Merge Sort') results = mergeSort(arr, length);
      else if (this.state.method === 'Quick Sort') results = quickSort(arr, length);
      else if (this.state.method === 'Insertion Sort') results = insertionSort(arr, length);
      else if (this.state.method === 'Heap Sort') results = heapSort(arr, length);

      this.setState({ results: results }, () => {
        this.playPause(); // Automatically start sorting after selection
      });
    }
  };

  playPause = () => {
    if (this.state.isSorting) {
      clearInterval(this.state.currentInterval); // Pause by clearing interval
    } else {
      this.runSortingAnimation(); // Resume the sorting
    }
    this.setState({ isSorting: !this.state.isSorting });
  };

  runSortingAnimation = () => {
    const { results, currentStep, speed } = this.state;

    const intervalId = setInterval(() => {
      if (currentStep < results.length) {
        this.setState((prevState) => ({
          arr: results[prevState.currentStep],
          currentStep: prevState.currentStep + 1,
        }));
      } else {
        clearInterval(intervalId); // Stop when all steps are completed
        this.setState({ isSorting: false, currentStep: 0 }); // Reset for next run
      }
    }, speed);

    this.setState({ currentInterval: intervalId });
  };

  changeSpeed = (e) => {
    this.setState({
      speed: 1100 - e.target.value,
    });
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
                    Randomize<span className="sr-only">(current)</span>
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
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
                      <input
                        onChange={this.changeArray}
                        type="range"
                        min="2"
                        max={Math.floor(window.screen.width / 50)}
                        defaultValue={Math.floor(window.screen.width / 50 / 2)}
                        id="changeSize"
                      />
                      <a className="nav-link">Increase Array Size</a>
                    </li>
                    <li className="ml-3 nav-item">
                      <input
                        onChange={this.changeSpeed}
                        type="range"
                        min="100"
                        max={1000}
                        defaultValue={500}
                        id="changeSize"
                      />
                      <a className="nav-link">Increase Speed</a>
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
              {/* Play/Pause button */}
            </div>
          </nav>

          <div className="bars" id="bars" style={{ margin: '20px' }}>
            {this.state.arr && this.state.arr.length > 0 ? ( // Ensure arr is defined and has elements
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
              <div>No elements to display</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Visualize;
