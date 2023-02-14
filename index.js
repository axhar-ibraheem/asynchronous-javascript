// const posts = [
//   {
//     title: "Post one",
//     body: "this is post one",
//   },
// ];

// const user = {
//   name: "user",
//   lastActivityTime: new Date(),
// };

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve(posts);
//     }, 2000);
//   });
// }
// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// }
// function updateLastUserActivityTime() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       user.lastActivityTime = new Date();
//       resolve(user.lastActivityTime);
//     }, 1000);
//   });
// }
// const newPost = { title: "post three", body: "this is post three" };

// const promise1 = user.lastActivityTime;
// const promise2 = createPost(newPost);
// const promise3 = updateLastUserActivityTime();
// console.log(`before creating post ${promise1}`);
// Promise.all([promise2, promise3]).then(([values, newTime]) => {
//   console.log(`posts:`, values, `users last Activity Time:`, newTime);
// });

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");
// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   });
// }, 3000);
// const getPopcorn = promiseWifeBringingTicks.then((value) => {
//   console.log("wife: i have the tickets");
//   console.log("Husband: we should go in");
//   console.log("wife: no i am hungary");
//   return new Promise((resolve, reject) => resolve(`${value} popcorn`));
// });

// const butter = getPopcorn.then((value) => {
//   console.log("Husband: i got some popcorn");
//   console.log("Husband: we should go in");
//   console.log("wife: no i need butter on my popcorn");
//   return new Promise((resolve, reject) => resolve(`${value} butter`));
// });
// butter.then((value) => console.log(value));
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

///---async await---///

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const addButter = new Promise((resolve, reject) => resolve(`butter`));

  const getColdDrinks = new Promise((resolve, reject) => {
    resolve("cold drink");
  });

  let ticket = await promiseWifeBringingTicks;

  console.log(`wife: i have the ${ticket}`);
  console.log("Husband: we should go in");
  console.log("wife: no i am hungary");

  let popcorn = await getPopcorn;

  console.log(`Husband: i got some ${popcorn}`);
  console.log("Husband: we should go in");
  console.log("wife: no i need butter on my popcorn");

  let butter = await addButter;
  console.log(`Husband: here is the ${butter}`);
  console.log("Husband: Anything else darling");
  console.log("wife: lets leave we are getting late");
  console.log("Husband: only one cold drink");
  let coldDrink = await getColdDrinks;

  console.log(`Husband: the ${coldDrink} is awesome`);
  console.log(`person3: shows ${ticket}`);
};

preMovie();

console.log("person4: shows ticket");
console.log("person5: shows ticket");

///---POSTS---///

const posts = [{ title: "POST1" }];

function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST2" });
      resolve();
    }, 3000);
  });
}

function create3rdPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST3" });
      resolve();
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

async function processPosts() {
  try {
    await create2ndPost();
    const post = await deletePost();
    console.log(post.title);
    await create3rdPost();
    const post2 = await deletePost();
    console.log(post2.title);
    const post3 = await deletePost();
    console.log(post3.title);
    const post4 = await deletePost();
    console.log(post4);
  } catch (error) {
    console.log(error);
  }
}
processPosts();
