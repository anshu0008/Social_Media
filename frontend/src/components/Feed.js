import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import { SearchQuery, feedQuery } from '../utils/data'



const Feed = () => {
  const [loading,setLoading]=useState(false);
  const [pins,setPins]=useState(null);
  const {categoryId}=useParams();

  useEffect(()=>{
    setLoading(true);

    if(categoryId){
      const query=SearchQuery(categoryId);

      client.fetch(query)
      .then((data)=>{
        setPins(data);
        setLoading(false);
      })

    }else{

      client.fetch(feedQuery)
      .then((data)=>{
        setPins(data);
        setLoading(false);
      })
    }

  },[categoryId])
  
  if (loading) return <Spinner message='we are adding new ideas to your feed' />

  if(pins?.length ==0) return <h2 className='text-center'>No pins available.</h2>
  return (
    <div>
      {pins &&
        <MasonryLayout pins={pins} />
      }
    </div>
  )
}

export default Feed
