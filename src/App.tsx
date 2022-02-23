import { useState } from "react";
import { RepositoryItem } from "./components/repositoryItem";
import {Tweet} from "./components/Tweet"

  type FrasProps = {
    text: string;
  }

function App() {
  //tipando tweets
  //função para atualizar a lista de tweets  
  const [tweets, setTweets] = useState<string[]>([
    'Cada dia que surge, constitui uma nova vida para quem sabe viver',
    'A vida ta na mão de Deus, mas a morte ta na caçamba do motorzinho',
    'Muito é dado, muito séra cobrado'
  ])


  const [frase, setFrase] = useState('');

  function CreateFrase(){
    setTweets([...tweets, frase]);
    setFrase('');
  }


  return(
    <div>  

      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem  />

        <RepositoryItem  
        repository="CodeWars"
        description="Desafios referente ao site codewar" 
        link="https://github.com/Ryanlucass/CodeWars"
        />
        <RepositoryItem  repository="RyanLucas"/>
        <RepositoryItem />
        <RepositoryItem />
      </ul>
        
      {/* Concatenando na minha lista */}

      {
        tweets.map(frase=> {
          return <Tweet key={frase} text={frase}/>
        })

      }

      <div>
        <p> 
          <label>Sua Frase </label>
          <strong>{frase}</strong>

            <input
            value={frase} 
            required
            type="text" 
            placeholder="a volta do mal"
            onChange={event => setFrase(event.target.value)}
            />
          <button onClick={CreateFrase}  >Adicionar Frase</button>    
        </p>
      </div>
        
    </div>
  );
}

export default App
