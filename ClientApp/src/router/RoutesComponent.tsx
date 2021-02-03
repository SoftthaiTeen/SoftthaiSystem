import React, { useEffect, useRef, useState } from "react";
import { Switch } from "react-router-dom";
import { ProgressBar } from "src/router/LoadableComponent/LoadingComponent";
import _blankRoute from "src/router/_blankRoute";
import _CommonRoute from "src/router/_CommonRoute";
import Customloadable from "src/router/LoadableComponent/Customloadable";


import routes from "src/router/routes";
import { setInterval } from "timers";

function RoutesComponent() {
    const isInitialMount = useRef(true);
    // const [loading, Setloading] = useState(true);
   
    // setInterval(() => {
    //     Setloading(false);
    // }, 1000);
    // useEffect(() => {
    //     if (isInitialMount.current) {
    //         isInitialMount.current = false;
    //         ProgressBar.start();

    //         return;
    //     }



    //     if (!loading) {
    //         ProgressBar.done();
    //     }
    // }, [loading]);

    // if (loading) {
    //     return <div />;
    // }
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
