import React from 'react'
import Logo from '../../img/got.png'
const Header = () => {
    return (
        <header className="center">
           <img src={Logo} alt="" style={{mixBlendMode:"multiply",width:"500px"}}/> 
        </header>
    )
}

export default Header
