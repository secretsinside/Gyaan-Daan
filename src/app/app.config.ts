export const CONFIG: any = {
    "mobileWidth": "700",
    "emailPattern": "^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$",
    "password": {
        "minLength": 8,
        "maxLength": 16
    }
}

export const CONSTANT: any = {
    "student": {
        "DASHBOARD": "Dashboard",
        "PROFILE": "Profile",
        
    },
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
    },
    "subjects": {
        "Maths" : ["Trigonometry", "Calculus"],
        "English" : ["Grammar", "Literature"],
        "Science" : [""],
        "Physics" : ["Gravitation", "Laws of Motion"]
    },
    "classes": ["5", "6", "7", "8", "9", "10", "11", "12"],
    "newRequest" : {
        "success" : "Your request submitted successfully.",
        "error" : "There was problem while raising requet."
    },
    "days": {
        "Mon": "Monday",
        "Tues": "Tuesday",
        "Wed": "Wednesday",
        "Thu": "Thursday",
        "Fri": "Friday",
        "Sat": "Saturday",
        "Sun": "Sunday"
    },
    "logoutMessage": "Logged out successfully."
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