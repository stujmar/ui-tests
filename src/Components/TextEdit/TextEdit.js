import React, { useState, useEffect } from "react"
import { Editor } from 'primereact/editor';
import { head, body } from '../Universal.module.css'
// import styles from './TextEdit.module.css'

const TextEdit = () => {
    // const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');

    useEffect(() => {
        console.log(text2);
    },[text2])


    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    const header = renderHeader();

    return (
        <div className={body} >
            <h2 className={head}>Text</h2>
            <Editor headerTemplate={header} style={{ height: '320px' }} value={text2} onTextChange={(e) => setText2(e.htmlValue)} />
        </div>
    )
}

export default TextEdit;