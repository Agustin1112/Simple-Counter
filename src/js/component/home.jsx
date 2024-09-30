import React from "react";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container py-5">
        <div className="row">
          <Card title="Card title 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card title 2" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card title 3" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco." imgSrc="https://via.placeholder.com/500x325" />
        </div>
      </div>
    </>
  );
};

export default Home;



