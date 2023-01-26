import React from 'react';
import imges from '../img/DigiBoy 6.png'


interface props { children: JSX.Element }

export default function Aside({ children }: props) {


    return (
        <div className='asid'>
            <div className='asidContiner'>
                
                <div className='selct_box'>
                    <div className='leftt'>
                        <img src={imges} alt="" />
                        <div className='name'>
                            <h1>Faris Abdullah</h1>
                            <p> Front-end Web Designer</p>
                        </div>

                        <div className="Profile">
                            <h2>Profile personly</h2>
                            <div className="age">
                                <h3>Age: <span>18</span></h3>
                            </div>
                            <div className="nationality">
                                <h3>Nationality: <span>Yemen</span></h3>
                            </div>
                            <div className="e_mail">
                                <h3>E-mail: <span>zaxfares33@gmil.com</span></h3>
                            </div>
                        </div>
                    </div>
                </div>


                {children}
            </div>
        </div>

    );
};
