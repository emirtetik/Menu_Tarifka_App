import React, {  useState } from 'react'
import axios from 'axios'

const UseApi = (url) => {
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)


     const fetchData = async () => {

         try {
           const {data: res} = await axios.get(url)           
            setData(res)
 
            setLoading(false)

         } catch (error) {
            setError(error.message )
            setLoading(false)

         }
     }
    React.useEffect(() => {
        fetchData()
    },[])
  
    return {data,loading,error};


}
export default UseApi