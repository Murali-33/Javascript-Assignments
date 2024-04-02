import React, { useEffect ,useState} from 'react'

function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchdata =  async ()=>{
      try{
        const URL = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(URL);
        console.log(res);
        const result = await res.json();
        setData(result)
      }catch(error){
        console.error(error)
      }
    }
    fetchdata();
  },[]);

  return (
    <div>
        {
          data.map((data)=>{
            return <h1 key={data.id}>{data.title}</h1>
          })
        }
    </div>
  )
}

export default UseEffect
