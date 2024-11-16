import ItemCount from "./ItemCount"

function ItemDetail ({detail}){
    return(
        <div>
            <h2>{detail?.title}</h2>
            <img src={detail?.images[0]} style={{width: 500}} />
            <p>{detail?.description}</p>
            <p>{detail?.price}</p>
            <ItemCount/>
        </div> 
    )
}

export default ItemDetail