const AdminMenu = (props) => (
  <div class="login-dark">
    <h2>Users Management Portal</h2>
    <table id="ACCESS" style={{ width: "80%" }}>
      <thead>
        <tr>
          <td>
            <div class="tbox">
              <input
                type="text"
                class="form-control"
                id="UserId"
                name="UserId"
                placeholder="Enter User ID"
                required
              />
            </div>
          </td>
          <td>Change Access To:-</td>
          <td>
            <button class="btn btn-primary btn-block" id="off" type="submit">
              OFF
            </button>
          </td>
          <td>
            <button class="btn btn-primary btn-block" id="on" type="submit">
              ON
            </button>
          </td>
          <td>
            <button class="deletebtn" id="Delete" type="submit">
              Delete
            </button>
          </td>
          <td>Click to Refresh Data:-</td>
          <td>
            <a href="AdminMainMenu.html">
              <button class="refreshbtn" id="Refresh" type="submit">
                Refresh
              </button>
            </a>
          </td>
        </tr>
      </thead>
    </table>
    <br />
    <table id="UsersTable" style={{ width: "90%" }}>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>UserName</th>
          <th>Password</th>
          <th>Purpose</th>
          <th>Access</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Usman</td>
          <td>Arshad</td>
          <td>usman@gmail.com</td>
          <td>usman001</td>
          <td>pakistan</td>
          <td>STUDY</td>
          <td>OFF</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AdminMenu;
