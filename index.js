const posts = [
  {
    title: "Post one",
    body: "this is post one",
  },
];

const user = {
  name: "user",
  lastActivityTime: new Date(),
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 2000);
  });
}
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().getTime();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}
const newPost = { title: "post three", body: "this is post three" };

const promise1 = user.lastActivityTime;
const promise2 = createPost(newPost);
const promise3 = updateLastUserActivityTime();

Promise.all([promise1, promise2, promise3]).then(
  ([previousTime, values, newTime]) => {
    console.log(
      `Before creating post user last Activity time: ${previousTime}`,
      `posts: ${values}`,
      `users last Activity Time ${newTime}`
    );
  }
);
