import logo from './logo.svg';
import './App.css';
import { Buttons } from './components/Buttons';

function App() {
  return (
    <div>
      <h1>Contador de Número</h1>

      <span>0</span>

      <hr/>

      <Buttons></Buttons>

      <p>Desenvolvido por Ádria Tavares, com base no projeto Counter App - 100 days of JS</p>
    </div>
  );
}

export default App;
