import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appstore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        GPT: gptReducer,
        config:configReducer,

    },
})

export default appstore;
