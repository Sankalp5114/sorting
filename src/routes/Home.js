import React,{Component} from 'react'
import './Home.css'

//import Navbar from '../components/Navbar'

class Home extends Component{
  render(){
  return (
    <>
    <body className='background'>
      {/* <Navbar /> */}
      <div className='container'>
        <div className='name'>
          Sorting Visualizer
          <p>
          Stuck with DSA algorithm ? We got you by providing an interactive solution that is Sorting Visualizer. It is an online tool which helps you to understand the algortihms in a better and efficient way with the help of graphical and numerical representation.
          </p>
        </div>  
      </div>
    <div class="content">
  <a class="card" href="#!">
    <div class="front">
      <p>Bubble Sort</p>
    </div>
    <div class="back">
      <div>
        <p>Bubble sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order.</p>
        <button class="button">Visualize</button>
      </div>
    </div></a>
    <a class="card" href="#!">
    <div class="front" >
      <p>Quick Sort</p>
    </div>
    <div class="back">
      <div>
        <p>Quick sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions</p>
        <button class="button">Visualize</button>
      </div>
    </div></a>
    <a class="card" href="#!">
    <div class="front" >
      <p>Merge Sort</p>
    </div>
    <div class="back">
      <div>
        <p>Merge sort is a divide-and-conquer sorting algorithm that recursively divides the array into halves, sorts each half, and then merges the sorted halves to produce a fully sorted array</p>
        <button class="button">Visualize</button>
      </div>
    </div></a>
    <a class="card" href="#!">
    <div class="front" >
      <p>Insertion Sort</p>
    </div>
    <div class="back">
      <div>
        <p>Insertion sort is a sorting algorithm that builds the final sorted array one item at a time by repeatedly inserting the current element into its correct position among the previously sorted elements</p>
        <button class="button">Visualize</button>
      </div>
    </div></a>
    <a class="card" href="#!">
    <div class="front" >
      <p>Selection Sort</p>
    </div>
    <div class="back">
      <div>
        <p>Selection sort is a comparison-based algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first unsorted element.</p>
        <button class="button">Visualize</button>
      </div>
    </div></a>
    <a class="card" href="#!">
    <div class="front" >
      <p>Heap Sort</p>
    </div>
    <div class="back">
      <div>
        <p>Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to repeatedly extract the maximum (or minimum) element and build a sorted array</p>
        <button class="button">Visualize</button>
      </div>
    </div></a>
</div>
</body>
    </>
  )
}
}

export default Home