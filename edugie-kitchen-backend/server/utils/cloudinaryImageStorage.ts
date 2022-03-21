const cloudinaryImage = require('cloudinary');

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

try {
  cloudinaryImage.config({
    cloud_name: process.env.CLOUDINARY_NAME_1,
    api_key: process.env.CLOUDINARY_API_KEY_1,
    api_secret: process.env.CLOUDINARY_SECRET_1,
  });
  console.log("this is cloudinary",process.env.CLOUDINARY_NAME_1, process.env.CLOUDINARY_API_KEY_1, process.env.CLOUDINARY_SECRET_1)
} catch (error: any) {
  console.error(error.message);
}

export default cloudinaryImage;

