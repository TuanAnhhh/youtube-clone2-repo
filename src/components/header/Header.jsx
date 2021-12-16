import React, { useState } from 'react'
import './_header.scss'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiVideoAddFill} from 'react-icons/ri'
import {IoMdApps, IoIosNotifications} from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Header({handleToggleSidebar}) {
    const dispatch = useDispatch()
    const [textSearch, setTextSearch] = useState('')
    const history = useHistory()
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`/search:${textSearch}`)
    }
    return (
        <div className="header">
            <div className="header__left">
                <FaBars 
                    className="header__menu" size={20} 
                    onClick={handleToggleSidebar}/>
                <Link  to="/" className="header__logo">
                    <img 
                        src="https://download.logo.wine/logo/YouTube/YouTube-White-Logo.wine.png"
                        alt="logo" />
                </Link>
            </div>

            <form action="" className="header__center" onSubmit= {handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={e=> setTextSearch(e.target.value)}
                    />
                <button 
                    type="submit" 
                    
                    >
                    <AiOutlineSearch size={20} className="searchIcon"/>
                </button>
                {/* <BsFillMicFill/> */}
            </form>

            <div className="header__right">
                <RiVideoAddFill size={22} className="item"/>
                <IoMdApps size={22} className="item" />
                <IoIosNotifications size={22} className="item" />
                <img src="https://www.pngkey.com/png/detail/115-1150354_fernanfloo-avatar-by-katyalazy-on-deviantart-just-dance.png" 
                alt="avatar"
                className="avatar item"
                ></img>
            </div>
        </div>
    )
}

export default Header
