import './App.css';

import SayMyName from './components/SayMyName'


function App() {
  const nome = "Rafael"
  return (
    <div className="App">
      <SayMyName nome={nome.toLowerCase()} idade={5 + 11} profissão="Programador" />
    </div>
  );
}

export default App;

