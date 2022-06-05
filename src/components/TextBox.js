import React,{useState} from "react";

export default function TextBox(props) {
  

    const [Text, setText] = useState("");  

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = Text;
      window.speechSynthesis.speak(msg);
    }

    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleLowClick = () =>{
        let newText = Text.toLowerCase();
        setText(newText);
    } 

    const handleClear = () =>{
        setText("");
    }

    const handleCopyClick = () =>{
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }
  return (
    <div>
      <div className="container mb-3 my-4" style={ {color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,color : props.mode === 'dark'? 'white' : 'black' }}
          value={Text}
          onChange = {handleOnChange}
          id="mybox"
          rows="9"
        ></textarea>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={speak}>Read text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear text</button>
      <h3>Your text summary : </h3>
      <p>Your text contains {Text.split(" ").filter((element)=>{return element.length !== 0 }).length} words and {Text.length} letters. </p>
      </div>
    </div>
  );
}
