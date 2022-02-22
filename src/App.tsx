//function App é um componente de React
//ele é chamado na parte principal <App />
import {Tweet} from "./components/Tweet"


function App() {
  return(
    <div>
      <Tweet text="A vida ta na mão de Deus, mas a morte ta na caçambda do motorzinho"/>
      <Tweet text="Melhor um passaro na mão, do que um gato morto" />
      <Tweet text="Aplica a macacada"/>
      <Tweet text="Só as cachorra"/>
      <Tweet />
    </div>
  );
}

export default App
