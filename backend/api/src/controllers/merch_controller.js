//Dummy data for merch 
const merch = [
    {
        'pathToImage': '/image1.jpg',
        'title': 'Classic Gym Shirt',
        'price': '25'
    },
    {
        'pathToImage': '/image2.jpg',
        'title': 'Performance T-Shirt',
        'price': '30'
    },
    {
        'pathToImage': '/image3.jpg',
        'title': 'Premium T-Shirt',
        'price': '50'
    },
];


//Method to return list of merch images and titles with price included
exports.returnMerch = async (req, res) => {
    try {

        res.status(200).json({
            "merchList": merch
        });

    }
    catch (e) {
        console.error("There was error while returning Memberships" + e);
    }
}