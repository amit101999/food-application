// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require('cloudinary').v2;
const multer = require('multer')
const fs = require('fs');


// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadFile = async (fileName) => {

  try {
    const uploadResult = await cloudinary.uploader
      .upload(fileName, { resource_type: 'auto' }
      )
    console.log('File uploaded to Cloudinary:', uploadResult.url);
  } catch (err) {
    fs.unlinkSync(fileName); // Delete the file if upload fails
    console.error(err);
  }
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

module.exports = { uploadFile };

