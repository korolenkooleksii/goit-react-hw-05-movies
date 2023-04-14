import { useLocation } from 'react-router-dom';
import { TextTrends, TrendsList, Trend, Link } from './MoviesList.styled';

import PropTypes from 'prop-types';

export const MoviesList = ({ data, message = '', location }) => {
  const locationList = useLocation();
  const goTo = location.pathname;

  return (
    <>
      {message && <TextTrends>{message}</TextTrends>}

      <TrendsList>
        {data.map(el => (
          <Trend key={el.id}>
            <Link
              to={goTo === '/' ? `movies/${el.id}` : `${el.id}`}
              state={{ from: locationList }}
            >
              {el.title}
            </Link>
          </Trend>
        ))}
      </TrendsList>
    </>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array,
  message: PropTypes.string,
  location: PropTypes.object,
};
