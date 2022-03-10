import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeIcon, SearchIcon, WatchlistIcon, OriginalsIcon, SeriesIcon, MoviesIcon, Logo } from './AllSvgs'
import {auth, provider} from './firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectEmail, selectPhoto, selectUserName, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'

function Header(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUserName)
  const userPhoto = useSelector(selectPhoto)

  const names = username.split(' ')

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [username])
  

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  const menu = [
    {
      name: 'Home',
      component: HomeIcon
    },
    {
      name: 'Search',
      component: SearchIcon
    }
    ,
    {
      name: 'Watchlist',
      component: WatchlistIcon
    },
    {
      name: 'Originals',
      component: OriginalsIcon
    },
    {
      name: 'Movies',
      component: MoviesIcon
    },
    {
      name: 'Series',
      component: SeriesIcon
    }
  ]

  const handleAuth = async () => {
    if(!username) {
      try {
        const res = await signInWithPopup(auth, provider)
        setUser(res.user)
      } catch(error) {
        console.log(error.message);
      }
    } else if(username) {
      try {
        signOut(auth)
        dispatch(setSignOutState())
        history.push('/')
      } catch(error) {
        console.log(error.message);
      }
    }
  }
  return (
    <Nav>
      <DisneyLogo>
        <Logo/>
      </DisneyLogo>

      
      { !username ?
        <Login onClick={handleAuth}>Login</Login> :
        <>
        <NavMenu>
        {
          menu.map((item, i) => {
            let CompName = item.component
            return (
            <MenuLink key={i} to={`/${item.name.toLowerCase()}`}> 
              <CompName/>
              <span>{item.name}</span>
            </MenuLink>
            )
          })
        }       
      </NavMenu>
      <SignOut>
        <UserImg src={userPhoto}/>
        <DropDown onClick={handleAuth}>
          <figure></figure>
          <span>Sign Out</span>
        </DropDown>
      </SignOut>
      </>
      }
    </Nav>
  )
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
const DisneyLogo = styled.div`
  width: 80px;
  margin-top: 4px;
  max-height: 60px;
  display: inline-block;

  img {
    display: block;
  }
`

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  color: #f9f9f9;
  text-transform: uppercase;

  svg {
    height: 20px;
    min-width: 20px;
    width: 20px;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.88;
    padding: 2px 0;
    margin-left: 8px;
    white-space: nowrap;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      background-color: rgb(249, 249, 249);
      height: 2px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      opacity: 0;
      width: auto;
    }
  }
    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1 !important;
        visibility: visible;
      }
    }
  
`
const Login = styled.a`
  background-color: rgba(0, 0, 0, .6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all .2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: 1px solid transparent;
  }
`

const UserImg = styled.img`
  height: 100%;
`

const DropDown = styled.div`
  position: absolute;
  top: 65px;
  right: 0%;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, .34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 110px;
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease-in;
  cursor: pointer;
  
  span {
    position: relative;
    z-index: 2;
  }

  figure {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -15px;
    right: 11px;
    background: rgba(151,151,151,.34);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px 0px;
    z-index: -1;
    -webkit-clip-path: polygon(50% 0%,0% 100%,100% 100%);
    clip-path: polygon(50% 0%,0% 100%,100% 100%);
  }
`

const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${UserImg} {
    border-radius: 50%;
  }
  
  &:hover {
    ${DropDown} {
      visibility: visible;
      opacity: 1;
    }
  }
  
`
export default Header