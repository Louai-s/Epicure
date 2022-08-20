import styled from "styled-components";

export const EpicureImg = styled.img`width: 20%;
    height: 20%;
    margin-left:5%;
    margin-bottom: 5%;
   `
EpicureImg.defaultProps = {
    src: './assets/EpicureLogo.png',
  };

export const Appleimg = styled.img` width: 150%;
height: 100%;`
Appleimg.defaultProps = {
    src: "./assets/AppleLogo.svg",
  };

export const Googleimg = styled.img` width: 150%;
height: 100%;
margin-top: 0%;
margin-bottom:5%;

`
Googleimg.defaultProps = {
    src: "./assets/GooglePlaylogo.svg",
  };

export const Button = styled.button`
          width: 130px;
          height: 50px;
          padding-top:0%;
          background-color: transparent;
          border-color: transparent;
`

export const Contentd = styled.div`
          margin-left: 4%;
          font-size:18px;
          font-family: Helvetica Neue;
          width:78%;
          font-weight: 200;
          line-height: 28px;
          letter-spacing: 2.14px;
          `

export const AboutUsContainer = styled.div` background-color: #FAFAFA;
margin-bottom: 5%;
padding-bottom: 7%;
padding-top: 5%;
margin-left:0 ;
text-align: left;`

export const GoogleAndAppleDesktop = styled.div`
display:flex;
`

export const LeftSideDesktop = styled.div`
text-align: left;
width: 70%;
margin-left : 10%;
`
export const AllComponentsDesktop = styled.div`
display:flex;
justify-content:space-between;
background-color:#FAFAFA;
margin-bottom:2%;
padding-bottom:3%;
`

export const EpicureImgDivDesktop = styled.div`
width:70%;
position:relative;
top:174px; 
`