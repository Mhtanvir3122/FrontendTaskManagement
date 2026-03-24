import axios from "axios";

const API_URL = "http://localhost:8080/service1/";

export const CourseService = {
  coursesGetList: async (payload: any): Promise<any> =>
    await axios.post(API_URL + "courses/search", payload),
};
