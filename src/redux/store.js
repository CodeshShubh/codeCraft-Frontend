import { configureStore } from '@reduxjs/toolkit';
 import {profileReducer, subscriptionReducer, userReducer} from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';


export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin : adminReducer,
    other: otherReducer,

    
  },
});


export const server = 'https://codecraft-backend-i8t5.onrender.com';
 