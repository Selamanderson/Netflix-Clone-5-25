import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from "../../../utils/Axios"
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube'

const Row = ({title,fetchUrl,isLargeRow}) => {
const [movies,setMovie]=useState([])
const [trailerUrl,setTrailerUrl]=useState("")
const base_url="https://image.tmdb.org/t/p/original"
useEffect(()=>{
    (async ()=>{
        try{
            const request=await axios.get(fetchUrl)
            setMovie(request.data.results)
        }catch(error){
            console.error("error",error)
        }
    })()
},[fetchUrl])
const handleClick=(movie)=> {
    if(trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie?.title ||movie?.name||movie?.original_name) 
        .then((url)=>{
                    const urlParams=new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
        })
    }
}
const opts={
    height:"390px",
    width:"100%",
    playerVars:{
        autoplay:1,
    }
}
  return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
            {movies?.map((movie,index)=>(
                <img 
                onClick={()=>handleClick(movie)}
                key={index}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
            ))}
        </div>
        <h1 style={{color:"white"}}>{trailerUrl && "Trailer"}</h1>
    <div style={{padding:"40px"}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>
        }
    </div>
    </div>
  )
}

export default Row