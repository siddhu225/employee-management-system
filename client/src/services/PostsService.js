import Api from "@/services/Api";

export default {
  fetchEmployees() {
    return Api().get("employees");
  },
  addUser(params) {
    return Api().post("/employee/add", params);
  },
  getPost(params) {
    return Api().get("employees/" + params.id);
  },
  updatePost(params) {
    console.log(params);
    return Api().put("employees/" + params.id, params);
  },
  postUser(params) {
    return Api().post("/login", params);
  },

  deleteEmployee(id) {
    console.log("!!!!!!!", id);
    return Api().delete("/employees/" + id);
  },

  getUser(params) {
    console.log("params~`````````````~~~~~~~~~~~~", params.id);
    return Api().get("/employees/view/" + params.id);
  },

  postUser1(params) {
    return Api().post("/forgot/password", params);
  }
};
