import { Box, makeStyles, Typography } from "@material-ui/core";
import { FC, ReactNode } from "react";

interface Props {
  text: string;
  value: string | number | ReactNode;
}

const useStyle = makeStyles(() => ({
  cardSection: {
    textAlign: "center"
  }
}));

export const CardSection: FC<Props> = ({ text, value }) => {
  const classes = useStyle();
  return (
    <Box className={classes.cardSection}>
      <Typography className="MuiTypography--subheading" variant="h5">
        {value}
      </Typography>
      <Typography
        color="textSecondary"
        className="MuiTypography--subheading"
        variant="subtitle1"
      >
        {text}
      </Typography>
    </Box>
  );
};
