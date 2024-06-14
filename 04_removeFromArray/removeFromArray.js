const removeFromArray = function (array, ...args) {
  const newArray = [];

  array.forEach((stuff) => {
    if (!args.includes(stuff)) {
      newArray.push(stuff);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
