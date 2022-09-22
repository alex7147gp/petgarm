import React from 'react'
import { AiFillHome, AiFillStar } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'
import styled from 'styled-components'

const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
const LinkB = styled(Link)`
  align-items:center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  flex-direction: column;

  &:after {
    ${fadeIn({ time: '0.5s' })};
    content: '·';
    display: ${props => props.punto === 'true' ? 'flex' : 'none'};
    margin: -2px;
    position: absolute;
    bottom: 0;
    font-size: 34px;
    line-height: 20px;
  }
 
`

export const Navbar = () => {

  const locatio = useLocation()

  const location = locatio.pathname

  return (
    <Nav>
      <LinkB
        to="/"
        underline="hover"
        style={{ color: location === '/' ? 'unset' : '#888' }}
        punto={location === '/' ? 'true' : 'false'} 
      >
        <AiFillHome size="28px"/>
      </LinkB>
      <LinkB
        to="/favorite"
        underline="hover"
        style={{ color: location === '/favorite' ? 'unset' : '#888' }}
        punto={location === '/favorite' ? 'true' : 'false'}
      >
        <AiFillStar size="28px"/>
      </LinkB>
      <LinkB
        to="profile"
        underline="hover"
        style={{ color: location === '/profile' ? 'unset' : '#888' }}
        punto={location === '/profile' ? 'true' : 'false'}
      >
        <FaUserAlt size="28px"/>
      </LinkB>
    </Nav>
  )
}
