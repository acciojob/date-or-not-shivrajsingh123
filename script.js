var isDate = function (input) {
    if (input instanceof Date && !isNaN(input)) return true; // If it's a Date object
    if (typeof input === "string") {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime()); // If string can be converted to a valid date
    }
    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
