import { useState, useEffect} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer () {
    const [items, setItems]= useState([])
    const { id } = useParams()
    const allProducts = 'https://dummyjson.com/products'
    const categoryProducts = `https://dummyjson.com/products/category/${id}`

    useEffect (()=>{
        fetch(id ? categoryProducts : allProducts)
            .then(res => res.json())
            .then(res => setItems(res.products))
            
    },[id])

    return (
        <ItemList items = {items} />
    )
}

export default ItemListContainer