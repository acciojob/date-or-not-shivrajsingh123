var isDate = function (input) {
    if (input instanceof Date && !isNaN(input)) return true; // Check if it's a valid Date object
    if (typeof input === "string" || typeof input === "number") {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime()); // Check if it can be parsed into a valid date
    }
    return false; // If it's not a valid date
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
