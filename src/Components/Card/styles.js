import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "240px",
    margin: "1rem",
    marginLeft: "0",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      height: "85vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70vh",
    },
  },
  divider: {
    margin: "10px",
  },
  cuisine: {
    marginRight: "4px",
    marginBottom: "10px",
    backgroundColor: "#B5F1CC",
    fontSize: "10px",
    letterSpacing: 1,
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
