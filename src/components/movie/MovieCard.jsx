import React, { useState, useEffect } from "react";
import axios from '../../axios/axios';
import "./c.movie-card.css";

const MovieCard = ({ fetchURL, title, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const base_url = "https://image.tmdb.org/t/p/original/";
	const [movieInfo, setMovieInfo] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);

			return request;
		};

		fetchData();
	}, [fetchURL]);

	const movieDetails = (movie) => {

		setMovieInfo(movie);

	}

	// const imgUrl = `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`

	return (
		<div>
			<h2 className="movie__title">{title}</h2>
			<div className="movie__posters">
				{movies.map((movie) => (
					<img
						onClick={() => movieDetails(movie)}
						key={movie.id}
						className={`movie__poster ${isLargeRow ? "movie__poster--lrg" : ""}`}
						src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.title}
					/>
				))}
			</div>
		</div>
	);
};

export default MovieCard;
