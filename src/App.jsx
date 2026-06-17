import { useState } from "react";

import Historico from "./Historico";
import Analyzer from "./Analyzer";
import Resultado from "./Resultado";

function App() {
  const [urlAnalisada, seturlAnalisada] = useState("");
  const [resultado, setresultado] = useState("");

  function recebeURL(url) {
    seturlAnalisada(url)
    setresultado("Análise simulada para: " + url)
  }

  return (
    <main id="app">
      <Historico />
      <Analyzer onAnalisar={recebeURL} /> 
      <Resultado resultado={resultado} />
    </main>
  );
  }

export default App;
