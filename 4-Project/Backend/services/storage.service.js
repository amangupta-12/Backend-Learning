
// // ImageKit is a cloud-based image management service that handles:

// //Image storage – no need to save images on your server.
// //Image optimization & transformation – resize, crop, compress, rotate, etc., on-the-fly.
// // Fast delivery – images are served through a global CDN for speed.
// // Security – signed URLs, access control, and prevention of hotlinking.

const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey : 'private_LB8eJ3Ypa4INYRUnsz0Aem6zxEk='
});

async function uploadFile(buffer){

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadFile;
