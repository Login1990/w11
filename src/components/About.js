import React from 'react'
import { useEffect, useState} from 'react'
function About() {
    const [json, setJson] = useState([])

    useEffect(() => {
        let mounted = true
        async function fetchItems(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const json = await response.json()
            if(mounted){
                setJson(json)
            }
        }
        fetchItems()
        return () => {
            mounted = false
        }
    },[])
    return (
        <ul>
            {
                json.map((data) => (<li key={data.id} >{data.title}</li>))
            }
        </ul>
    )
}

export default About