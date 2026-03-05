import React, { useState } from 'react'

export default function About() {

  const [mystyle,setmystyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btntext,setBtntext]=useState("enable dark mode")

  const toggleStyle =()=>{
    if(mystyle.color ==='black'){
      setmystyle({
        color:'white',
        backgroundColor:"black",
        // border:'1px solid white'
      })
      setBtntext("enable light mode")
    }
    else{
      setmystyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtntext("enable light mode");
    }
  }  
  return (
     <div className='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div class="accordion" id="accordionExample">
     <div class="accordion-item">
     <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
      </h2>
       <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
        <p>TextUtils is a simple React-based web application that helps you analyze and modify your text easily. You can convert text to uppercase or lowercase, remove extra spaces, copy text, and get quick statistics like word and character count. It’s designed to make text editing fast and efficient for everyone.</p>
      </div>
       </div>
       </div>
          <div class="accordion-item">
       <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
           </h2>
           <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
         <p>Textutils is an instant word/character count. With a clean user interface and dark/light mode support, TextUtils enhances productivity for developers, writers, and students who work with text regularly.</p>
      </div>
         </div>
          </div>
           <div class="accordion-item">
        <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
       </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
        <p>A fast, responsive text utility app for text formatting and analysis — built with React and Bootstrap.</p>
      </div>
       </div>
        </div>
       </div>
       <div className='container my-2.5' style={{paddingBottom:"0.5rem"}}>
         <button onClick={toggleStyle}type="button" class="btn btn-primary">{btntext}</button>
       </div>
     </div>
    )
}


