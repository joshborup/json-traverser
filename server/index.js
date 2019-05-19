const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get("/api/test", (req, res, next) => {
  res.status(200).send({
    cool: "josh is cool",
    deep: {
      goingDeep: [
        {
          inGoingDeep: [
            {
              deepest: ["deepest", "josh", "code"],
              funTimes: {
                inFunkyTown: [
                  "soo cool",
                  {
                    end: "youve reached the first end",
                    inFunkyTown2: [
                      "soo cool",
                      {
                        end2: "youve reached the second end",
                        keepGoing: {
                          coolio: "coolio",
                          finallyThis: "This is the real ends",
                          goingDeerpest: {
                            cards: [
                              {
                                id: "dp6-90",
                                name: "Cubone",
                                nationalPokedexNumber: 104,
                                imageUrl:
                                  "https://images.pokemontcg.io/dp6/90.png",
                                imageUrlHiRes:
                                  "https://images.pokemontcg.io/dp6/90_hires.png"
                              },
                              {
                                id: "ex14-85",
                                name: "Windstorm",
                                imageUrl:
                                  "https://images.pokemontcg.io/ex14/85.png",
                                imageUrlHiRes:
                                  "https://images.pokemontcg.io/ex14/85_hires.png"
                              },
                              {
                                id: "pop9-17",
                                name: "Turtwig",
                                nationalPokedexNumber: 387,
                                imageUrl:
                                  "https://images.pokemontcg.io/pop9/17.png",
                                imageUrlHiRes:
                                  "https://images.pokemontcg.io/pop9/17_hires.png"
                              }
                            ],
                            coolerCards: [
                              {
                                id: "xy7-4",
                                name: "Bellossom",
                                nationalPokedexNumber: 182,
                                imageUrl:
                                  "https://images.pokemontcg.io/xy7/4.png",
                                imageUrlHiRes:
                                  "https://images.pokemontcg.io/xy7/4_hires.png"
                              },
                              {
                                id: "ex8-100",
                                name: "Hariyama ex",
                                nationalPokedexNumber: 297,
                                imageUrl:
                                  "https://images.pokemontcg.io/ex8/100.png",
                                imageUrlHiRes:
                                  "https://images.pokemontcg.io/ex8/100_hires.png"
                              },
                              {
                                id: "xyp-XY05",
                                name: "Xerneas",
                                nationalPokedexNumber: 716,
                                imageUrl:
                                  "https://images.pokemontcg.io/xyp/XY05.png",
                                imageUrlHiRes:
                                  "https://images.pokemontcg.io/xyp/XY05_hires.png"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          games: [{ name: "zelda" }, { name: "bomberman" }],
          createdBefore: "9-3-22",
          myFunkyFunk: {
            hehe: {
              sup: {
                superMarioCharacters: [
                  {
                    name: "yoshi",
                    age: 55,
                    url:
                      "https://www.mariowiki.com/images/thumb/4/4d/Yoshi_-_Mario_Party_10.png/400px-Yoshi_-_Mario_Party_10.png"
                  },
                  {
                    name: "mario",
                    age: 35,
                    url:
                      "https://stickershop.line-scdn.net/stickershop/v1/product/9350/LINEStorePC/main.png;compress=true"
                  },
                  {
                    name: "peach",
                    age: 545,
                    url:
                      "https://i5.walmartimages.com/asr/0dc86657-15ba-4dc6-8009-8b537e5cd087_1.5c1da05c8094655b919cf049a3b16a7f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                  }
                ],
                goingDeerpest: {
                  cards: [
                    {
                      id: "dp6-90",
                      name: "Cubone",
                      nationalPokedexNumber: 104,
                      imageUrl: "https://images.pokemontcg.io/dp6/90.pngt",
                      imageUrlHiRes:
                        "https://images.pokemontcg.io/dp6/90_hires.pngt"
                    },
                    {
                      id: "ex14-85",
                      name: "Windstorm",
                      imageUrl: "https://images.pokemontcg.io/ex14/85.pngt",
                      imageUrlHiRes:
                        "https://images.pokemontcg.io/ex14/85_hires.pngt"
                    },
                    {
                      id: "pop9-17",
                      name: "Turtwig",
                      nationalPokedexNumber: 387,
                      imageUrl: "https://images.pokemontcg.io/pop9/17.pngt",
                      imageUrlHiRes:
                        "https://images.pokemontcg.io/pop9/17_hires.pngt"
                    }
                  ],
                  coolerCards: [
                    {
                      id: "xy7-4",
                      name: "Bellossom",
                      nationalPokedexNumber: 182,
                      imageUrl: "https://images.pokemontcg.io/xy7/4.pngt",
                      imageUrlHiRes:
                        "https://images.pokemontcg.io/xy7/4_hires.pngt"
                    },
                    {
                      id: "ex8-100",
                      name: "Hariyama ex",
                      nationalPokedexNumber: 297,
                      imageUrl: "https://images.pokemontcg.io/ex8/100.pngt",
                      imageUrlHiRes:
                        "https://images.pokemontcg.io/ex8/100_hires.pngt"
                    },
                    {
                      id: "xyp-XY05",
                      name: "Xerneas",
                      nationalPokedexNumber: 716,
                      imageUrl: "https://images.pokemontcg.io/xyp/XY05.pngt",
                      imageUrlHiRes:
                        "https://images.pokemontcg.io/xyp/XY05_hires.pngt"
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      inDeep: "hit deep",
      deeper: {
        inDeeper: "hit inDeeper"
      }
    }
  });
});

app.get("/api/test2", (req, res, next) => {
  res.status(200).send("cool");
});

app.listen(4000, () => console.log("up and running on port 4000"));
