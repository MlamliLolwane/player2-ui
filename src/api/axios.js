import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5278/api", // your ASP.NET API base URL
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  (config) => {
    const publicEndpoints = ["/auth/login", "/auth/register"];

    const isPublic = publicEndpoints.some(endpoint =>
      config.url?.includes(endpoint)
    );

    if (!isPublic) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    const url = error.config?.url;

    const publicEndpoints = [
      "/auth/login",
    ];

    const isPublic = publicEndpoints.some(endpoint =>
      url?.includes(endpoint)
    );

    if (error.response?.status === 401 && !isPublic) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;

