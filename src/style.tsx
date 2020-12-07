import styled, { createGlobalStyle } from 'styled-components';

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
`;

export const FullContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${lightColor};
`;

export const MainContainer = styled.div<{ orientation: string }>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation};
  margin: 4vh 0;

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

export const Button = styled.button<{ size: number }>`
  background-color: ${redColor};
  color: ${darkColor};
  transition: all 0.2s;
  font-size: ${({ size }) => size}px;

  :hover {
    background-color: ${redColorLight};
  }
`;

export const OutlineButton = styled(Button)`
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
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.4);
  
  a,
  a:link,
  a:visited,
  a:active {
    padding: 20px;
    text-decoration: none;
    color: ${darkColor};
    font-weight:bold;
  }

  a:hover{
      background-color: #ffffff80;
    }
`;