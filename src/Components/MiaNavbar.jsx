import React from 'react';
import './MiaNavbar.css';
import { motion, useScroll, useSpring } from "motion/react"



const MiaNavbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-sx">
            <img src="https://www.bnkr.it/storage/app/uploads/public/609/d39/a89/logos__609d39a89cdaa491862258.png" className='logo'/>
            {/* <a href="//logotyp.us/logo/reebok" ></a> */}
            
                {/* <a href="/" className="logo">
                    Gestionale
                </a> */}
            </div>
            <div className="navbar-centro">
                <ul className="nav-links">
                    <li>
                        <a href="/products">Link 1</a>
                    </li>
                    <li>
                        <a href="/about">Link 2</a>
                    </li>
                    <li>
                        <motion.button
                        className='bottone'
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.9}}>Richiedi Informazioni</motion.button>
                    </li>
                </ul>
            </div>
        </nav>




    );
};

export default MiaNavbar;