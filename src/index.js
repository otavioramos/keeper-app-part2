import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import notes from "./notes";

ReactDOM.render(<App notes={notes}/>, document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
