const express = require("express");
const app = express();

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
                          finallyThis: "This is the real ends"
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
                ]
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
