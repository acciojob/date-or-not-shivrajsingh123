var isDate = function (input) {
    if (input instanceof Date && !isNaN(input.getTime())) return true; // Check if it's a valid Date object
    if (typeof input === "string") {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime()); // Check if string can be parsed into a valid date
    }
    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input)); // Directly passing input as per your request
