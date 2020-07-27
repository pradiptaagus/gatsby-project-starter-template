import React, {useState, useEffect, useReducer} from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageTitle from "../../components/page-title";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {movies} from "../../services/movie";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { movieReducer } from "../../reducers/movie-reducer";

const Movie: React.FC<{}> = ({}) => {
    const [state, dispatch] = useReducer(movieReducer, {
        title: '',
        releaseDate: '',
        imdbRating: ''
    });

    const data = ['Denpasar', 'Badung', 'Gianyar', 'Klungkung'];

    function fetchMovies(data: MovieInterface) {
        movies(data).then((response: any) => {
            console.log(response);
            dispatch({type: 'SET_TITLE', payload: response?.Title});
            dispatch({type: 'SET_RELEASE_DATE', payload: response?.Released});
            dispatch({type: 'SET_IMDB_RATING', payload: response?.imdbRating});
        }).catch(errors => {
            console.log(errors);
        });
    }

    useEffect(() => {
        fetchMovies({title: 'Guardians'});
    }, []);

    return (
        <Layout>
            <SEO title="Movie" />
            <PageTitle
                title="Movie"
                breadcrumbs={[
                    { name: "Home", link: "/" },
                    { name: "Movie", link: "/" },
                ]}
            />
            <Container fluid>
                <Card className="border-0">
                    <Card.Body>
                        <h2>Title: {state.title}</h2>
                        <p>Release date: {state.releaseDate}</p>
                        <p>IMDB rating: {state.imdbRating}</p>

                        <ul>
                            {
                                data.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    )
}

export default Movie;