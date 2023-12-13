let TypeOfPackage = "overnight"

switch (TypeOfPackage) {
    case 'standard':
            console.log("Your delivery might take 3-5 days");
        break;
    case 'express':
            console.log("Your delivery will take 1-2 days");
        break;
    case 'overnight':
        console.log("Your delivery would be delivered the next day");
        break;

    default: console.log("Invalid package type!!");
        break;
}