export {};

function tidyUpString(str:string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str:string[]) {
  var newArr:any = [];
  for (var i = 0; i < str.length; i++) {
    let name = (tidyUpString(str[i])); 
    newArr.push(name[0].toUpperCase() + name.slice(1));
  }
  return newArr;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
