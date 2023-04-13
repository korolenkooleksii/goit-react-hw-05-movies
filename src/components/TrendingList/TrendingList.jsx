import { useLocation } from 'react-router-dom';
import { TextTrends, TrendsList, Trend, Link } from './TrendingList.styled';

export const TrendingList = ({ data }) => {
  const location = useLocation();

  return (
    <>
      <TextTrends>Trending today</TextTrends>
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
