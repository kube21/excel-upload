import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container">
      <div className="mg20">
        <Typography variant="h5"></Typography>
        <Typography variant="h6">Excel File Upload</Typography>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;
