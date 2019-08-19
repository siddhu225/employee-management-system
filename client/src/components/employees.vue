<template>
  <div class="Employees">
    <h1>Employees</h1>
    <div v-if="Employees.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'EmployeeAdd' }" class>Add Post</router-link>
      </div>
      <table border="0px solid blue">
        <tr>
          <td width="450">Name</td>
          <td width="200">Date of Birth</td>
          <td width="250">Mobile Number</td>
          <td width="100">Gender</td>
          <td width="100">Email</td>
          <td width="250">Role</td>
          <td width="100">Experience</td>
          <td width="1250">Actions</td>
        </tr>
        <tr v-for="employee in Employees" :key="employee._id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.dob }}</td>
          <td>{{ employee.number }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.email}}</td>
          <td>{{ employee.role }}</td>
          <td>{{ employee.experience }}</td>
          <td align="center">
            <router-link style="font-size:26px"
              class="fa fa-eye"
              v-bind:to="{ name: 'EmployeeProfile', params: { id: employee._id } }"
            ></router-link> &nbsp;
            <router-link
              style="font-size:26px"
              class="fa fa-edit"
              v-bind:to="{ name: 'EditEmployee', params: { id: employee._id } }"
            ></router-link>|&nbsp;
            <a class="fa fa-trash" style="font-size:26px" @click="deleteEmployee(employee._id)"></a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no Employees.. Lets add one now
      <br />
      <br />
      <router-link v-bind:to="{ name: 'EmployeeAdd' }" class="add_post_link">Add Employee</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "Employees",
  components: {},
  data() {
    return {
      Employees: []
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      const response = await PostsService.fetchEmployees();
      this.Employees = response.data.employees;
    },
    async deleteEmployee(id) {
      console.log("-------", id);
      await PostsService.deleteEmployee(id);
      this.getEmployees();
      // this.$router.push({ name: "Employees" });
    }
  }
};
</script>
<style type="text/css">
.table-wrap {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>