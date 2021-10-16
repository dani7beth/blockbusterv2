import axios from "axios";
import { useEffect, useState } from "react";

const Reviews = ({ movie_id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = async () => {
    try {
      let res = await axios.get(`/api/movies/${movie_id}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {reviews.map((review) => (
        <>
          <p>{review.body}</p>
        </>
      ))}
    </>
  );
};
export default Reviews;
