const arr = [1, 2, 99, 56, "Mithun", 1234, "PW"]

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        console.log(`Found first String : ${arr[i]}`);
        break;
    }
}