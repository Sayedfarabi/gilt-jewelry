import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [url])

    const data = {
        products,
        loading
    }
    return data

}