import { Claro, KitchenMarket, Locanda, Lumina, Onza, Restaurant } from "./Restaurant";

export interface Chef {
    PictureURL : string;
    name: string;
    chefStatus:string[];
    Description: string;
    restaurants:Restaurant[];
}
        

export const AsafGranit:Chef = {
    PictureURL: "./assets/AsafGranit.svg",
    name: "Asaf Granit",
    chefStatus: ["All","Most Viewed","New"],
    Description: "",
    restaurants: [],  
};

export const AvivMoshe:Chef = {
    PictureURL: "./assets/AvivMoshe.svg",
    name: "Aviv Moshe",
    chefStatus: ["All","Most Viewed","New"],
    Description: "",
    restaurants: [],  
};

export const EyalShani:Chef = {
    PictureURL: "./assets/EyalShani.svg",
    name: "Eyal Shani",
    chefStatus: ["All","Most Viewed","New"],
    Description: "",
    restaurants: [],  
};

export const MeirAdoni:Chef = {
    PictureURL: "./assets/MeirAdoni.svg",
    name: "Meir Adoni",
    chefStatus: ["All","New"],
    Description: "",
    restaurants: [],  
};

export const OmerMiller:Chef = {
    PictureURL: "./assets/OmerMiller.svg",
    name: "Omer Miller",
    chefStatus: ["All","New"],
    Description: "",
    restaurants: [],  
};

export const ShahafShabtay:Chef = {
    PictureURL: "./assets/ShahafShabtay.svg",
    name: "Shahaf Shabtay",
    chefStatus: ["All","New"],
    Description: "",
    restaurants: [],  
};

export const NitzanRaz:Chef = {
    PictureURL: "./assets/NitzanRaz.svg",
    name: "Nitzan Raz",
    chefStatus: ["All"],
    Description: "",
    restaurants: [],  
};

export const YossiShitrit:Chef = {
    PictureURL: "./assets/ChefOfTheWeekImg.svg",
    name: "Yossi Shitrit",
    chefStatus: ["All"],
    Description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrits creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    restaurants: [Onza, KitchenMarket, Claro, Lumina, Locanda],  
};

export const YuvalBenNeriah:Chef = {
    PictureURL: "./assets/YuvalBenNeriah.svg",
    name: "Yuval Ben Neriah",
    chefStatus: ["All"],
    Description: "",
    restaurants: [],  
};

export const allChefs:Chef[]= [AsafGranit,AvivMoshe,EyalShani,MeirAdoni,
                            OmerMiller,ShahafShabtay,NitzanRaz,YossiShitrit,YuvalBenNeriah];
export const chefOfTheWeek:Chef = YossiShitrit;
        
  