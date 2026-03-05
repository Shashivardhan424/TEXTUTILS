import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleDownClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
    }  
    const handleClearClick = ()=>{
        let newText=' ';
        setText(newText)
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const[text,setText]=useState('enter the text');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}><br></br>
      <h1 style={{Color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
      <div className='box'>
       <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn" onClick={handleUpClick}>convert to uppercase</button>
      <button className='btn' onClick={handleDownClick}>convert to lowercase</button>
      <button className="btn" onClick={handleClearClick}>clear text</button>
      <button className="btn" onClick={handleCopy}>copy text</button>
      <button className="btn" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}> <h2>Your text summary</h2><p>{text.split(" ").length-1}words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minnutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}