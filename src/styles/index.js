import styled from "styled-components";

export const ClearFix = styled.div`
  ::after: content: "";
   clear: both;
   display: table;
`

// Styles for the About Section

export const AboutList = styled.div`
margin: 2% 0;
   display: flex;
   flex-direction: row;
   align-content: center;
   flex-wrap: wrap;
   justify-content: space-evenly;
   width: 45%;
    float: left;
   @media only screen and (max-width: 640px) {
      flex-direction: column;
   }
`

export const AboutItem = styled.div`
   width: 50%;
   justify-content: center;
   text-align: center;

   @media only screen and (max-width: 640px) {
      width: 90%;
   }

   h5 {
      font-size: 24px;
      @media only screen and (max-width: 768px) {
         font-size: 16px;
         }
      @media only screen and (max-width: 640px) {
         font-size: 18px;
      }
   }

   .list-icon {
   font-size: 60px;

   @media only screen and (max-width: 640px) {
      font-size: 40px;
   }
}
`

export const ColorBlock = styled.div`
    height: 200px;
    width: 50%;
    background-color: coral;
`

export const AboutMe = styled.div`
    float: right;
   padding: 2% 5% 5% 0;
   width: 40%
`