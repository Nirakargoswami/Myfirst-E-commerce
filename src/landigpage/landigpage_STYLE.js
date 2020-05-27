import styled, { css } from "styled-components";

import { BOX, Containar, IMAGE,BUTTON } from "../allcomponent/newcomonent";

export const Search = styled(BOX)`
         box-shadow: 5px 5px gray;
         position: relative;
         top: 0rem;
         border: 1px solid blue;
          margin: 0em  1em 0em 1em;
         z-index: 20;
         
         @media (min-width: 700px) {
           border: 1px solid red;
           width: 40%;
           position: relative;
           left: 15em;
           height: 17em
         }
       `;

export const DISPLAY_ITEM = styled(Containar)`
         flex-wrap: wrap;
        padding-top:1em;
         @media (min-width: 700px) {
           flex-direction: row;
           
         }
       `;


export const FILTER_SORT = styled(Containar)`
         border: 1px solid black;
         background: #014b4c;
         align-items: center;
         justify-content: center;
         @media (min-width: 700px) {
           width: 70%;
         }
       `;


export const MAIN_BOX_OF_FILTER = styled(Containar)`

background: #014B4C;
position:sticky;
top:0px; 
         align-items: center;
       `;




export const MAIN_ITEM_BOX = styled(Containar)`
         width:100%;
         border: 2px solid green;
         padding: 0.5em;
         background: #6d7a7a;
         @media (min-width: 700px) {
   
           width:${(props) =>  props.width}%
         }
       `; 


export const Description = styled(Containar)`
         width: 60%;
         border: 1px solid black;
         background:white;
         justify-content: space-around;
       `;

export const IMAGE_BOX = styled(BOX)`

`;


export const PRODUCT_IMAGE = styled(IMAGE)`
         object-fit: cover;
         width: 100%;
       `;


export const BUTTON_CONTANIAR = styled(Containar)`
justify-content:space-around;    


`;

export const BUTTON_ADDTOCART = styled(BUTTON)`
         border: 1px solid black;
       `;

export const BUTTON_BYNOW = styled(BUTTON)`


  border: 1px solid black ;
`;