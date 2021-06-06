import { useState } from "react";
import { useDispatch } from "react-redux";

import { uploadFile } from "../../store/actions/userActions";

const Menu = (props) => {
  const dispatch = useDispatch();

  const [sourceFile, setSourceFile] = useState(null);
  const [targetFile, setTargetFile] = useState(null);

  const uploadFileHandler = (type) => {
    if ("source" === type) {
      if (sourceFile === null) {
        alert("Please choose a source file.");
      } else {
        console.log("upload a source file here");
        dispatch(uploadFile(sourceFile, "source"));
      }
    } else if ("target" === type) {
      if (targetFile === null) {
        alert("Please select a target file");
      } else {
        console.log("upload a target file here.");
        dispatch(uploadFile(targetFile, "target"));
      }
    }
  };

  return (
    <div class="login-dark">
      <h2>Welcome To User WorkSpace</h2>
      <h4>Follow The Steps To Create Your DeepFake</h4>
      <table id="Workspace" style={{ width: "100%" }}>
        <thead>
          <tr>
            <td>
              <b>Step 1.</b> Upload Source Video:-
            </td>
            <td>
              <input
                class="refreshbtn"
                type="file"
                onChange={(e) => setSourceFile(e.target.files[0])}
                accept="video/mp4,video/x-m4v,video/*"
              />
              <br />{" "}
              <input
                class="refreshbtn"
                type="submit"
                onClick={() => uploadFileHandler("source")}
              />
            </td>
            <td>
              <b>Step 2.</b> Upload Destination Video:-
            </td>
            <td>
              <input
                class="refreshbtn"
                type="file"
                onChange={(e) => setTargetFile(e.target.files[0])}
                accept="video/mp4,video/x-m4v,video/*"
              />
              <br />{" "}
              <input
                class="refreshbtn"
                type="submit"
                onClick={() => uploadFileHandler("target")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 3.</b> Extract Images From Source Video:-
            </td>
            <td>
              <button
                class="btn btn-primary btn-block"
                id="GO"
                type="submit"
                onclick="window.open('file:///C:\Users\')"
              >
                GO
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 4.</b> Extract Images From Destination Video:-
            </td>
            <td>
              <button class="btn btn-primary btn-block" id="GO" type="submit">
                GO
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 5.</b> Extract Faces From Source DataSet:-
            </td>
            <td>
              <button class="btn btn-primary btn-block" id="GO" type="submit">
                GO
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 6.</b> Extract Faces From Destination DataSet:-
            </td>
            <td>
              <button class="btn btn-primary btn-block" id="GO" type="submit">
                GO
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 7.</b> Perform Training (Quick96):-
            </td>
            <td>
              <button class="btn btn-primary btn-block" id="GO" type="submit">
                GO
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 8.</b> Convert to MP4 Video (Quick96):-
            </td>
            <td>
              <button class="btn btn-primary btn-block" id="GO" type="submit">
                GO
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <b>Step 9(Final).</b> View Result.mp4 Video:-
            </td>
            <td>
              <button class="btn btn-primary btn-block" id="GO" type="submit">
                GO
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Menu;
