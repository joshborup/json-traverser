import { iterator } from "./utils";
import testData from "./testData.json";

function testSetter(data) {
  return data;
}
// function iterator(obj, prop, setter, recurse)

test("iteration function to find correct property", () => {
  expect(iterator(testData, "coolerCards", testSetter, iterator)).toEqual(
    testData.coolerCards
  );

  //   expect(iterator(testData, "coolerCards", testSetter, iterator)).not.toEqual(
  //     testData.cards
  //   );

  expect(iterator(testData, "cards", testSetter, iterator)).toEqual(
    testData.cards
  );

  //   expect(iterator(testData, "cards", testSetter, iterator)).not.toEqual(
  //     testData.coolerCards
  //   );

  //   expect(iterator(testData, "coolerCards", testSetter, iterator)).not.toEqual(
  //     testData
  //   );
  //   expect(iterator(testData, "cards", testSetter, iterator)).not.toEqual(
  //     testData
  //   );

  //   expect(iterator(testData, "", testSetter, iterator)).toEqual(testData);
  //   console.log(
  //     iterator(
  //       { coolerCards: testData.coolerCards },
  //       "cool",
  //       testSetter,
  //       iterator
  //     )
  //   );
  //   console.log(testData.coolerCards);

  //   expect(iterator(testData.coolerCards, "imageUrl", testSetter, iterator)).toBe(
  //     "https://images.pokemontcg.io/xyp/XY05_hires.png"
  //   );
});
