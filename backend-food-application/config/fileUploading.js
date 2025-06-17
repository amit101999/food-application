import { v2 as cloudinary } from 'cloudinary';
const multer = require('multer')


// Configuration
cloudinary.config({
  cloud_name: 'dqgfmfsc3',
  api_key: '526622998911477',
  api_secret: '' // Click 'View API Keys' above to copy your API secret
});

const uploadFile = async (fileName) => {

  try {
    const uploadResult = await cloudinary.uploader
      .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', { resource_type: 'auto' }
      )
    console.log('File uploaded to Cloudinary:', uploadResult.url);
  } catch (err) {
    console.error(err);
  }
}

const url = uploadFile();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
