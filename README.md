# Asynchronous server side data fetching and mutation with NextJS.

On this learing project, the developed application uses a combination of Next.js server components, the `better-sqlite3` library, and AWS S3 to create and manage posts.

1. **Next.js Server Components**: Server components in Next.js allow you to write code that runs on the server but can interact with client components. In this application, the `Posts` component is a client component that uses the `createPost` server action to create a new post. The `createPost` action receives form data, validates it, uploads an image to AWS S3, and stores the post data in a SQLite database.

2. **better-sqlite3**: This is a library that provides a synchronous API for interacting with SQLite databases in Node.js. It's used in the `storePost` function in `lib/posts.js` to insert a new post into the `posts` table in the SQLite database. The `storePost` function is called by the `createPost` server action.

3. **useOptimistic**: This is a custom React hook used in the `Posts` client component. It's used to optimistically update the UI when a post is liked or unliked. When the like button is clicked, the `updatePost` function is called, which first updates the local state of the posts using `updateOptimisiticPosts`, then calls the `togglePostLikeStatus` server action to update the like status in the database.

4. **AWS S3**: Amazon S3 (Simple Storage Service) is a service offered by Amazon Web Services that provides object storage through a web service interface. In this application, it's used to store the images for the posts. The `uploadImage` function in `lib/aws.js` is used to upload an image to S3. This function is called by the `createPost` server action.

When a new post is created, the `createPost` server action is called with the form data. This action validates the form data, uploads the image to AWS S3 using the `uploadImage` function, and stores the post data in the SQLite database using the `storePost` function. The URL of the uploaded image is stored in the `image_url` column of the `posts` table.

## **Installation**

Install project dependencies:

npm install

## **Environment Variables**

To run this project, you will need to add the following environment variables to your .env file

```properties
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=
AWS_REGION=
```

## **Tech Stack**

**Client:** React, Next.js.

### **Server:** Node, "better-sqlite3" \

\
Topics Learned:\
useOptimisitc, data fetching and mutation

## **Authors**

- [@dieDeMiguel](https://github.com/dieDeMiguel)

## **License**

[MIT](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
