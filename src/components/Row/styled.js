import styled from 'styled-components';

export const Root = styled.div`
color: white;
`;

export const RowTitle = styled.h2``;

export const RowSlider = styled.div``;

export const RowPosters = styled.div`
display: flex;
owerflow-y: hidden:
owerflow-x: scrol;

&::-webkit-scrollbar {
  display: none;
}
`;

export const RowPoster = styled.img`
max-height: 144px;
// object-fit: contain;

border-radius: 5px;
margin-right: 10px;

&:hover {
  transform: scale(2)
}
`;