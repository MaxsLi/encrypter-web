import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";

import Routes from "./routes";
import {darkTheme, lightTheme} from "./themes/theme";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const appliedTheme = isDarkTheme ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme);
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={appliedTheme}>
        <BrowserRouter>
          <Routes isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme}/>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
