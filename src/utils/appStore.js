import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice.js';
import movieReducer from '../slices/movieSlice.js';
import gptReducer from '../slices/gptSlice.js';
import configReducer from '../slices/configSlice.js';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt:gptReducer,
        config:configReducer,
    }
});

export default appStore;