export function iterator(obj, prop, setter, recurse) {
  for (let key in obj) {
    if (
      (prop && key === prop) ||
      (Array.isArray(obj[key]) && prop === key) ||
      (typeof obj[key] === "object" && prop === key) ||
      !prop
    ) {
      if (prop) {
        // console.log("1", obj);
        return setter(obj[key]);
      } else {
        // console.log("2", obj);
        return setter(obj);
      }
    } else {
      if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
        for (let propertName in obj[key]) {
          if (propertName === prop && typeof obj[key] !== "string") {
            // console.log("3", obj);
            setter(obj[key][propertName]);
          } else {
            // console.log("4", obj);
            iterator(obj[key][propertName], prop, setter, recurse);
          }
        }
      }
    }
  }
}
