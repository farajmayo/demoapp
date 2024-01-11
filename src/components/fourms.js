import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
      
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    return (
        <>
            <div className='container' id='textonly'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to Upper Case</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert to Lower Case</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick} >Clear Text</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleCopy} >Copy Text</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces} >Remove Extra Space</button>
                </div>
            </div>
            <div className="container my-2" id='textonlya' >
                <h1>Text Summary </h1>
                <p>
                    {text.split(" ").length} Words , {text.length} Characters
                </p>
                <p>
                    {0.008 * text.split(" ").length} Min Reading Time
                </p>
                <h3>Preview</h3>
                <p>
                    {text}
                </p>
            </div>
        </>
    );
}
