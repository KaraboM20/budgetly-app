import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) =. {
    const formData = new FormData();
    // Append image file to form data
    formData.append('image', image)
}