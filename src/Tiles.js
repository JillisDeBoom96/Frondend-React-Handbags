function Tiles({image, title, text}){
    return(
        <section>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>

    )
}
export default Tiles;