exports.BaseUrl = "http://localhost:4000/api/v1";

const token = window.localStorage.getItem("token");
exports.headerAuthorization = { Authorization: `Bearer ${token}` };
