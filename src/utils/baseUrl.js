const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://dreammarket.herokuapp.com"
    : "http://localhost:5000";

export default baseUrl;
