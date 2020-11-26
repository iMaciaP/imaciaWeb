// @flow
import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
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

type Props = {};

// TODO: posar un prop que sigui un array de tabs

const HeaderMenu = ({ ...props }: Props): React$Element<"div"> => {
  const classes = useStyles();

  // TODO: set current active tab based on this
  const location = useLocation();
  console.log(location.pathname);

  const history = useHistory();

  // TODO: proper way to do this
  const handleOnClick = React.useCallback(() => history.push("/about"), [
    history,
  ]);
  const handleOnClick2 = React.useCallback(() => history.push("/"), [history]);

  const [showMenu, setShowMenu] = React.useState(false);
  const [value, setValue] = React.useState(0); //TODO get value of current page

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

          <Tabs
            className={classes.tabsContainer}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            centered
          >
            <Tab label="Home" onClick={handleOnClick2} />
            <Tab label="About" onClick={handleOnClick} />
          </Tabs>
        </Toolbar>
      </AppBar>
      {showMenu ? <div>show menu</div> : null}
    </div>
  );
};

export default HeaderMenu;
