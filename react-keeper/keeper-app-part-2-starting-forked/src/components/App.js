import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

function createNote(note){
  return(
    <Note 
    title= {note.title}
    content= {note.content}
    />
  )
}


function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
