import { useState } from "react";

export default function Analyzer() {
  const [url, setUrl] = useState("");
  function handleClick(){
    console.log(url)
  }
  return (
    <main>
      <div>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
      </div>
      <div>
        <button onClick={handleClick}>Analisar</button>
      </div>
    </main>
  );
}
