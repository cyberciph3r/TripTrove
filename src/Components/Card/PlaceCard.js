import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
  Button,
  Grid,
  Box,
  Divider,
} from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

function PlaceCard(props) {
  const classes = useStyles();
  return (
    <Card elevation={4} className={classes.card}>
      <CardHeader
        title={props.name}
        classes={{
          title: classes.title,
        }}
      />
      <CardMedia image={props.image} style={{ height: "300px" }} />
      <CardContent className={classes.contentpad}>
        <Box display="flex" alignItems="center">
          <LocationOn className={classes.locationIcon} />
          <Typography variant="subtitle2">{props.address}</Typography>
        </Box>
        <Divider variant="middle" className={classes.divider} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2" className={classes.content}>
            {props.ranking}
          </Typography>
        </Box>
        <Divider variant="middle" className={classes.divider} />
        <Grid container className={classes.chip} wrap="nowrap">
          {props.cuisine?.map((item, i) => {
            return (
              <Grid item>
                <Chip
                  size="small"
                  label={item.name}
                  className={classes.cuisine}
                />
              </Grid>
            );
          })}
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <Box display="flex" alignItems="center" flexDirection="column">
          <Rating size="small" value={Number(props.rating)} readOnly />
          <Typography variant="subtitle2" className={classes.content}>
            out of {props.num_reviews} reviews
          </Typography>
        </Box>
      </CardContent>
      <CardActionArea className={classes.actionarea}>
        <Box display="flex" justifyContent="space-around">
          <Button
            size="small"
            className={classes.btn}
            onClick={() => {
              window.open(props.tripadvsrURl, "_blank");
            }}
          >
            Tripadvisor
          </Button>
          <Button
            size="small"
            className={classes.btn}
            onClick={() => {
              window.open(props.website, "_blank");
            }}
          >
            Website
          </Button>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default PlaceCard;
