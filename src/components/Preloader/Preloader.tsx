import React from "react";
import { CircularProgress } from "@material-ui/core/";
import useStyles from "./styles";

const Preloader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.preloader}>
      <CircularProgress style={{ color: "rosybrown", marginLeft: "20px" }} />
      <h3>Loading...</h3>
    </div>
  );
};

export default Preloader;
