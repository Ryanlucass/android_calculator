

export type RepoProps = {
    obj:{
        repository: string;
        description: string;
        link: string;
    }
  }

export function RepositoryItem({obj}: RepoProps){
    return (
    <li>
        <strong>{obj.repository ?? 'Default'} </strong>
        <p> {obj.description ?? 'Default'}</p>
        <a href={obj.link ?? 'Default'}> {obj.repository} </a>
    </li>
    );
} 