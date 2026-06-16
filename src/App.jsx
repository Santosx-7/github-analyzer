import Historico from './Historico'
import Analyzer from './Analyzer'

function App(){
  function recebeURL(url){
    console.log(url)
  }
  return(
    <main id="app">
      <Historico />
      <Analyzer onAnalisar={recebeURL}/>
    </main>
  )
}

export default App