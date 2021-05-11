import React from "react";

const CardHeader = (props) => {
  console.log(props);
  return (
    <div className="row align-items-center custom-line">
      <p className="text-white bg-dark p-2 rounded-pill text-uppercase font-italic font-weight-bold text-info ">
        {props.name}
      </p>
      <img src={props.platforms.map((cover) => cover.platform_logo.url)} />
    </div>
  );
};

export default CardHeader;
