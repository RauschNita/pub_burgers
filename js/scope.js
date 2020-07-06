var globalName = "Anita";

function something() {
     globalName = "Anya";
    console.log(globalName);
}

something();
console.log(globalName);

let name = "Anita";

{
    name = "Anya";
    console.log(name);
}
console.log(name);

const PET = "cat";

{
    const PET = "dog";
    console.log(PET);
}
console.log(PET);