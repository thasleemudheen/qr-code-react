import { useState } from 'react';
import './App.css';
import QRCode from 'qrcode.react'

function App() {
  const [text,setText]=useState('')

  function handleChange(e){
    setText(e.target.value)

  }
  const downloadQR=()=>{
         const canvas=document.querySelector('canvas')
         const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
         const downloadLink = document.createElement("a");
         downloadLink.href = pngUrl;
         downloadLink.download = `${text}.png`;
         document.body.appendChild(downloadLink);
         downloadLink.click();
         document.body.removeChild(downloadLink);
  }
  return (
    
    <div className="App">
      <h1>QR code generator</h1>
      <div >
{ text &&  <QRCode value={text}/>}
      </div>
      <h4>enter your input</h4>
      <input type='text' onChange={(e)=>{handleChange(e)}}/><br/>
      <button onClick={downloadQR}>Download</button>
    </div>
  );
}

export default App;
