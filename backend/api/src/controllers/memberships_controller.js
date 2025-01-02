let currentMembership = []


//Dummy data of memberships 

const memberships = [
    {
        'title': 'Basic Membership',
        'explanation': 'Access to gym equipment during off-peak hours. Perfect for those who want to work out in a quieter environment.',
        'price': '20'
    },
    {
        'title': 'Standard Membership',
        'explanation': 'Access to gym equipment and group fitness classes. Ideal for those who want a bit more variety in their workouts.',
        'price': '40'
    },
    {
        'title': 'Premium Membership',
        'explanation': 'Unlimited access to all gym facilities, classes, and personal training sessions. For those who want the full experience.',
        'price': '80'
    },
];


//Method to return list of memberships
exports.returnMemberships = async (req, res) => {
    try {

        res.status(200).json({
            "memberships": memberships
        });

    }
    catch (e) {
        console.error("There was error while returning Memberships" + e);
    }
}

exports.addMembership = async (req, res) => {
    //Recieving from frontent  membership that user added

    try {
        const { membership } = req.body;

        // Adding the selected membership to currentMembership
        currentMembership = membership;
        res.status(200).json({
            message: "success",
        });
    }
    catch (e) {


        console.error("Error while adding membership: ", e);
        res.status(400).json({
            message: "fail"
        });



    }

}

//Method to return user membership
exports.returnUserMembership = async (req, res) => {
    try {
        res.status(200).json({
            "userMembership": currentMembership
        });
    }
    catch (e) {
        console.error("There was error while returning Memberships" + e);
    }
}
exports.cancelMembership = async (req, res) => {
    try {

        currentMembership = null;
        res.status(200).json({
            "userMembership": currentMembership
        });
    }
    catch (e) {
        console.error("There was error while returning Memberships" + e);
    }
}