// Type: TypeScript file

const cardData = [
    {
      id: 1,
      src: '/img/kobe.jpg',
      title: "Kobe Bryant",
      description: "Kobe Bryant was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA).",
      onShare: () => console.log("Shared Kobe Bryant!"),
      onLearnMore: () => console.log("Learn more about Kobe Bryant!"),
    },
    {
        id: 2,
        src: '/img/james.webp',
        title: "LeBron James",
        description: "LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA).",
        onShare: () => console.log("Shared LeBron James!"),
        onLearnMore: () => console.log("Learn more about LeBron James!"),
        },

    {
        id: 3,
        src:'/img/mj.jpg',
        title: "Michael Jordan",
        description: "Michael Jeffrey Jordan, also known by his initials MJ, is an American former professional basketball player and businessman. He is the principal owner and chairman of the Charlotte Hornets of the National Basketball Association (NBA) and of 23XI Racing in the NASCAR Cup Series.",
        onShare: () => console.log("Shared Michael Jordan!"),
        onLearnMore: () => console.log("Learn more about Michael Jordan!"),
        
    },


    ];

export default cardData;