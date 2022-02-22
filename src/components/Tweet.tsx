type TweetProps = {
    text: string;
}

// erro, pois tenho que passar o tipo da props
export function Tweet(props: TweetProps){
    return (
        <div>
            <p>{props.text}</p>       
        </div>
    );
       
}