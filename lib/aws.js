import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
const s3Client = new S3Client({ region: process.env.AWS_REGION });

export async function uploadImage(image) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const base64Data = Buffer.from(imageData);

  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${Date.now().toString()}.${mime.split("/")[1]}`,
    Body: base64Data,
    ContentEncoding: "base64",
    ContentType: mime,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return url;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload image");
  }
}
