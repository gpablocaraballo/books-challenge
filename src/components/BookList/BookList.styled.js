import styled from 'styled-components';
import themeConfig from '../../libs/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${themeConfig.maxWidthContainerPx}px;
  justify-content: center;
  margin-top: 20px;
`;

export const UpperContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;  
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ListItem = styled.div`
  border-radius: 15px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px black;
  width: 250px;
  height: 270px;
  margin: 10px !important;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.8;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const ItemThumbNail = styled.img`
  max-width: 350px;  
  max-height: 200px;
`;

export const ItemName = styled.div`
  font-size: 16px;
  font-weigth: 500;
  color: black;
  text-overflow: ellipsis;
  @supports (-webkit-line-clamp: 2) {
    white-space: initial;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }     
`;

export const DeleteInput = styled.input`
  color: black;
  font-weight: bold;
  background-color: white;
`;

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfirmButtons = styled.div`
  display: flex;
`;
