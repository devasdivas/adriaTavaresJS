import styled from 'styled-components';
import './App.css';
import { Buttons } from './components/Buttons';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ContainerDiv = styled.div`
  width: 40rem;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`

const Autora = styled.p`
  width: 50%;
  text-align: center;
  padding-top: 0.5rem;
`

function App() {
  return (
    <Container>
      <ContainerDiv>
        <h1>Contador de Número</h1>

        <Buttons/>

        <Autora>Desenvolvido por Ádria Tavares, com base no projeto Counter App - 100 days of JS</Autora>
      </ContainerDiv>
    </Container>
  );
}

export default App;
