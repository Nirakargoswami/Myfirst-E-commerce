
   import styled, { css } from "styled-components";
  

  import { BOX, Containar } from "../newcomonent";



  export   const HEADER_LOGOBOX = styled(BOX)`
             
              @media (min-width: 700px) {
               width: 20%;
             }
           `;

 export const HEADER_SEARCHBOX = styled(Containar)`
 
        display:none;
          @media (min-width: 700px) {
            width: 50%;
            display: block;
            margin: 0em 2em 0 1em ;
          }
        `;

 export const HEADER_LINKS = styled(BOX)`
          background-color: rgba(1, 75, 76, 1);
          
          @media (min-width: 700px) {
            width: 30%;
          }
        `;


export const HEADER = styled(Containar)`
         background-color: rgba(1, 75, 76, 1);
         position: sticky;
         top: 0px;

         @media (min-width: 700px) {
           flex-direction: row;
           justify-content: space-around;
           width: 100%;
         }
       `;
