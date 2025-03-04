import { createSlice } from "@reduxjs/toolkit";

const getPosts = () => {
    const posts = localStorage.getItem("posts");
    return posts ? JSON.parse(posts) : [];
};

const initialState = { posts: getPosts() };

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.unshift(action.payload);
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },

        editPost: (state, action) => {
            const { id, text } = action.payload;
            const post = state.posts.find((post) => post.id === id);
            if (post) {
                post.text = text;
            }
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        addComment:(state, action) => {
            const { postId, comment } = action.payload;
            const post = state.posts.find((post) => post.id === postId);
            if (post) {
                if(!post.comments){
                    post.comments = [];
                }
                post.comments.push(comment);
            }
            localStorage.setItem("posts", JSON.stringify(state.posts));
        }
    },
});

export const { addPost, deletePost, editPost, addComment } = postSlice.actions;
export default postSlice.reducer;
