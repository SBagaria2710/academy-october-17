let zoo = {
  name: "Amazing Zoo",
  location: "Melbourne, Australia",
  animals: [
    {
      species: "Lion",
      foodPreference: "Meat",
    },
    {
      species: "Panda",
      foodPreference: "Leaf",
    },
  ],
};

// Shallow Copy
let shallowCopyZoo = { ...zoo };
// shallowCopyZoo.location = "Kerela, India";
// shallowCopyZoo.animals[1].foodPreference = "Fruits";

// console.log(zoo);
// console.log(shallowCopyZoo);

// Deep Copy
const zooString = JSON.stringify(zoo); // Serialise the object into a a JSON String
let deepCopyZoo = JSON.parse(zooString); // De-Serialise the JSON string to a new object

deepCopyZoo.location = "Kerela, India";
deepCopyZoo.animals[1].foodPreference = "Fruits";

console.log("ORIGINAL", zoo);
console.log("COPY", deepCopyZoo);
