import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import logo from '../assets/house.svg'

const CatProfile = () => {

    const { id } = useParams()

    const { isLoading, error, data } = useQuery(
        ['cats', id], () => axios.get(`https://api.thecatapi.com/v1/images/${id}`)
            .then((res) => res.data)
    )

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <div className='cat-profile'>
                <img className='cat-profile-img' src={data.url} alt="cat-img" />
                <div className='cat-details'>
                    <p className='text-extra'><span className='title'>Description:</span> {data.breeds[0].description}</p>
                    <p className='text'><span className='title'>Temperament:</span> {data.breeds[0].temperament}</p>
                    <p className='text'><span className='title'>Imperial:</span> {data.breeds[0].weight.imperial} - <span className='title'>Metric:</span> {data.breeds[0].weight.metric}</p>
                    <a href={data.breeds[0].wikipedia_url} target="_blank" className='wiki-link'>Wikipedia</a>
                    <Link to="/">
                     <img className='logo' src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </>
    )
}
export default CatProfile