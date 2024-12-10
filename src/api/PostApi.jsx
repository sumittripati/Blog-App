// import axios from "axios";

// let api = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
// });

// export let getData = () => {
//     return api.get('/posts');
// };


// // delete data

// export let deleteData = (id) => {
//     return api.delete(`/posts/${id}`);
// }

// // post Api

// export let postData = (post) => {
//     return api.post("/posts", post);
// };




import axios from "axios";

let api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// Fetching posts
export let getData = () => {
    return api.get('/posts');
};

// Deleting a post
export let deleteData = (id) => {
    return api.delete(`/posts/${id}`);
};

// Posting a new post
export let postData = (post) => {
    return api.post("/posts", post);
};
