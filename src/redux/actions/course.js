import { server } from '../store';
import axios from 'axios';

//get All Courses
export const getAllCourses =(category = '', keyword = '') =>async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });

      const { data } = await axios.get(
        `${server}/course/courses?keyword=${keyword}&category=${category}`
      );
        // we dont need to pass header beacuse , for get all courses we dont need to login
      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  }; 

  // get CoureseLectures
export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: 'getCourseRequest' });

    const { data } = await axios.get(`${server}/course/course/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: 'getCourseSuccess', payload: data.lectures });
  } catch (error) {
    dispatch({
      type: 'getCourseFail',
      payload: error.response.data.message,
    });
  }
};
