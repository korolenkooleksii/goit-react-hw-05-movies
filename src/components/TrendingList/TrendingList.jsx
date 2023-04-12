
import { TextTrends, TrendsList, Trend, Link } from './TrendingList.styled';

export const TrendingList = ({ data }) => {
  return (
    <>
      <TextTrends>Trending today</TextTrends>
      <TrendsList>
        {data.map(el => (
          <Trend key={el.id}>
            <Link to={`movies/${el.id}`}>{el.title}</Link>
          </Trend>
        ))}
      </TrendsList>
    </>
  );
};
