import {useState, useEffect} from 'react'

const useFetch = url =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchsrc = async () =>{
            try{
                var cors = "https://cors-anywhere.herokuapp.com/"
                const response = await fetch(cors + url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);     
            }
        }
        fetchsrc()
    },[url])

    return {data, loading, error}
}

export default useFetch
