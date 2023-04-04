import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({ movies }) => {
    const getMovieRange = (from, to) => {
        return movies.slice(from, to);
    };

    return (
        <div>
            <CardSlider title='Сейчас в тренде' data={getMovieRange(0, 10)} />
            <CardSlider title='Новые релизы' data={getMovieRange(10, 20)} />
            <CardSlider title='Блокбастеры' data={getMovieRange(20, 30)} />
            <CardSlider title='Популярный на Netflix' data={getMovieRange(30, 40)} />
            <CardSlider title='Боевики' data={getMovieRange(40, 50)} />
            <CardSlider title='Эпический' data={getMovieRange(50, 60)} />
        </div>
    )
}

export default Slider