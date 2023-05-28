import React,{useEffect, useState} from 'react'
import { themes} from '../data/data';
import ThemeItem from '../components/ThemeItem'
import { FaCog} from 'react-icons/fa'
import { BsSun, BsMoon} from 'react-icons/bs'
import i18n from 'i18next';

const getStorageColor = () =>{
    let color = 'hsl(252, 35%, 51%)';

    if(localStorage.getItem('color')){
        color = localStorage.getItem('color')
    }
    return color;
}

const getStorageTheme = () =>{
    let theme = 'light-theme';

    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme;
}
var currentLanguage = localStorage.getItem('language');


const Themes = () => {
    const [ showSwitcher, setShowSwitcher] = useState(false)
    const [ color, setColor] = useState(getStorageColor())
    const [ theme, setTheme] = useState(getStorageTheme)
    const [ language, setLanguage] = useState(currentLanguage)

    const changeColor =(color) => {
        setColor(color);
    }
    

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        }
        else {
            setTheme('light-theme');
        }
    }

    const toggleLanguage = () => {
        if (language === 'pt') {
            setLanguage('en');
            i18n.changeLanguage('en');

        }
        else {
            setLanguage('pt');
            i18n.changeLanguage('pt');
        }
    }


    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color])

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

    useEffect(() => {
        localStorage.setItem('language', language);
      }, [i18n.language]);

  return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
            <div 
                className='style__switcher-toggler' 
                onClick={() => setShowSwitcher(!showSwitcher)}
            >
                <FaCog/>
            </div>

            <div className='theme__toggler' onClick={toggleTheme}>
                {theme === 'light-theme' ?  <BsMoon/> : <BsSun/> }
            </div>
            
            <div className='language__toggler' onClick={toggleLanguage}>
                {language === 'pt' 
                    ?  
                    <h1>PT</h1>
                    : 
                    <h1>EN</h1>
                    }
            </div>

            <h3 className='style__switcher-title'>Style Switcher</h3>
            <div className='style__switcher-items'>
                {themes.map((theme,index) => {
                    return <ThemeItem key={index} {...theme} changeColor={changeColor}/>;
                })}
            </div>

            <div className='style__switcher-close'
                onClick={() => setShowSwitcher(!showSwitcher)}
            >
                X
            </div>

        </div>
    </div>
  )
}

export default Themes