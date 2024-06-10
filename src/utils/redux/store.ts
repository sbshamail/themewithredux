
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


// store.ts

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
// import { createWrapper } from "next-redux-wrapper";

// export const makeStore: any = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

// export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });