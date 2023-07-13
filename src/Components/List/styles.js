import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    padding: "1rem",
  },
  mobileMain: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      height: "80vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  heading: {
    color: "white",
    fontSize: "5.4rem",
    fontWeight: "bolder",
    fontFamily: "Oswald",
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
      width: "100%",
    },
  },
  span: {
    fontSize: "3rem",
    opacity: "0.5",
    color: "white",
    fontWeight: "normal",
    fontFamily: "Oswald",
  },
  type: {
    color: "white",
    marginTop: "5%",
  },
  select: {
    width: "80%",
    fontSize: "1rem",
  },
  placeSearch: {
    backgroundColor: "white",
    marginTop: "1rem",
    width: "80%",
    padding: "0.5rem",
    paddingLeft: "1rem",
    borderRadius: "5px",
  },
  placeSearchPlaceHolder: {
    "&::placeholder": {
      opacity: 0.6,
    },
  },
  list: {
    height: "100%",
    marginTop: "10px",
    overflowX: "auto",
    width: "100%",
    "&::-webkit-scrollbar": {
      height: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
}));

export default useStyles;
