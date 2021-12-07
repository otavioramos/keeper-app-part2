import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(props) {
  return (
    <div>
      <Header />
      {props.notes.map((note) => {
        return (<Note key={note.key} title={note.title} content={note.content} />);
      })}
      <Footer />
    </div>
  );
}

export default App;
