import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  map: {
    backgroundColor: "black",
    padding: "1rem",
  },
  mapBorder: {
    height: "100vh",
    width: "100%",
    backgroundColor: "white",
    padding: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
    },
  },
  mapTitle: {
    fontSize: "2rem",
    fontFamily: "Oswald",
    textAlign: "center",
    color: "white",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  mapTitlSpan: {
    fontWeight: "bolder",
    opacity: "1",
    color: "#FFCC00",
  },
  paper: {
    padding: "10px",
    position: "absolute",
  },
  card: {
    position: "absolute",
    zIndex: 1,
    width: "300px",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  divider: {
    margin: "10px",
  },
  cuisine: {
    marginRight: "4px",
    marginBottom: "10px",
  },
  locationIcon: {
    marginRight: "4px",
  },
  contentpad: {
    paddingBottom: "0px",
  },
  content: {
    color: "#5A5A5A",
    fontSize: "13px",
  },
  chip: {
    overflowX: "auto",
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
  actionarea: {
    backgroundColor: "grey",
    padding: "5px",
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    margin: "1px",
    fontSize: "10px",
    fontWeight: "normal",
    textTransform: "none",
    letterSpacing: 1,
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
}));

export default useStyles;
