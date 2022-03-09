
import './App.css';

function App() {

  const name = 'Rafael'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(9, 10)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
