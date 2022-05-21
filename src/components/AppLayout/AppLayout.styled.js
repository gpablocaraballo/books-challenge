import styled from 'styled-components';
import themeConfig from '../../libs/theme';

const Container = styled.div`
    width: 100%;
    max-width: ${themeConfig.maxWidthContainerPx}px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
`;

export default Container;
