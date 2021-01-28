import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import './nprogress_custom.css';

NProgress.configure({ showSpinner: false });

class ProgressBar {
    static start() {
        NProgress.start();
    }

    static done() {
        NProgress.done();
    }
}

export default function LoadingComponent() {
    useEffect(() => {
        ProgressBar.start();

        return () => {
            ProgressBar.done();
        };
    }, []);

    return <div />;
}