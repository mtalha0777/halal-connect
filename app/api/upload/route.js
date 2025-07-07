import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { Buffer } from "buffer";
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded." },
        { status: 400 }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `${Date.now()}_${file.name}`,
      Body: buffer,
      ContentType: file.type,
    };

    const uploadResult = await s3.upload(params).promise();
    return NextResponse.json({
      success: true,
      location: uploadResult.Location,
    });
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return NextResponse.json(
      { success: false, error: "Upload failed: " + error.message },
      { status: 500 }
    );
  }
}
