const Person = require("./model/model");

const filterAndMapNames = async () => {
  const males = await Person.find({ gender: { $ne: "female" } }, "name");
  console.log(males.map((person) => person.name));
};
filterAndMapNames();
