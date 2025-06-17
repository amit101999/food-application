import { v2 as cloudinary } from 'cloudinary';


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dqgfmfsc3', 
        api_key: '526622998911477', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });

    const uploadFile = async () =>{

  try{
    const uploadResult = await cloudinary.uploader
    .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {resource_type : 'auto'}
    )
    console.log('File uploaded to Cloudinary:' , uploadResult.url);
  }catch(err){
    console.error(err);
  }
}
