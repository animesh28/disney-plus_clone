import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeIcon, SearchIcon, WatchlistIcon, OriginalsIcon, SeriesIcon, MoviesIcon, Logo } from './AllSvgs'

function Header(props) {
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
  return (
    <Nav>
      <DisneyLogo>
        <Logo/>
      </DisneyLogo>

      <NavMenu>
        {
          menu.map(item => {
            let CompName = item.component
            return (
            <MenuLink to={`/${item.name.toLowerCase()}`}> 
              <CompName/>
              <span>{item.name}</span>
            </MenuLink>
            )
          })
        }       
      </NavMenu>
      <Login>Login</Login>
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
export default Header