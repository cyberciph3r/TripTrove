import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import {
  Paper,
  CssBaseline,
  Typography,
  Box,
  Button,
  Chip,
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  Divider,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import { Rating } from "@material-ui/lab";
import { LocationOn } from "@material-ui/icons";
import mapStyles from "./mapstyles";

function Map({ currentPos, setCurrentPos, bounds, setBounds, places }) {
  const classes = useStyles();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <CssBaseline />
      <div className={classes.map}>
        <Typography className={classes.mapTitle}>
          <span className={classes.mapTitlSpan}>Discover</span> the best
          accommodations, dining spots, and attractions as you
          <span className={classes.mapTitlSpan}> explore</span> the map!
        </Typography>
        <div className={classes.mapBorder}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            zoom={15}
            center={currentPos}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              styles: mapStyles,
              fullscreenControl: true,
            }}
            onChange={(e) => {
              setBounds({
                bl: e.marginBounds.sw,
                tr: e.marginBounds.ne,
              });
              setCurrentPos({
                lat: e.center.lat,
                lng: e.center.lng,
              });
            }}
          >
            {places?.map((place, idx) => (
              <div
                key={idx}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredIndex === idx ? (
                  <div>
                    <Card elevation={4} className={classes.card}>
                      <CardHeader
                        title={place.name}
                        classes={{
                          title: classes.title,
                        }}
                      />
                      <CardMedia
                        image={place.photo?.images.large.url}
                        style={{ height: "200px" }}
                      />
                      <CardContent className={classes.contentpad}>
                        <Box display="flex" alignItems="center">
                          <LocationOn className={classes.locationIcon} />
                          <Typography variant="subtitle2">
                            {place.address}
                          </Typography>
                        </Box>
                        <Divider variant="middle" className={classes.divider} />
                        <Box display="flex" justifyContent="space-between">
                          <Typography
                            variant="subtitle2"
                            className={classes.content}
                          >
                            {place.ranking}
                          </Typography>
                        </Box>
                        <Divider variant="middle" className={classes.divider} />
                        <Grid container className={classes.chip} wrap="nowrap">
                          {place.cuisine?.map((item, i) => {
                            return (
                              <Grid item>
                                <Chip
                                  size="small"
                                  label={item.name}
                                  className={classes.cuisine}
                                  style={{
                                    backgroundColor: "#B5F1CC",
                                    fontSize: "10px",
                                    letterSpacing: 1,
                                  }}
                                />
                              </Grid>
                            );
                          })}
                        </Grid>
                        <Divider variant="middle" className={classes.divider} />
                        <Box
                          display="flex"
                          alignItems="center"
                          flexDirection="column"
                        >
                          <Rating
                            size="small"
                            value={Number(place.rating)}
                            readOnly
                          />
                          <Typography
                            variant="subtitle2"
                            className={classes.content}
                          >
                            out of {place.num_reviews} reviews
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActionArea className={classes.actionarea}>
                        <Box display="flex" justifyContent="space-around">
                          <Button
                            size="small"
                            className={classes.btn}
                            onClick={() => {
                              window.open(place.tripadvsrURl, "_blank");
                            }}
                          >
                            Tripadvisor
                          </Button>
                          <Button
                            size="small"
                            className={classes.btn}
                            onClick={() => {
                              window.open(place.website, "_blank");
                            }}
                          >
                            Website
                          </Button>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </div>
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="subtitle1">{place.name}</Typography>
                    <img
                      src={place?.photo?.images.large.url}
                      style={{
                        height: "60px",
                        width: "100px",
                        cursor: "pointer",
                      }}
                    />
                    <Rating
                      size="small"
                      value={Number(place.rating)}
                      readOnly
                    />
                  </Paper>
                )}
                {/* <LocationOn
                style={{
                  position: "absolute",
                }}
              /> */}
              </div>
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}

export default Map;
