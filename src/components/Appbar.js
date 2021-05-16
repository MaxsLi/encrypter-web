import React from 'react';
import {useHistory} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tooltip,
} from "@material-ui/core";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  themeButton: {
    marginLeft: "auto",
  },
}));

const Appbar = (props) => {
  const {isDarkTheme, setDarkTheme} = props;
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
        <Button color="inherit" onClick={() => history.push("/about")}>About</Button>
        <Tooltip title="Toggle light/dark theme">
          <IconButton className={classes.themeButton} aria-label="toggle light/dark theme" color="inherit"
                      onClick={() => {setDarkTheme(!isDarkTheme)}}>
            { isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}


export default Appbar;
