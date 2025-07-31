import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here')
    return (
        <div className='my-5'>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} id="myBox" rows="3"></textarea>
            </div>
            <button className='btn btn-primary'>Convert to UpperCase</button>
        </div>
    );
}
