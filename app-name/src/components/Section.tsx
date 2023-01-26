import React, { Fragment } from 'react';



interface props { children: JSX.Element }

export default function Section({children}: props) {

    return (
        <Fragment>
            <div className="Section">
                <div className="contenar">
                    {children}
                </div>
            </div>
        </Fragment>
    )
};

