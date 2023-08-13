const validation = (userData) => {
    const errors = {};

    if (!/\b[\w.-]+@[\w.-]+.\w{2,4}\b/gi.test(userData.email)) {
        errors.email = "Email entered is not valid";
    }
    if (!userData.email) {
        errors.email = "Please enter a valid email";
    }
    if (userData.email.length > 35) {
        errors.email = "Email should not be longer than 35 characters";
    }

    if (!/\d/.test(userData.password)) {
        errors.password = "Password needs to have at least one digit";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Password needs to have between 6 to 10 characters";
    }

    return errors;
};

export default validation;