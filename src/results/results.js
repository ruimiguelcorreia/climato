import React, { useState, useEffect } from "react";
import moment from "moment";

const Results = (props) => {
  const [forecasts, setForecasts] = useState(props);

  useEffect(() => {
    setForecasts(props);
  }, [props]);

  return (
    <div>
      <p>{moment(forecasts.date).format("MMM Do, YY")}</p>
      <p>{forecasts.description}</p>
      <p>{forecasts.humidity}</p>
      <p>{forecasts.temperature.min}</p>
      <p>{forecasts.temperature.max}</p>
      <p>{forecasts.wind.direction}</p>
      <p>{forecasts.wind.speed}</p>
    </div>
  );
};

export default Results;
