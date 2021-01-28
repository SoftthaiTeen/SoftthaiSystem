import React from "react";
import { Route, useLocation } from "react-router-dom";
import Layout from "src/layout/CommonLayout/Layout";

function _CommonRoute({ component: Component, ...rest }) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default _CommonRoute;
