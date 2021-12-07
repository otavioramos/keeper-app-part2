import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function createNote(noteInfo) {
  return (<Note key={noteInfo.key} title={noteInfo.title} content={noteInfo.content} />);
}

function App(props) {
  return (
    <div>
      <Header />
      {props.notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
