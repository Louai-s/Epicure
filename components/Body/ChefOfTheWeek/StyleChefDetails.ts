import styled from "styled-components";

interface Props {
  Mobile: boolean;
}
interface BackGroundProps {
  Background : string;
}

export const TitleC = styled.p<Props>`justify-content:${props => (props.Mobile ? "start" : "center" )} ;
display: flex;
margin-left:7.5%;
font-family: Helvetica Neue;
color: rgb(100, 100, 100);
font-size:18px;
font-weight: 400;
line-height: 35px;
letter-spacing: 2px;`


export const PicName = styled.div<BackGroundProps>`  
width:90% ;
height: 280px;
display: inline-block;
background-image: url(${props => props.Background});
background-size:cover;
background-position: 20% 10%;
display:inline-block;
justify-content:center;`


export const ChefName = styled.p` background-color: rgba(255, 255, 255, 0.8);
width: 100%;
position : absoulte;
display: inline-block;
//bottom:0;
margin-top: 230px;
padding-top:1%;
padding-bottom:3%;
font-family: Helvetica Neue;
font-weight: 400;
font-size: 18px;
line-height: 47px;
letter-spacing: 2.67px;`


export const ChefDescription = styled.p<Props>` margin-top: 0%;
margin-left: 7.5%;
margin-right: 7.5%;
font-family: Helvetica Neue;
font-size:18px;
font-weight: 200;
line-height: 28px;
letter-spacing: 1.25px;
text-align:left;
margin-bottom:10%;
width:${props => (props.Mobile ? "80%" : "50%" )};`

export const TitlePP = styled.p`
justify-content: start ;
display: flex;
margin-left:2% ;
font-family: Helvetica Neue;
color: rgb(100, 100, 100);
font-size:17px;
font-weight: 400;
line-height: 35px;
letter-spacing: 2px;`

export const CarouselDiv = styled.div` margin-left: 3%;
margin-right: 0%;
margin-bottom: 10%;
width:90%;`

export const RestaurantImg = styled.img`width:100%;
`

export const RestaurantDiv = styled.div<Props>`
width: ${props => (props.Mobile ? "95% !important" : "200px !important" )};
margin-left: 2%;
background-color: #F9F4EA;
margin-bottom:${props => (props.Mobile ? "10%" : "0%")};
padding-bottom:5%;`


export const RestaurantName = styled.p<Props>` 
  display: flex;
  justify-content:${props => (props.Mobile ? "start" : "center")};
  font-family: Helvetica Neue;
  color: rgb(100, 100, 100);
  font-size:${props => (props.Mobile ? "18px" : "24px")};
  margin-left: ${props => (props.Mobile ? "7.5%" : 0)};
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 2.67px;
  margin-top : ${props => (!props.Mobile ? "15px" : "5%")};`

export const DesktopChefDetails= styled.div`
display:flex;
justify-content:space-between;
`

export const DesktopPicNameDiv= styled.div`
width:37%;
`

export const RestsDiv = styled.div`
display:flex;
justify-content : start;
margin-bottom: 6%;
`

export const TitleDesktop = styled.p`
justify-content: center ;
display: flex;
margin-left:2% ;
font-family: Helvetica Neue;
color: rgb(100, 100, 100);
font-size:24px;
font-weight: 400;
line-height: 35px;
letter-spacing: 2px;
`

