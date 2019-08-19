import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/HelloWorld";
import Posts from "@/components/Posts";
import EmployeeAdd from "@/components/EmployeeAdd";
import login from "@/components/login";
import Employees from "@/components/employees"
import EditEmployee from "@/components/EditEmployee"
import EmployeeProfile from "@/components/employeeprofile"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/employees",
      name: "Employees",
      component: Employees
    },
    {
      path: "/employee/add",
      name: "EmployeeAdd",
      component: EmployeeAdd
    },
    {
      path: '/employees/:id',
      name: 'EditEmployee',
      component: EditEmployee
    },
    {
      path: '/employees/view/:id',
      name: 'EmployeeProfile',
      component: EmployeeProfile
}
  ]
});
