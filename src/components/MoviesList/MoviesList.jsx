import { useLocation } from 'react-router-dom';
import { TextTrends, TrendsList, Trend, Link } from './MoviesList.styled';

export const TrendingList = ({ data, message = "" }) => {
  const location = useLocation();

  return (
    <>
      {message && <TextTrends>{ message}</TextTrends>}
      
      <TrendsList>
        {data.map(el => (
          <Trend key={el.id}>
            <Link to={`movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </Trend>
        ))}
      </TrendsList>
    </>
  );
};
