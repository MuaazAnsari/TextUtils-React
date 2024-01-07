import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Uppercase","success")
  };

  const handleloClick = () => {
    //console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lowercase","success")
  };

  const handlerevClick = () => {
    //console.log("Lowercase was clicked");
    let newText = text.split("");
    let revText = newText.reverse();
    let ans = revText.join("");
    setText(ans);
    props.showAlert("Text is reversed","success")
  };

  const handlecopyText = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to clipboard","success")
  };

  const handleReset = () => {
    setText("");
    props.showAlert("Text cleared","success")
  };

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", 
              color: props.mode === "dark" ? "white" : "#042743"
            }}
            value={text}
            id="myBox"
            rows="8"


            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlerevClick}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopyText}>
          Copy Text
        </button>
      </div>

      <div className="container my-3" style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2>My Text Summary</h2>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
