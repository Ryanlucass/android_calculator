
type RepoProps = {
    repository?: string;
    description?: string;
    link?: string;
  }

export function RepositoryItem(props: RepoProps){
    return (
    <li>
        <strong>{props.repository ?? 'Default'} </strong>
        <p> {props.description ?? 'Default'}</p>
        <a href={props.link ?? 'Default'}> </a>
    </li>
    );
} 