// Custom error classes
class InvalidRegisterActionError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidRegisterActionError";
    }
}

class InvalidRegisterNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidRegisterNumberError";
    }
}

/**
 * Processes a car registration action and returns a descriptive message.
 *
 * @param {string} action - The action to perform. Must be one of 'add', 'pause', 'continue', or 'remove'.
 * @param {string} registerNumber - The car's register number in the format: 1-3 letters, a dash, then 1-3 digits (e.g., "ABC-123").
 * @throws {InvalidRegisterActionError} If the action is not a string or not supported.
 * @throws {InvalidRegisterNumberError} If the register number is not a valid string in the required format.
 * @returns {string} A message describing the result of the registration action.
 */
function processCarRegistrationAction(action, registerNumber) {
    // 1. Validate action
    const allowedActions = ["add", "pause", "continue", "remove"];

    if (typeof action !== "string" || !allowedActions.includes(action)) {
        throw new InvalidRegisterActionError(
            `Invalid action: ${action}. Allowed actions are: ${allowedActions.join(", ")}.`
        );
    }

    // 2. Validate register number
    // Format: 1–3 letters, dash, 1–3 digits, e.g. "ABC-123"
    const registerPattern = /^[A-Za-z]{1,3}-[0-9]{1,3}$/;

    if (typeof registerNumber !== "string" || !registerPattern.test(registerNumber)) {
        throw new InvalidRegisterNumberError(
            `Invalid register number: ${registerNumber}. Expected format like "ABC-123".`
        );
    }

    // 3. Build message
    let message = `Registration of the car with register number ${registerNumber}`;

    switch (action) {
        case "add":
            message += " has been added.";
            break;
        case "pause":
            message += " has been paused.";
            break;
        case "continue":
            message += " has resumed.";
            break;
        case "remove":
            message += " has been removed.";
            break;
    }

    return message;
}



try {
    // Valid calls
    console.log(processCarRegistrationAction("add", "ABC-123"));
    console.log(processCarRegistrationAction("pause", "X-9"));

    // This will trigger InvalidRegisterActionError
    console.log(processCarRegistrationAction("invalid", "ABC-123"));

    // This will trigger InvalidRegisterNumberError
    console.log(processCarRegistrationAction("add", "123-ABC"));
}
catch (error) {
    if (error instanceof InvalidRegisterActionError) {
        console.error("Action error:", error.message);
    } else if (error instanceof InvalidRegisterNumberError) {
        console.error("Register number error:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}
