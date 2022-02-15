import styled from "styled-components"

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
