import React, {useState} from 'react'


export default function TextForm(props) {
    const upppercase=()=>{
        let newText=text.toUpperCase();
        if (newText.length===0) {
            props.showAlert("Enter some text", "warning");
        }
        setText(newText)
    }

    const lowercase=()=>{
        let newText=text.toLowerCase();
        if (newText.length===0) {
            props.showAlert("Enter some text", "warning");
        }
        setText(newText)
    }

    const clearText=()=>{
        setText("")
    }
    const copyText=()=>{
        var text=document.getElementById("textBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success");
    }

    const extraSpace=()=>{
        let extrasp = text.split(/[ ]+/)
        setText(extrasp.join(" "))
    }

    const impText=()=>{
        let sentences = text.split('.');
        // Capitalize the first character of each sentence
        
        let capitalizedSentences = sentences.map(sentence => {
            // Trim any leading whitespace after the full stop
            let trimmedSentence = sentence.trim();
            
            // Capitalize the first character of the trimmed sentence
            return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
        });
        
        // Join the sentences back together with periods
        let resultString = capitalizedSentences.join('. ');
        setText(resultString);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");


  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'#badcff':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}
                style={{backgroundColor: props.mode==='dark' ? '#badcff':'white', 
                color: props.mode==='dark'?'#000032':'#000032', fontWeight: 600}} id="textBox" rows="8"></textarea>
            </div>
            <div className="col my-2">
                <button className="btn btn-primary mx-2" onClick={upppercase}>Convert Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={lowercase}>Convert Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={extraSpace}>Remove extra space</button>
                <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={impText}>Improve Text</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'#badcff':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,
            {text.length} characters</p>
            <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes is average reading time</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
