import styled from "styled-components";

interface Props {
    underline: boolean;
}

interface PropsM {
    Mobile: boolean;
}
export const TitleR = styled.p `justify-content: start;
display: flex;
margin-left:7.5% ;
font-family: Helvetica Neue;
color: rgb(100, 100, 100);
font-size:larger`;

export const AllRestsBtn = styled.button
` background:none;
border:none;
margin:0;
width:100%;
height:10%;
cursor: pointer;
display: flex;
justify-content: start;
font-weight:bold;`

export const DesktopAllRestsBtn = styled.button`
background:none;
border:none;
margin-right:10%;
width:95%;
height:10%;
cursor: pointer;
display: flex;
justify-content: end;
font-weight:bold;
`
export const RestChefName = styled.p<PropsM>`
justify-content: ${(props) => props.Mobile ? "start" : "center"};
display: flex;
font-family: Helvetica Neue;
color: rgb(100, 100, 100);
font-size:medium;
margin-left: 7.5%;`

export const StatusSelector =styled.div<PropsM>`
display:flex;
justify-content: ${(props) => props.Mobile ? "space-between" : "space-around"};
margin-left : ${(props) => props.Mobile ? "5%" : "30%"};
margin-right:5%;
margin-bottom:5%;
width : ${(props) => props.Mobile ? "100%" : "50%"};
text-align: center;
`

export const RestaurantStatus = styled.button<Props>`
font-family:Helvetica Neue;
font-size:18px;
line-height: 22px;
background:none;
border:none;
margin:0;
width:fit-content;
height:10%;
cursor: pointer;
border-bottom: ${(props) => props.underline ? '1px solid #DE9200' : 'none'};
font-weight: ${(props)=> props.underline ? 400 : 200 };
`

export const HamburgerBtn = styled.button`background:none;
border:none;
margin:0;
width:fit content;
height:10%;
cursor: pointer;
display: flex;
justify-content: start;`

export const StarsImg = styled.img`
width : 216px;
`

export const DesktopRestauranDiv = styled.div`
width: 255px;
display: inline-block;
margin: 15px;
background-color: #F9F4EA;
//margin-bottom:10%;
//padding-bottom:5%;
//display:inline-block;
`

export const DesktopAllRestsContainer = styled.div`
justify-content: space-around;
margin: 0px;
`

export const FilterOptions = styled.div`
background-color:#FAFAFA;
display:flex;
justify-content:center;
height:60px;
margin-top:0px;
`

export const FilterOptionButton = styled.button`
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
            font-family: Helvetica Neue;
            line-height: 22px;
            margin-top: 2%;
`

export const DownArrow = styled.p`
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
margin-left : 10px;
margin-top: 7px;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
`

export const PriceRangeDiv = styled.div`
background-color: white;
display : inline-block;
height:20%;
width: 40%;
position : absolute;
top:200px;
left:150px;
`
export const BcPriceRange = styled.div`
background-color:#F9F4EA;
`

export const InputPriceRange = styled.input`
width:200px;
height:50px;
`
export const DistanceDiv = styled.div`
background-color: white;
display : inline-block;
height:20%;
width: 40%;
position : absolute;
top:200px;
left:300px;
`

export const RatingImg = styled.img`

`
export const RatingDiv = styled.div`
background-color: white;
display : inline-block;
height:36%;
width: 40%;
position : absolute;
top:200px;
left:430px;
`
export const CheckboxRating = styled.input`
margin-top:3%;
margin-right:4%;
width:18px;
height:18px;

`

export const RowDiv = styled.div`
display:flex;
justify-content:center;
`

export const MapImg = styled.img`
width:90%;
height:90%;
`

export const AllRestaurantsContainerMobile = styled.div`
width: 80%;
display:inline-block;
Justify-content:center;
`