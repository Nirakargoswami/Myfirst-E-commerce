import styled, { css } from "styled-components";

export const NEW_Button = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
/*   @media ${device.laptop} { 
    // max-width: 800px;
  }*/

export const BUTTON = styled.button`
  
  background-color: blue;
  text-align: center;
 
  font-size: 1rem;
  color: white;
  
  ${(props) =>
    props.color === `Black` &&
    css`
      border: 2px solid white;
      color: black;
    `}
`;
export const Containar = styled.div`
         display: flex;
         padding:0px;
         margin: 0px;
         background-color: ${(props) =>
           props.background ? props.background : "blue"};
       
         width: ${(props) => props.width}%;

         ${(props) =>
           props.column &&
           css`
             flex-direction: column;
           `}
       `;

export const IMAGE = styled.img`
         width: 100%;
         object-fit: cover;
        
         src: ${(props) => props.src};
       `;

export const INPUT = styled.input`
  
  font-size: 1.3rem;
  color: black;
  border: none;
  background: white;
  margin:0.5em;
  padding: 0.3em;
  width:${(props) => props.width }%;
  ::placeholder {
    color: black;
  }
`
export const ICON = styled.button`
         background-color: transparent;
        
         
         max-width: ${(props) => props.width}em;
       `;

export  const BOX = styled.div`
         
          background-color: transparent;
          
          width: ${(props) => props.width}%;
          display: block;
          ${(props) =>
            props.display &&
            css`
              display: ${props.display};
            `}
        `;








export const SEARCHBOX_CONTAINE = styled(Containar)`
         align-items: center;
         box-shadow: 5px 5px gray;
   
         @media (min-width: 700px) {
           display: none;
         }
       `;
