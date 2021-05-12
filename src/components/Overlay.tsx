import { motion } from "framer-motion";
import { FC } from "react";
import { makeStyles } from "@material-ui/core";

interface Props {
  isSelected: boolean;
}

const useStyle = makeStyles(() => ({
  overlay: {
    zIndex: 1,
    position: "fixed",
    background: "rgba(0, 0, 0, 0.2)",
    willChange: "opacity",
    top: 0,
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "100%",
    a: {
      display: "block",
      position: "fixed",
      top: 0,
      bottom: 0,
      width: "100vw",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }
}));

const Overlay: FC<Props> = ({ isSelected }) => {
  const classes = useStyle();
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isSelected ? "auto" : "none" }}
      className={classes.overlay}
    >
      <a />
    </motion.div>
  );
};

export default Overlay;
