import styled from "styled-components";

export const SignatureLogo = styled.img<Props>`
            width: ${(props)=>props.Mobile? "20%" : "15%"};
            height: ${(props)=>props.Mobile? "20%" : "15%"};
            margin-bottom:${(props)=>props.Mobile? "10%" : "0px"};
            margin-top: ${(props)=>props.Mobile? "10%" : "19%"};
            margin-left: 5%;
                                    `

interface Props{
    Mobile : boolean;
}

export const PriceP = styled.p<Props>` 
        justify-content: ${(props)=>props.Mobile? "start" : "center"};
        display: flex;
        font-family: Helvetica Neue;
        color: rgb(100, 100, 100);
        font-size:16px;
        font-weight:400;
        margin-left: 7.5%;
        line-height: 19px;
        letter-spacing: 1.97px;
        bottom:0px;
        margin-top : ${(props)=>props.Mobile? "0px" : "40%"};
            `

export const DishDescription =  styled.p`
            text-align : left;
            font-family: Helvetica Neue;
            color: rgb(100, 100, 100);
            font-size:16px;
            font-weight: 200;
            margin-left: 7.5%;
            letter-spacing: 1.97px;
            line-height: 20px;
            `
export const DesktopDishesContainer = styled.div`
display: flex;
justify-content: center;
margin-right:20px;
`
export const PopularResDiv =styled.div`
width:90%;
display:inline-block;
`

export const DesktopRestaurantDiv = styled.div`
background-color: #F9F4EA;
// width: 360px;
// height: 450px;
margin-bottom : 5%;
margin-left : 3%;
`