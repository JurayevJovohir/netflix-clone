import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';

const Movies = () => {
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state) => state.netflix.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: 'movies' }));
    })

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll === null);
    };
    return (
        <div></div>
    )
}

export default Movies