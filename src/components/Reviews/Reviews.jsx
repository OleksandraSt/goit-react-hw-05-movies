import { getReviews } from 'components/api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsList,
  ReviewsItem,
  AuthorName,
  ReviewText,
  NoReview,
} from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
  
    useEffect(() => {
      getReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
          setError(null);
        })
        .catch(error => {
          setError(error);
          setReviews([]);
        });
    }, [movieId]);
  
    if (!reviews) {
      return;
    }

    return (
      <div>
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <AuthorName> Author : {author} </AuthorName>
              <ReviewText> Review : {content} </ReviewText>
            </ReviewsItem>
          ))}
        </ReviewsList>
        {reviews.length === 0 && !error && (
          <NoReview>There are no reviews for this movie</NoReview>
        )}
      </div>
    );
  };

export default Reviews;