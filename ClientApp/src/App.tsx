import * as React from "react";
import RoutesComponent from "src/router/RoutesComponent";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import { SnackbarProvider, useSnackbar } from "notistack";
import SnackbarComs from "src/components/Commons/Alert/SnackbarComs";
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";

// Create browser history to use in the Redux store
const baseUrl = document
  .getElementsByTagName("base")[0]
  .getAttribute("href") as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

export default function App(props) {
  return (
    <Provider store={store}>
      <AppWithTheme {...props} />
    </Provider>
  );
}

function AppWithTheme(props) {
  const defaults = {
    primary: "#2196f3",
    secondary: "#f50057",
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: defaults.primary,
      },
      secondary: {
        main: defaults.secondary,
      },
    },
    typography: {
      fontSize: 12.5,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <>
          <CssBaseline />
          <AppWithSnackbar {...props} />
        </>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

function AppWithSnackbar(props) {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    // this is a little hack to not have to import notistack
    // on all the components that emit messages
    SnackbarComs.registerNotistakEnqueueSnackbar(enqueueSnackbar);
  }, [enqueueSnackbar]);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <RoutesComponent />
      </ConnectedRouter>
    </React.Fragment>
  );
}
