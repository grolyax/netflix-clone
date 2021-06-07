import styled from 'styled-components';

export const Root = styled.header`
  position: fixed;
  top: 0;

  width: 100%;

  display: flex;

  padding: 20px 50px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width:100px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;

  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavListItem = styled.li`
margin-left: 20px;
`;

export const NavListItemLink = styled.a`
cursor: pointer;
text-decoration: none;
color: #e5e5e5;

transition: .5s ease-in-out color;

${(props) => 
  props.active
    ? `
  color: #fff;
  cursor: default;
  font-weight: 700;
`
    : `&:hover {
  color: #b3b3b3;
  }`}
`;

export const ProfileImg = styled.img``;
