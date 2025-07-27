// Write logic to get unique objects from the below array:
// [{name:"sai"},{name:"Nang"},{name:"sai"},{name:"Nang"},{name:"111111"}]
// Expected Output: [{name:"sai"},{name:"Nang"},{name:"111111"}]

//checking on specific property like name
function checkUnique(input) {
  const seen = new Set();
  const unique = input.filter((elem) => {
    if (seen.has(elem.name)) return false;
    seen.add(elem.name);
    return true;
  });
  return unique;
}

// checking the whole object

function checkUnique(input) {
  const seen = new Set();
  const unique = input.filter((elem) => {
    const str = JSON.stringify(elem);
    if (seen.has(str)) return false;
    seen.add(str);
    return true;
  });
  return unique;
}

const input = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

console.log(checkUnique(input));
