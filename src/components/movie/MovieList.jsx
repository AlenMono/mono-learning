import React from "react";
import MovieCard from "./MovieCard";
import requests from "../../axios/requests";

const MovieList = () => {
	let isLargeRow = true;

	const movieTitles = [
		["NETFLIX ORIGINALS", requests.fetchNetflixOriginals, isLargeRow],
		["Trending Now", requests.fetchTrending],
		["Top Rated", requests.fetchTopRated],
	];

	return (
		<div className="movie__list">
			{movieTitles.map((title) => (
				<MovieCard
					key={title[0]}
					title={title[0]}
					fetchURL={title[1]}
					isLargeRow={title[2]}
				/>
			))}
		</div>
	);
};

export default MovieList;
