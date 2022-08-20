import { Dish, PadKiMao, RedFarm, TaMaLaKo, VeganD } from "./Dish";

export interface Restaurant{
    PictureURL : string;
    name: string;
    ChefName: string;
    Status:string[];
    dishes:Dish[];
    stars : string;
}

export const Claro:Restaurant = {
    PictureURL: "./assets/claro.svg",
    name: "Claro",
    ChefName: "Ran Shmueli",
    Status: ["All", "Open now"],
    dishes: [PadKiMao,RedFarm,VeganD],
    stars: "./assets/4Stars.svg"
}
export const KabKem:Restaurant = {
    PictureURL: "./assets/Kabkem.svg",
    name: "Kab Kem",
    ChefName: "Yariv Malili",
    Status: ["All", "New"],
    dishes: [PadKiMao,RedFarm,TaMaLaKo,VeganD],
    stars: "./assets/3Stars.svg"
}
export const Messa:Restaurant = {
    PictureURL: "./assets/Messa.svg",
    name: "Messa",
    ChefName: "Aviv Moshe",
    Status: ["All", "Most Popular", "New"],
    dishes: [TaMaLaKo,VeganD],
    stars: "./assets/4Stars.svg"
}

export const NitanThai:Restaurant = {
    PictureURL: "./assets/nithan-thai.svg",
    name: "Nitan Thai",
    ChefName: "Shahaf Shabtay",
    Status: ["All", "Open now"],
    dishes: [RedFarm,TaMaLaKo,VeganD],
    stars: "./assets/1Star.svg"
}

export const TigerLilly:Restaurant = {
    PictureURL: "./assets/tiger-lily.svg",
    name: "Tiger Lilly",
    ChefName: "Yanir Green",
    Status: ["All", "Open now"],
    dishes: [PadKiMao,RedFarm],
    stars: "./assets/3Stars.svg"
}
export const YaPan:Restaurant = {
    PictureURL: "./assets/Yapan.svg",
    name: "Ya Pan",
    ChefName: "Yuval Ben Moshe",
    Status: ["All", "Closed"],
    dishes: [RedFarm],
    stars: "./assets/2Stars.svg"
}
export const Avra:Restaurant = {
    PictureURL: "./assets/Avra.svg",
    name: "Avra",
    ChefName: "Alessandro Gomez",
    Status: ["All", "Open now", "Most Popular"],
    dishes: [VeganD],
    stars: "./assets/4Stars.svg"
}

export const Lumina:Restaurant = {
    PictureURL: './assets/Yapan.svg',
    name: "Lumina",
    ChefName: "Yossi Shitrit",
    Status: ["All", "Most Popular"],
    dishes: [VeganD,PadKiMao,RedFarm],
    stars: "./assets/4Stars.svg"
}



export const Allrestaurants:Restaurant[] = [Claro
    ,KabKem,Messa,NitanThai,
    TigerLilly,YaPan,Avra];