import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'


const CatList = () => {
  
  const { isLoading, error, data } = useQuery(
    'cats', () => axios.get('https://api.thecatapi.com/v1/images/search?limit=22&breed_ids=beng&api_key=live_gd5UyXVtejgw3oLmOaXRdpMRip9ZypOjL752MPA4P280C0nl3MNbId4kPi7IP0VR')
      .then((res) => res.data)
  )
console.log(data)
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <>
      <h1 className='header'>Cat Images and profile in the World</h1>
    <div className='cat-grid'>
      { data.map(cat => (
        <div className='cat' key={cat.id}>
          <Link to={`/images/${cat.id}`}>
            <img className='cat-img' src={cat.url} alt="cat-img" />
          </Link>

          <Link className='link' to={`/images/${cat.id}`}>
            <p className='cat-name'>{`Name: ${cat.breeds[0].name}`}</p>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default CatList
