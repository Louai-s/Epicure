export interface Dish {
    PictureURL : string;
    name: string;
    Description: string;
    SignatureIcon:string;
    Price : number;
}

export const PadKiMao:Dish = {
    PictureURL: "./assets/claro.svg",
    name: "Pad Ki Mao",
    Description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    SignatureIcon: "./assets/Spicy.svg",
    Price: 88
}

export const TaMaLaKo:Dish = {
    PictureURL: "./assets/tamalako.svg",
    name: "Ta Ma La Ko",
    Description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    SignatureIcon: "./assets/Spicy.svg",
    Price: 65
}

export const RedFarm:Dish = {
    PictureURL: "./assets/RedFarm.svg",
    name: "Red Farm",
    Description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    SignatureIcon: "./assets/Vegitarian.svg",
    Price: 65
}
export const VeganD:Dish = {
    PictureURL: "./assets/KabKem.svg",
    name: "Vegan D",
    Description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    SignatureIcon: "./assets/Vegan.svg",
    Price: 65
}

export const Dishes = [PadKiMao,RedFarm,TaMaLaKo,VeganD];