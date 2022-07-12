import Link from 'next/link'
import React from 'react' // we need this to make JSX compile
import styled from 'styled-components'

export const StylesHeader = styled.header`
  height: 64px;
  min-height: 64px;
  background:${(props) => props.theme.colors.primary};
  color: white;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  a {
      margin 0;
      line-height: 64px;
      padding-left: 16px;
      font-size: 24px
  }
`

export const AppHeader = () => (
  <StylesHeader>
    <Link href={'/'}>Homemaderecipes.eu</Link>
  </StylesHeader>
)
