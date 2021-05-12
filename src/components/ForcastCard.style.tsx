import { makeStyles } from "@material-ui/core";
export const useStyle = makeStyles((muiBaseTheme) => ({
  card: {
    display: "flex",
    flexFlow: "column",
    alignItems: "space-between",
    maxWidth: "30vw",
    minWidth: "30vw",
    minHeight: "200px",
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  content: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    minHeight: "150px",
    textAlign: "left",
    padding: muiBaseTheme.spacing(3)
  },
  divider: {
    margin: `0 0 ${muiBaseTheme.spacing(3)}px`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  }
}));
