let name = "Mithun";
let email = "Mithun.s@pw.live";
let age = "26";

if (typeof name !== "string") {
    console.log(`Name should be a string,`);
} else if (typeof email !== "string") {
    console.log(`Email should be a string,`);
} else if (typeof age !== "number") {
    console.log( `Age should be a number.`);
} else {
    console.log(`Yeah !! all fields are proper`);
}
