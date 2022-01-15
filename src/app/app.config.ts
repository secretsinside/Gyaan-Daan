export const CONFIG: any = {
    "mobileWidth": "700",
    "emailPattern": "^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$",
    "password": {
        "minLength": 8,
        "maxLength": 16
    }
}

export const CONSTANT: any = {
    "emailError": {
        "required": "Email cannot be blank.",
        "invalidPattern": "Enter email in valid format."
    },
    "passwordError": {
        "required": "Password cannot be blank.",
        "minLength": "Password should be atleast <x> characters long.",
        "maxLength": "Password should not exceed <x> characters.",
        "confirmPasswordNotMatching": "Passwords not matching."
    },
    "userTypeError": {
        "noselection": "Please select how want to login as."
    }
}

export const DATE_FORMATS = {
    parse: {
      dateInput: 'DD-MM-YYYY',
    },
    display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMMM YYYY',
    },
};