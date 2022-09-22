import React from 'react'
import { Logo } from '../logo'
import { HiOutlineChat } from "react-icons/hi"
import { HiOutlineCamera } from "react-icons/hi"
import { HiOutlinePlusCircle } from "react-icons/hi"
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  margin-left: -5px;
  height: 20%;
  top: 10px;
  justify-content: space-between;

`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 15px;

`
const Slider = styled.div`
  display: flex;
  margin-top: 16px;
`

const Item = styled.div`
  margin: 8px;
`

export const Topbar = ({ isAuth }) => {
  return (
    <Container>
      <Slider>
        <Logo />
      </Slider>
      {
        isAuth && <Wrapper>
        <Item>
          <HiOutlinePlusCircle size='34px' />
        </Item>
        <Item>
          <HiOutlineChat size='34px' />
        </Item>
        <Item>
          <HiOutlineCamera size='34px' />
        </Item>
        </Wrapper>
      }
    </Container>
  )
}
