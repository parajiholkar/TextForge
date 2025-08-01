import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        console.log('handleOnChange');
        setText(event.target.value);
    }
    return (
        <>
            <div className='my-3'>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpperCaseClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
            </div>
            <div className='container'>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
    
        </>
    );
}
