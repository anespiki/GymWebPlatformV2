username = "admin";
password = "admin";
fullName = "Admin";
email = "admin@citygym.com";

//Making User object 
user = [
    {
        'name': fullName,
        'username': username,
        'email': email,
        'height': '175cm',
        'weight': '75kg'
    }
];



//Method to login user 
exports.login = async (req, res) => {

    const { inputedUsername, inputedPassword } = req.body;

    if (inputedUsername == null && inputedPassword == null) {
        console.error("Input password and input username is missing!");
    }


    try {
        if (inputedUsername === username && inputedPassword === password) {
            console.log("Credentials are right");
            return res.status(200).json({ message: "success" });
        } else {
            return res.status(200).json({ message: "fail" });
        }
    }
    catch (e) {
        console.error("There was errror login user in: " + e);
    }
}

//Register user using following informations: Full name, Email, Username, Password.

exports.registerUser = async (req, res) => {
    const { inputedFullName, inputedEmail, inputedUsername, inputedPassword } = req.body;
    try {
        //Updating user object
        user = [
            {
                'name': inputedFullName,
                'username': inputedUsername,
                'email': inputedEmail,
                'height': '175cm',
                'weight': '75kg'
            }
        ];

        //Updating username and password
        username = inputedUsername
        password = inputedPassword;
        res.status(200).json({
            message: "success"
        });
    }
    catch (e) {
        res.status(400).json({
            message: "fail"
        });
    }

}



//Method to get info about user
exports.returnUser = async (req, res) => {
    try {
        res.status(200).json({
            'user': user
        });
    } catch (e) {
        console.error("There was error while returning infomrations about user" + e);
    }
}

