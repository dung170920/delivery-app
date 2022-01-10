import React from "react";
import { task, rocket, hands } from "../images";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="service" id="service">
      <h3 className="title">Wait a minute for delicious.</h3>
      <div className="card-list">
        <ServiceCard
          img={task}
          title="Easy to order"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus enim ex, cum repellendus laborum laboriosam atque ipsum aliquid commodi. Impedit odio doloribus voluptates quibusdam beatae nihil laborum sequi consequatur."
        />
        <ServiceCard
          img={rocket}
          title="Fast order"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus enim ex, cum repellendus laborum laboriosam atque ipsum aliquid commodi. Impedit odio doloribus voluptates quibusdam beatae nihil laborum sequi consequatur."
        />
        <ServiceCard
          img={hands}
          title="Best quality"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus enim ex, cum repellendus laborum laboriosam atque ipsum aliquid commodi. Impedit odio doloribus voluptates quibusdam beatae nihil laborum sequi consequatur."
        />
      </div>
    </div>
  );
};

export default Service;
