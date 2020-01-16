import React, {useState} from 'react';

//Componente: bloco isolado de html, css e js no qual nao intefere no restante da aplicação
//Propriedade: Imformações que um componente PAI passa pra o componente FILHO
//Estado: 

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    counter++;
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
