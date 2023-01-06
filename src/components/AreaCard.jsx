import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AreaCard = (card, index) => {
  const {
    "place name": placeName,
    state,
    "state abbreviation": stateAbbreviation,
    latitude,
    longitude
  } = card;
  return (
    <Card key={index} sx={{ minWidth: 300, maxWidth: 400, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {index + 1}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {placeName}, {state}, {stateAbbreviation}
        </Typography>
        <Typography variant="body2">
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AreaCard;
