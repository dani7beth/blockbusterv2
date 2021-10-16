import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Reviews = ({ movie_id }) => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);
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
          {user.user.id === review.user_id ? <button>DELETE ME</button> : ""}
        </>
      ))}
    </>
  );
};
export default Reviews;
