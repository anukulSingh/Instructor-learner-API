const AWS = require("aws-sdk");

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET = process.env.AWS_SECRET;
const AWS_REGION = process.env.AWS_REGION;

if (!AWS_ACCESS_KEY || !AWS_REGION || !AWS_SECRET)
  throw new Error("Missing parameter for AWS");

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET,
  region: AWS_REGION,
});

module.exports = new AWS.S3();
