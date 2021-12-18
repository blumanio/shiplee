import * as api from "../api";

//actions Creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }

  //   const action = { type: "FETCH_ALL", playload: [] };
  //   dispatch(action);
};
export const createPost = (post) => async (dispatch) => { 
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
