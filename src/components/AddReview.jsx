import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import restaurantFinder from "../apis/restaurantFinder";

function AddReview(props) {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await restaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
    } catch (error) {
      console.log(error);
    }
    // history.push("/");
    // history.push(location.pathname);
    window.location.reload(false);
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-2">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="name"
              className="form-control"
            />
            <div className="form-group col-2">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                className="custom-select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            id="Review"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
