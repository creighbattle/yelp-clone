import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/restaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

function AddRestaurant(props) {
  const { addRestaurant } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      addRestaurant(response.data.data.restaurant);
      console.log(response);
    } catch (err) {}
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="row">
          <div className="col-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col-4">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>

          <div className="col-2">
            <select
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant;
