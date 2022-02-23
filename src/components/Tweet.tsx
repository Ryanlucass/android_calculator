type TweetProps = {
    text: string;
}

// erro, pois tenho que passar o tipo da props
export function Tweet({text}: TweetProps){
    return (
        <div>
            <p>{text}</p>  
        </div>     
    );
       
}