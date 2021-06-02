import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../store/actions/messageActions";

const Inbox = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  const messages = useSelector((state) => state.messages?.data);
  return (
    <div class="login-dark">
      <h2>INBOX</h2>

      <table id="UsersTable" style={{ width: "60%" }}>
        <thead>
          <tr>
            <th>Message ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((m, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inbox;
