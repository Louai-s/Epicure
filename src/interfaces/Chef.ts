export interface Chef {
    PictureURL : string;
    name: string;
    Description: string;
    restaurants: [
        {
            resImgUrl: string;
            name: string;
        }
    ]
}

export const YossiShitrit:Chef = {
    PictureURL: "./assets/ChefOfTheWeekImg.svg",
    name: "Yossi Shitrit",
    Description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrits creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    restaurants: [{
            resImgUrl: './assets/OnzaPic.png',
            name: 'Onza',
          },],
};

export const chefOfTheWeek = 
    {   
        PictureURL:'./assets/ChefOfTheWeekImg.svg',
        name: 'Yossi Shitrit',
        Description: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrits creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.',
        restaurants: [
          {
            resImgUrl: './assets/OnzaPic.png',
            name: 'Onza',
          },
        {
            resImgUrl: './assets/KitchenMarket.svg',
            name: 'KitchenMarket', 
        },
        {
            resImgUrl: './assets/claro.svg',
            name: 'Claro', 
        },
        {
            resImgUrl: './assets/Yapan.svg',
            name: 'Lumina', 
        },
        {
            resImgUrl:'./assets/tigerlily.svg',
            name:'Locanda',
        }

    ]
    };
        
  