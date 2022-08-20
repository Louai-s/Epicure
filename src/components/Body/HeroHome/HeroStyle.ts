import styled from "styled-components";

export const HeroContent = styled.div`
    background-image: url("./assets/hero-picture.svg");
    background-size:cover;
    width: 69.5%;
    height: 100%;
    padding: 15%;
    margin-bottom:7%;
    `

export const Herotext =  styled.p`
            color: black;
            font-family: Helvetica Neue;
            font-weight: 200;
            font-size: 24px;
            line-height: 30px;
            display : inline-block;
            justify-content : center;
            width:100%;
            ;
                                    `

export const SearchDiv = styled.div`margin-top: 5%;
padding-bottom:5%;`

export const SearchBar = styled.input`
                                width: 75%;
                                height:30px;
                                background-color: transparent;
                                border-width :0.5px;
                                border-radius: 4px;
                                border-color:black;
                                ::placeholder {
                                    color:rgba(100,100,100);
                                }
                                `;
export const ContentAndSearchDiv = styled.div `
background-color: rgba(255, 255, 255, 0.8);
width:90%;
padding :5% 5% 5% 5%;
display:inline-block;
justify-content:center;
`