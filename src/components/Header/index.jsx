import { display } from '@mui/system';
import React, { useEffect, useState } from 'react'
import HeaderBase from './components/HeaderBase/HeaderBase';
import NavBar from './components/NavBar/NavBar';


export default function Header() {
    const [scrolledShow, setScrolledShow] = useState(false)

    const HeaderScrolled = ()=> {
        if (window.scrollY > 100) {
            setScrolledShow(true)
        } else {
            setScrolledShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', HeaderScrolled);
        
    },[HeaderScrolled]);

    return (
        <div>
            <HeaderBase scrolledShow={scrolledShow}>
                <NavBar  />
            </HeaderBase>
        </div>
    )
}
