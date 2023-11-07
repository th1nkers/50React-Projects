
import { useState } from 'react';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  const addHandler = (note) => {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  const deleteNoteHandler = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addHandler} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNoteHandler}
          />
        )
      })}
      <Footer />
    </>
  );
}

export default App;
