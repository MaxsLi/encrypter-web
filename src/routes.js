import React, {useEffect, useState} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {ping} from "./store/thunkCreators";
import {Home, About, Appbar, SnackbarError} from "./components";
import {setError} from "./store/reducerFunctions";

const Routes = (props) => {
  const {status, version, error, isFetching, ping, clearError} = props;
  const [errorMessage, setErrorMessage] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    ping();
  }, [ping]);

  useEffect(() => {
    if (error) {
      // check to make sure error is what we expect, in case we get an unexpected server error object
      if (typeof error === "string") {
        setErrorMessage(error);
      } else {
        setErrorMessage("Internal Server Error. Please try again");
      }
      setSnackBarOpen(true);
      clearError();
    }
  }, [error, clearError]);

  if ((!status || !version) && isFetching) {
    return <div>Loading...</div>;
  } else if (!status && !isFetching) {
    return <div>{error}</div>
  }

  return (
    <>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <Appbar isDarkTheme={props.isDarkTheme} setDarkTheme={props.setDarkTheme}/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.status,
    version: state.version,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ping() {
      dispatch(ping());
    },
    clearError() {
      dispatch(setError(undefined));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
