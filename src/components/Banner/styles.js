import styled from 'styled-components';

export const Root = styled.div`
color: white;

height: 100vh;

background-image: url(${props => props.backgroundImage});
background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: 20px;
`;

export const MovieTitle = styled.h1`
font-size: 3rem;
font-weight: 800;

`;

export const MovieOverview = styled.p`
font-size: 1rem;
font-weighr: 500;
max-width:400px;
height:90px;
`;

export const Buttons = styled.div`
display: flex;
margin-top: 20px;
`;

export const Button = styled.button`
display: flex;
align-items: center;
border-radius: 10px;
border: none;
outline: none;
padding: 0.8rem 2.4rem 0.8rem 2rem;
margin-right: 10px;
cursor: pointer;
font-size: 1rem;
font-weight: 700;

svg {
  width: 20px;
  height: 20px;
  padding-right: 10px;
  fill:
  currentColor;
}
`;

export const PlayButton = styled(Button)`
background: white;
color: black;
&:hover {
  background-color: rgb(255, 255, 255, 0.75);
}
`;

export const InfoButton = styled(Button)`
background-color: rgb(109, 109, 110, 0.7);
color: white;
&:hover {
  background-color: rgb(109, 109, 110, 0.4);
}
`;