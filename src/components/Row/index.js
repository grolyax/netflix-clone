import { useEffect, useState } from 'react';

import api from '../../api';

import { Root, RowTitle, RowSlider, RowPosters, RowPoster } from './styled';

const Row = ({ title, request }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovie = async () => {
      const response = await api.url(request).get().json();

      setMovies(response.results)

    }

    fetchMovie();
  }, [request]);

  return (
  <Root>
    <RowTitle>{title}</RowTitle>
    <RowSlider>
      <RowPosters>
        {movies.map((movie) => (
          <RowPoster 
          key={movie.id}
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie.name}
          loading="lazy"
          />
        ))}
      </RowPosters>
    </RowSlider>
  </Root>
  );
}

export default Row;