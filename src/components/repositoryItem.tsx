type RepoProps = {
    repository?: string;
  }

export function RepositoryItem({repository}: RepoProps){
    return (
    <li>
        <strong>{repository}</strong>
        <p> forms in react</p>
        <a href="www.google.com.br">
            Acessar o google 
        </a>
    </li>
    );
} 