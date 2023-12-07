let hobbies = ["sports","cooking", 25, true, {name: "baking"}, ["readings","traveling"]]

for (let hobby of hobbies) {
    console.log(hobby);
};

for (let hobby in hobbies) {
    console.log(hobbies[hobby]);
};

let hobbierArray = ["sports","cooking","painting"];
let hobbiesSubset = hobbierArray.slice(1,3);
let fillteredHobbies = hobbierArray.filter((val) => val !== "sports");
console.log(fillteredHobbies);

let updatedHobbies = hobbierArray.map((val) => "hobby: "+val);
console.log(updatedHobbies);