import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:3005/api/v1/restaurants",
  baseURL: "https://cb-yelp-clone.herokuapp.com/",
});
