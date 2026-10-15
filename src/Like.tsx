import like from "./assets/like.png"

export default function Like() {
    return (
        <img className="white_filter" src={like} alt="Bilde av en like button" style={{ 
            width: 50, 
            height: 50, 
            paddingTop: 15, 
            paddingLeft: 10 
        }} />
    )
}