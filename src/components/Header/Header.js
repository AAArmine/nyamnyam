import React from 'react';
import hed from "./Header.module.css"

const Header = () =>{
    return (
        <header className={hed.header}>
            <img className = {hed.imgClass} src = "https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg"/>
        </header>

    );
}

export default Header;