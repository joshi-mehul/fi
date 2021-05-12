import { motion } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./ForcastCard.style";
import { FC } from "react";

interface Props {
  title: string;
  question: string;
  id: string;
  onClick: (id: string) => void;
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

export const ForcastCard: FC<Props> = ({ onClick, id, title, question }) => {
  const classes = useStyle();
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <motion.div layoutId={id} transition={spring}>
      <Card className={`card ${classes.card}`} onClick={handleOnClick}>
        <CardContent className={classes.content}>
          <Typography
            className="MuiTypography--heading"
            variant="h6"
            gutterBottom
          >
            {title}
          </Typography>
          <Divider className={classes.divider} light />
          <Typography className="MuiTypography--subheading" variant="caption">
            {question}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
