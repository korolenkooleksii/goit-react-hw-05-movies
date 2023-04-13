import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';

import { getReviewsMovie } from 'api/api-reviews-movie';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Author, Content, Review, TextInfo, WrapReviews } from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams('');

  const [isLoading, setIsLoading] = useState(false);
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    const fetchCastMovie = async () => {
      setIsLoading(true);

      try {
        const results = await getReviewsMovie(id);

        setReviewsMovie(results);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Info loading error. Restart the application.`
        );
        setIsLoading(false);
      }
    };

    fetchCastMovie();
  }, [id]);

  return (
    <>
      {reviewsMovie.length > 0 && (
        <WrapReviews>
          {reviewsMovie.map(({ id, author, content }) => (
            <Review key={id}>
              <Author>Author: {author}</Author>
              <Content>{content}</Content>
            </Review>
          ))}
        </WrapReviews>
      )}
      {!reviewsMovie.length && <TextInfo>We don`t have any reviews fro this movie.</TextInfo>}
      {isLoading && <Loader />}
    </>
  );
};
