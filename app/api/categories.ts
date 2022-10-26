import apiClient from "./client";

const getCategories = () => apiClient.get('/test/category/all')

export default {
    getCategories
}