import { Button, Fab } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

export const yellow = '#FFFF7F';
export const redColorLight = '#FF9FAF';
export const redColor = '#FF7A8A';
export const lightColor = '#52437B';
export const darkColor = '#00004A';
export const greenColor = '#7DFF88';

export const device = {
  small: 540
};

export const size = {
  small: `(max-width: ${device.small}px)`
}

export const defaultButton = css`
    font-family: inherit;
    cursor: pointer;
    border: 0;
    border-radius: 50px;
    padding: 5px 15px;
    font-weight: bold;
    outline: none;
    text-transform: inherit;
`;

export const GlobalStyle = createGlobalStyle`

body,
html {
  font-family: 'Raleway', Arial;
  /* height: 100vh;
  width: 100vw; */
  background-color: ${lightColor};
  color: #fff;
  /* overflow: hidden; */
}

button {
  font-family: inherit;
  cursor: pointer;
  border: 0;
  border-radius: 50px;
  padding: 5px 15px;
  font-weight: bold;
  outline: none;
}

input,
textarea {
  font-family: inherit;
  font-size: 14pt;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid ${darkColor};
  width: 400px;
  min-width:120px;
  resize: none;
  height:26px;

  @media ${size.small}{
    width: auto;
  }
}

svg {
  cursor: pointer;
}
`;

export const ActiveLink = styled(NavLink)`
  &.active{
    background-color: ${lightColor};
    color: #fff;
    }
`;

export const FullContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${lightColor};
`;

export const MainContainer = styled.div<{ orientation: string }>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation};
  /* margin: 4vh 0; */

  @media ${size.small} {
    flex-direction: column;
  }
`;

export const Container = styled(MainContainer)`
  /* margin: auto; */
  flex-wrap: wrap;
  align-items: center;
  align-self: center;

  @media ${size.small} {
    order: 2;
    margin: 10px;
    align-self: center !important;
  }
`;

const buttonColor = css`
  background-color: ${redColor};
  color: ${darkColor};
  transition: all 0.2s;

  :hover {
    background-color: ${redColorLight};
  }
`;
export const ButtonStyled = styled(Button) <{ fontSize: number }>`
  ${defaultButton}
  ${buttonColor}
  font-size: ${({ fontSize }) => fontSize}px;
`;

export const FabStyled = styled(Fab) <{ fontSize: number }>`
  ${buttonColor}

  position: fixed;
  bottom: 25px;
  right: 25px;
  font-size: ${({ fontSize }) => fontSize}px;
`;

export const StyledButton = styled(Button)`
  background-color: #FF7A8A;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;

  &:hover {
    background-color: black;
  }
  
`;

export const OutlineButton = styled(ButtonStyled)`
  background-color: transparent;
  color: ${darkColor};
  border: 2px solid ${darkColor};

  :hover {
    background-color: ${darkColor};
    color: #fff;
  }
`;

export const Text = styled.span<{ fontSize?: number, fontColor?: string, fontWeight?: string }>`
  font-size: ${({ fontSize }) => !fontSize ? 15 : fontSize}px;
  color: ${({ fontColor }) => !fontColor ? darkColor : fontColor};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight >= '600' ? 'bold' : 'normal'};
`;

export const Divider = styled.div`
  width: auto;
  background: #e2e2e2;
  height: 1px;
  margin: 10px 0;
`;

export const NavigationBar = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  
  a,
  a:link,
  a:visited,
  a:active {
    padding: 20px;
    text-decoration: none;
    /* color: ${darkColor}; */
    font-weight:bold;
  }

  a:hover {
    background-color: #7f7fff;
    color: #fff;
  }
`;

export const fadeIn = keyframes`
  from { 
    opacity: 1;
    display: block;
   }
  to { 
    opacity: 0; 
    display:none;
    }
`;

export const fadeOut = keyframes`
  from { opacity: 0; 
    display:none;
  }
  to {
    opacity: 1; 
    display: block;
  }
`;

export const Tooltip = styled.div`
  background-color:#5e5e5e;
  position: absolute;
  /* bottom: 15px;
  right: 80px; */
  padding: 5px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  color: white;
  transition: opacity .5s;
  transition-delay: 1.3s;
  opacity: 0;
  pointer-events: none;
`;

