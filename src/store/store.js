import { configureStore } from "@reduxjs/toolkit";
import imagePreviewReducer from '../features/imagePreviewSlice'
import postReducer from '../features/PostSlice'


const store = configureStore({
    reducer: {
        image: imagePreviewReducer,
        posts: postReducer
    }
});

export default store