import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

function Home(props) {
  return (
    <div>
      <Header></Header>
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
}

export default Home;
