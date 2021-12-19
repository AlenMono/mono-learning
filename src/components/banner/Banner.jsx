import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../axios/axios";
import requests from "../../axios/requests";

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path
                        ? movie?.backdrop_path
                        : movie?.poster_path
                    }")`,
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movie.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__desc">
                    {truncate(movie.overview, 150)}
                </div>
            </div>
            <div className="banner__fadeBottom"></div>
        </div>
    );
};

export default Banner;
