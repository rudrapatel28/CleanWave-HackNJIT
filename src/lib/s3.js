const AWS = require('aws-sdk');

document.getElementById('uploadForm').addEventListener('submit', function(e) { // change uploadForm to whatever the form name is
  e.preventDefault();

  const file = document.getElementById('fileInput').files[0]; // change if need be
  const bucketName = 'cleanwave-hacknjit';
  const uploadKey = 'uploads/' + Date.now().toString() + file.name;

  const params = {
    Bucket: bucketName,
    Key: uploadKey,
    Body: file,
  };

  const s3 = new AWS.S3({
    accessKeyId: 'AKIAVGLFEAAQ24Y7AFHZ',
    secretAccessKey: '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',
  });

  s3.upload(params, function(err, data) {
    if (err) {
      console.error('Error uploading video:', err);
    } else {
      console.log('Video uploaded successfully:', data);
    }
  });
});



/*

This file is based on these form parameters.

<form id="uploadForm">
  <input type="file" id="fileInput" accept="video/*">
  <button type="submit">Upload Video</button>
</form>

put this also in the html
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1140.0.min.js"></script>


be sure to change stuff accordingly

*/
