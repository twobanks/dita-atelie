import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  gap: 1rem;
  li {
    list-style: none;
  }
`

export const Item = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 2.4rem;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${theme.font.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    img {
      transition: 0.2s;
      display: flex;
    }
    &:hover {
      transition: 0.2s;
      img {
        transition: 0.2s;
        display: flex;
      }
    }
  `}
`
