import styled from 'styled-components'


export const Ham = styled.div` width: 35px;
height: 5px;
background-color: black;
margin: 6px 0; ` 

export const HeaderD = styled.div` padding-top: 1%;
padding-bottom: 1%;
display: flex;
justify-content: center;
justify-content: space-between;
margin-bottom: 0px; `

export const RightGroup = styled.div` display: flex; margin-left:30px ` 

export const LogoH = styled.img`margin-left: 80px ;
                                width: 45px;
                                height: 45px;`
    LogoH.defaultProps = {
    src: './assets/EpicureLogo.png',
  };

export const BagL = styled.img`width: 30px;
                                height: 30px;
                                margin-right: 10px;`
BagL.defaultProps = {
    src: './assets/BagLogo.svg',
  };

export const LoginL = styled.img`width: 30px;
                                height: 30px;
                                margin-right: 10px;
                                `
LoginL.defaultProps = {
    src: './assets/LoginLogo.png',
  };

export const SearchL = styled.img`width: 30px;
                                height: 30px;
                                margin-right: 10px;`
SearchL.defaultProps = {
    src: './assets/SearchImg.svg',
  };

  export const BigDivHam = styled.div`
    display : inline-block;
   height:50%;
   width: 100%;
   position : absolute;
   background-color:white;
   left:0;
   top:0;
   `
   export const HeaderHamOpened = styled.div` padding: 2%;
padding: 2%;
display: flex;
justify-content: center;
justify-content: space-between;
margin-bottom: 30px; `

export const Line = styled.hr`
border: 1px solid #F2F2F2;
width:240%;
`

export const PopupDiv = styled.div`
      display : inline-block;
      height:27%;
      width: 100%;
      position : absolute;
      background-color:white;
      left:0;
      margin-top:13%;
`;

export const PopupContent = styled.div` position:relative;
                                        background-color:rgba(0,0,0,0.5);
                                        width:50%;
                                        background-color:#FFF;
                                        margin-left:25%;
                                        margin-top:20%;`;

export const BagPic = styled.img`width:55px; height:55px `

export const EmptyBagText = styled.p` font-size : 16px;
font-family: Helvetica Neue;
line-height: 20px;`

export const SearchHeader = styled.div`display:flex;
flex-direction:row;
left:0;`

export const Ximg = styled.img`
float:left; 
margin-left:5%;
`;

export const SearchWordHeader = styled.p`
margin-left:30%;
font-size:18px;
font-family: Helvetica Neue;
font-weight: 200;
`

export const HamDiv = styled.div`
width:20%`

export const LeftDesktopDiv = styled.div`
display:flex;
justify-content: start;
`

export const RightDesktopDiv = styled.div`
display: flex; 
justify-content:right;
margin-right:50px;
margin-top:1%;
`

export const EpicureWordHeader = styled.p`
height:fit-content;
width:fit-content;
background:none;
            border:none;
            margin-left: 2%;
            margin-right:0px;
            height:40%;
            cursor: pointer;
            display: flex;
            justify-content: start;
            Font-size:27px;
            color:rgb(100, 100, 100);
            font-family:Helvetica Neue;
            line-height: 22px;
            font-weight: 300;
            margin-top:3.5%;
            `
interface Props{
  underline : boolean;
}
export const RestaurantWordHeader = styled.button<Props>`
background:none;
            border:none;
            margin-left:5%;
            margin-right:0px;
            //width:fit-content;
            height:40%;
            cursor: pointer;
            display: flex;
            justify-content: start;
            Font-size:18px;
            color:rgb(100, 100, 100);
            font-family:Helvetica Neue;
            line-height: 22px;
            font-weight: ${(props) => props.underline ? 400:200};
            margin-top:3.5%;
            border-bottom: ${(props) => props.underline ? '1px solid #DE9200' : 'none'};
`