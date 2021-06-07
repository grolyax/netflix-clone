import { useEffect, useState } from 'react';

import { Root, MovieOverview, PlayButton, Buttons, InfoButton } from './styles';
import Wrapper from '../common/wrapper';

import api from '../../api';
import Requests from '../../api/request';
import { Content, MovieTitle } from './styles';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as InfoIcon } from './info.svg';

const truncate = (str, n) => {
  return str?.length > n ? `${str.substring(0, n - 1)}...` : str;
};

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.url(Requests.NETFLIX_ORIGINALS).get().json();

      setMovie(response.results[Math.floor(Math.random() * response.results.length - 1)]
      );

      console.log(response);
    }

    fetchMovie();
  }, []);

  return (
    <Root
      backgroundImage={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    >
      <Wrapper>
        <Content>
          <MovieTitle>
            {movie?.title || movie?.name || movie?.original_name}
          </MovieTitle>

          <MovieOverview>{truncate(movie?.overview, 200)}</MovieOverview>
          <Buttons>
            <PlayButton> <PlayIcon /> Play</PlayButton>
            <InfoButton><InfoIcon /> More Info</InfoButton>
          </Buttons>
        </Content>
      </Wrapper>
    </Root>
  );
}

export default Banner;
