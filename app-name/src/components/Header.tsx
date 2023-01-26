import { Fragment } from 'react';

interface props { children: JSX.Element }

export default function Header({ children }: props) {

    return (
        <Fragment>

            <div className="Header flex">
                <div className="nav">
                    <ul className='primary-navigation'>
                        <li className='active'>
                            <a href="/" className='activ'>
                                <span ></span>Social
                            </a>
                        </li>
                        <li className='active'>
                            <a href="/">
                                <span ></span>Skills
                            </a>
                        </li>
                        <li className='active'>
                            <a href="/">
                                <span ></span>About Me
                            </a>
                        </li>
                        <li className='active'>
                            <a href="/">
                                <span ></span>contact
                            </a>
                        </li>
                    </ul>

                    <div className="lite">
                        <i className="fas fa-moon"></i>
                    </div>
                </div>

                {children}
            </div>
        </Fragment>
    );
};

