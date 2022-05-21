import styled, { css } from 'styled-components';
import themeConfig from '../libs/theme';

export const LabelBox = styled.div`
    width: 100%;
    ${(props) => props.light
        && css`
        color: ${themeConfig.color.LabelModal};
    `}
    ${(props) => props.large
        && css`
        font-size: 20px;
    `}
    ${(props) => props.extraLarge
        && css`
        font-size: 30px;
    `}
    ${(props) => props.warning
        && css`
        color: ${themeConfig.color.warning};
        font-weight: bold;
    `}    
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const ButtonBox = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    color: ${themeConfig.color.DetailButtonText};
    background: ${themeConfig.color.DetailButton};
    border-radius: 14px;
    height: 33px;
    cursor: pointer;
    padding: 0 10px 0 10px;
    ${(props) => props.warning
        && css`
        background-color: ${themeConfig.color.warning};
    `}
    ${(props) => props.cancel
        && css`
        background-color: ${themeConfig.color.cancel};
    `}   
`;
