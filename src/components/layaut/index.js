import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"

const Div = styled.div`
  padding:16px ;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  padding-bottom: 8px;
`
const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  padding-bottom: 4px
`

export const Layaut = ({ children, title, subtitle }) => {
  
  return (
    <>
      <Helmet>
        {title && <title>{title} | Pegram </title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
Layaut.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}
