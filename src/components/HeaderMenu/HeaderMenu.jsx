// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  toolBar: {
    display: "flex",
    flexWrap: "wrap",
  },
  tabsContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

// TODO: posar un prop que sigui un array de tabs

const HeaderMenu = (): React$Element<"div"> => {
  const classes = useStyles();

  const [showMenu, setShowMenu] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Link to="/about" />
          <Tabs
            className={classes.tabsContainer}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            centered
          >
            <Tab label="About me"></Tab>
            <Tab label="Expercience" />
            <Tab label="Shop" disabled />
          </Tabs>
        </Toolbar>
      </AppBar>
      {showMenu ? <div>show menu</div> : null}
    </div>
  );
};

export default HeaderMenu;
