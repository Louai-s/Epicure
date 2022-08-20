
import styled from "styled-components";

interface Props{
  Mobile: boolean;
}
export const Container = styled.div` 
        background-color:#FAFAFA;
        width: 100%;
        height:  584px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-bottom:10%;
        padding-top:5%;`

export const TypeDiv = styled.div<Props>`
          width:${props => (props.Mobile? "100%": "13%")};
          height:33%; `

export const DishType = styled.p`
  font-family: Helvetica Neue;
  font-size:18px;
  font-weight:200;
  line-height: 33px;
  letter-spacing: 1.97px;
  
                            `

export const SpicyLogo = styled.img<Props>`
        width:${(props)=>props.Mobile? "25%" : "40%"};
        height:${(props)=>props.Mobile? "25%" : "40%"};
                    `
    SpicyLogo.defaultProps = {
    src: "./assets/Spicy.svg",
  };

  export const VegitarianLogo = styled.img<Props>`
        width:${(props)=>props.Mobile? "25%" : "40%"};
        height:${(props)=>props.Mobile? "25%" : "40%"};
    `
    VegitarianLogo.defaultProps = {
    src: "./assets/Vegitarian.svg",
  };

  export const VeganLogo = styled.img<Props>`
        width:${(props)=>props.Mobile? "25%" : "40%"};
        height:${(props)=>props.Mobile? "25%" : "40%"};
    `
    VeganLogo.defaultProps = {
    src: "./assets/Vegan.svg",
  };

export const DesktopIconsContainer = styled.div`
background-color:#FAFAFA;
width: 100%;
height: 200px;
align-items: center;
justify-content: space-around;
margin-bottom:10%;`

export const DesktopIcons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
