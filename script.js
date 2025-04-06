function isDate(input) {
  // Check if input is a Date object and valid
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If it's a string or number, try to parse it into a date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // Otherwise, it's not a valid date
  return false;
}
