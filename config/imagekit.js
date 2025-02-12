import dotenv from "dotenv"
import ImageKit from 'imagekit';

dotenv.config({ 
    path:'./.env', 
})

const imagekit = new ImageKit({
    publicKey: process.env.YOUR_PUBLIC_API_KEY,
    privateKey: process.env.YOUR_PRIVATE_API_KEY,
    urlEndpoint: 'https://ik.imagekit.io/Sarthak28',
});


export default imagekit