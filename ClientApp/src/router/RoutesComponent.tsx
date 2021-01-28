import React from "react";
import { Switch } from "react-router-dom";
import _blankRoute from "src/router/_blankRoute";
import _CommonRoute from "src/router/_CommonRoute";
import Customloadable from "src/router/LoadableComponent/Customloadable";


import routes from "src/router/routes";

function RoutesComponent() {
 
    return (
        <Switch>
            {routes._blankRoute.map((route) => (
                <_blankRoute
                    exact
                    key={route.path}
                    path={route.path}
                    component={Customloadable({
                        loader: route.loader,
                    })}
                />
            ))}
            {routes._CommonRoute.map((route) => (
                <_CommonRoute
                    key={route.path}
                    path={route.path}
                    component={Customloadable({
                        loader: route.loader,
                    })}
                    exact={Boolean(route.exact)}
                />
            ))}
        </Switch>
    );
}

export default RoutesComponent;
