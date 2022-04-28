import image1 from '../../assets/images/user1.jpg';
import image2 from '../../assets/images/user2.jpg';
import image3 from '../../assets/images/user3.jpg';
import image4 from '../../assets/images/user4.jpg';

export const types = ['All', 'Received', 'Sent', 'Failed'];

export const transactions = [
    {
        name: "Adeboye Usman",
        image: image1,
        type: "Received",
        amount: "200,000",
    },
    {
        name: "Mercy Popoola",
        image: image2,
        type: "Failed",
        amount: "110,000",
    },
    {
        name: "Onome Adetayo",
        image: image3,
        type: "Sent",
        amount: "10,000",
    },
    {
        name: "Kingsley Abiodun",
        image: image4,
        type: "Received",
        amount: "200,000",
    }
];