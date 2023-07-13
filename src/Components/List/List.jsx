import React from "react";
import useStyles from "./styles";
import { Typography, Grid, InputBase } from "@material-ui/core";
import Places from "../Card/PlaceCard";
// import CircularProgress from "@material-ui/core/CircularProgress";
import { MutatingDots } from "react-loader-spinner";
import "../../scrollbar.css";
import Select from "react-select";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

function List(props) {
  const classes = useStyles();
  const [autoC, setAutoC] = useState(null);
  const options = [
    { value: "restaurants", label: "Restaurants" },
    { value: "hotels", label: "Hotels" },
    { value: "attractions", label: "Attractions" },
  ];
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} sm={12} md={4} className={classes.mobileMain}>
        <Typography className={classes.heading}>
          Restaurants, Hotels, <span className={classes.span}>and</span>{" "}
          Attractions
        </Typography>
        <span className={classes.span}>around you.</span>
        <Typography className={classes.type}>Type:</Typography>
        <Select
          options={options}
          isSearchable={false}
          defaultValue={options[0]}
          className={classes.select}
          styles={{
            input: (baseStyles) => ({
              ...baseStyles,
              color: "transparent",
            }),
            control: (defaultStyles) => ({
              ...defaultStyles,
              backgroundColor: "#212529",
              padding: "10px",
              border: "none",
              boxShadow: "none",
            }),
            singleValue: (defaultStyles) => ({
              ...defaultStyles,
              color: "#fff",
            }),
            option: (defaultStyles, state) => ({
              ...defaultStyles,
              color: "black",
              backgroundColor: "white",
              ":hover": {
                color: "white",
                backgroundColor: "#212529",
                transition: "0.5s",
              },
            }),
          }}
          onChange={(selectedOption) => {
            props.setType(selectedOption.value);
          }}
        />
        <Autocomplete
          onLoad={(autocompleteInstance) => {
            setAutoC(autocompleteInstance);
          }}
          onPlaceChanged={() => {
            props.setCurrentPos({
              lat: autoC.getPlace().geometry.location.lat(),
              lng: autoC.getPlace().geometry.location.lng(),
            });
          }}
        >
          <InputBase
            placeholder="Search for a city!"
            classes={{
              root: classes.placeSearch,
              input: classes.placeSearchPlaceHolder,
            }}
          />
        </Autocomplete>
      </Grid>
      <Grid xs={12} sm={12} item md={8}>
        <Grid container className={classes.list} wrap="nowrap">
          {props.showLoader ? (
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MutatingDots
                height="100"
                width="100"
                color="white"
                secondaryColor="white"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            props.places?.map((place, i) => {
              return (
                <Grid item>
                  <Places
                    name={place.name}
                    image={place.photo?.images.large.url}
                    address={place.address}
                    ranking={place.ranking}
                    num_reviews={place.num_reviews}
                    rating={place.rating}
                    tripadvsrURl={place.web_url}
                    website={place.website}
                    cuisine={place.cuisine}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default List;
