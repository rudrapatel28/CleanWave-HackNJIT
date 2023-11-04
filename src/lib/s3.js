document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const file = document.getElementById('fileInput').files[0];
  const bucketName = 'cleanwave-hacknjit';

  const params = {
      Bucket: bucketName,
      Key: 'uploads/' + Date.now().toString() + file.name.replace(/ /g, '-'),
      Body: file,
  };

  const s3 = new AWS.S3({
      region: "us-east-1",
      credentials: {
          accessKeyId: 'AKIAVGLFEAAQ24Y7AFHZ',
          secretAccessKey: 'adUqfYehB/qCPE0TRXZY9RuPSojSSIbkiz4TZmYQ',
      },
  });

  s3.putObject(params, (err, data) => {
      if (err) {
          console.error('Error uploading PDF:', err);
      } else {
          console.log('PDF uploaded successfully:', data);
      }
  });
});

/*document.getElementById('downloadButton').addEventListener('click', async function() {
  const fileKey = "uploads/" + Date.now().toString() + file.name.replace(" ", "-");
  try {
      const url = await downloadFromS3(fileKey);
      console.log('PDF downloaded:', url);
      window.open(url, '_blank');
  } catch (error) {
      console.error('Error downloading PDF:', error);
  }
});*/

function downloadFromS3(fileKey) {
  return new Promise(async (resolve, reject) => {
      try {
          const s3 = new AWS.S3({
              region: "us-east-1",
              credentials: {
                  accessKeyId: 'AKIAVGLFEAAQ24Y7AFHZ',
                  secretAccessKey: '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',
              },
          });

          const params = {
              Bucket: 'cleanwave-hacknjit',
              Key: fileKey,
          };

          const obj = await s3.getObject(params);
          //const file_name = `elliott${Date.now().toString()}.pdf`;

          if (obj.Body instanceof require("stream").Readable) {
              const file = fs.createWriteStream(file_name);
              file.on("open", function (fd) {
                  obj.Body?.pipe(file).on("finish", () => {
                      resolve(file_name);
                  });
              });
          }
      } catch (error) {
          console.error(error);
          reject(error);
      }
  });
}



/*
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
*/


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
