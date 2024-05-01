"use server";

import { uploadImage } from "@/lib/aws";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  "use server";
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload image 2");
  }
  console.log(imageUrl);
  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
