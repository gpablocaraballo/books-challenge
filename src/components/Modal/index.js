import styled from 'styled-components';
import themeConfig from '../../libs/theme';

const Box = styled.div`
  z-index: 999;
  max-width: 500px;
  margin: ${(props) => (props.margin ? props.margin : '15% auto')};
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: ${(props) => (props.hideScroll ? 'hidden' : 'auto')};
  background-color: ${themeConfig.color.Background};
`;

function Modal(props) {
  const {
    onBackgroundClick, margin, children,
  } = props;

  return (
    <Background onClick={() => onBackgroundClick && onBackgroundClick()}>
      <Box margin={margin} onClick={(e) => e.stopPropagation()}>
        {children}
      </Box>
    </Background>
  );
}

export default Modal;
