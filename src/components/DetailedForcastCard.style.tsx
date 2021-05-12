import { makeStyles } from "@material-ui/core/styles";
import { BorderRight } from "@material-ui/icons";
export const useStyle = makeStyles((muiBaseTheme) => ({
  card: {
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    maxWidth: "50vw",
    minWidth: "50vw",
    minHeight: "430px",
    backgroundColor: "#fafafa",
    marginBottom: muiBaseTheme.spacing(4),
    cursor: "pointer",
    zIndex: 2,
    position: "fixed",
    top: "25vh",
    left: "25vw",
    borderRadius: muiBaseTheme.shape.borderRadius,
    padding: muiBaseTheme.shape.borderRadius
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing(3),
    zIndex: 99
  },
  divider: {
    margin: `${muiBaseTheme.spacing(1)}px 0 ${muiBaseTheme.spacing(3)}px 0`
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardSplit: {
    display: "flex",
    "& > .MuiBox-root": {
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      marginBottom: muiBaseTheme.spacing(1.8),

      "&:first-child": {
        borderRight: `1px solid ${muiBaseTheme.palette.divider}`
      }
    }
  }
}));
