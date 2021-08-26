
import {useEffect,useState} from 'react';

const useFetch = (url) => {
    const [Data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        fetch(url).then(res=>{
           if (!res.ok) {
               throw Error('could not fetch the data');

           }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsLoading(false)
                    })
        .catch(err=>
            console.log(err.message))
    },[url]);
    return {Data,isLoading}
}
export default useFetch;