import styled from 'styled-components';

const HeaderStyle = styled.header`
  background-color: #3A3c55;
  color: #fff;
  height: 70px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`
const TitleHeader = styled.h1`
  font-size: 1.2rem;
`
export const Header = () => {
  return (
    <HeaderStyle>
      <TitleHeader>App - CoinKeeper</TitleHeader>
    </HeaderStyle>
  )
}