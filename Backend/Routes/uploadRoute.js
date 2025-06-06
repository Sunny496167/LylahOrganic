//Routes/uploadRoute.js

const express = require('express');
const router = express.Router();
const upload = require('../Middlewares/upload');
const cloudinary = require('../Config/cloudinary');
const uploadImageLimiter = require('../Middlewares/rateLimiter').uploadImageLimiter;

const streamifier = require('streamifier');

router.post('/upload', uploadImageLimiter, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ status: 'error', message: 'No file uploaded' });
    }

    const uploadSrteam = cloudinary.uploader.upload_stream(
        {folder: 'uploads', resource_type: 'image'},
        (error, result) => {
            if (error) {
                return res.status(500).json({ status: 'error', message: 'Error uploading image', error: error.message });
            }
            res.status(200).json({
                status: 'success',
                message: 'Image uploaded successfully',
                data: {
                    url: result.secure_url,
                    public_id: result.public_id
                }
            });
        }
    );
    streamifier.createReadStream(req.file.buffer).pipe(uploadSrteam);

});

module.exports = router;