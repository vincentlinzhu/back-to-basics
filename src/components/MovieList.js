import React from 'react'

const MovieList = ({movies, name, onClick}) => {
    // const movies = [
    //     'Captain America', 
    //     'Iron Man', 
    //     'Black Panther', 
    //     'Avengers Endgame', 
    //     'Captain Marvel'
    // ];

    // const movies = [
    //     {
    //         id: 1,
    //         name: 'Captain America',
    //     }, 
    //     {
    //         id: 2,
    //         name: 'Iron Man',
    //     },
    //     {
    //         id: 3,
    //         name: 'Black Panther',
    //     },
    //     {
    //         id: 4,
    //         name: 'Avengers Endgame',
    //     },
    //     {
    //         id: 5,
    //         name: 'Captain Marvel',
    //     },  
    // ];

    const movieList = movies.map((movie) => {
        return (
            <li key={movie.id} onClick={onClick}>{movie.name}</li>
        )
    });

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movieList}
            </ul>
            {/* <h3>{ name }</h3> */}
        </div>
    )
}

export default MovieList