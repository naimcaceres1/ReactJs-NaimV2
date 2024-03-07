import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const[data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => alert('Error al cargar la ruta especificada '+error))
    })


    return data
}

export default useFetch
