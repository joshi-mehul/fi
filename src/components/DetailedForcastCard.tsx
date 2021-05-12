import { motion } from "framer-motion";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./DetailedForcastCard.style";
import { FC } from "react";
import MapChart from "./Map";
import { Box, IconButton, useTheme } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import { CardSection } from "./CardSection";

interface Props {
  title: string;
  question: string;
  id: string;
  onClick: (id: string) => void;
  dueDate: string;
  forcastCount: number;
  forcastProbability: number;
  positive: boolean;
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

export const DetailedForcastCard: FC<Props> = ({
  onClick,
  id,
  title,
  question,
  dueDate,
  forcastCount,
  forcastProbability,
  positive
}) => {
  const classes = useStyle();
  const handleOnClick = () => {
    onClick(null);
  };

  const theme = useTheme();

  return (
    <motion.div layoutId={id} transition={spring}>
      <Card className={`card ${classes.card}`}>
        <CardContent className={classes.content}>
          <Typography
            className={`MuiTypography--heading ${classes.heading}`}
            variant="h5"
            gutterBottom
          >
            {title}
            <IconButton
              color="secondary"
              aria-label="close"
              onClick={handleOnClick}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          <Divider className={classes.divider} light />
          <Box className={classes.cardSplit}>
            <Box>
              <CardSection text="Due date" value={dueDate} />
              <CardSection text="Number of forcast" value={forcastCount} />
              <CardSection
                text="Yes/No"
                value={
                  positive ? (
                    <CallMadeIcon
                      style={{ color: theme.palette.success.main }}
                    />
                  ) : (
                    <CallReceivedIcon color="error" />
                  )
                }
              />
              <CardSection text="Probability" value={forcastProbability} />
            </Box>
            <Box>
              <MapChart />
            </Box>
          </Box>
          <Divider className={classes.divider} light />
          <Box>
            <Typography
              className="MuiTypography--subheading"
              variant="subtitle1"
            >
              {question}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
