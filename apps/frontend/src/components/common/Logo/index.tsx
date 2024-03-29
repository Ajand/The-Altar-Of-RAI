import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  align-items: center;
  display: flex;
`

const LogoSVG = styled.svg`
  .text {
    font-family: ${(props) => props.theme.fonts.fontFamily};
    font-size: 24px;
    font-weight: 700;
  }
  .text,
  .fill {
    fill: ${({ theme }) => theme.bg6};
  }
`

export const Logo: React.FC = (props) => {
  return (
    <Wrapper {...props}>
      <LogoSVG height="33" viewBox="0 0 240 33" width="240" xmlns="http://www.w3.org/2000/svg">
        <text className="text" transform="translate(40.5 24)">
          <tspan x="0" y="0">
            Altar of RAI
          </tspan>
        </text>
      </LogoSVG>
    </Wrapper>
  )
}
