"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const API_URL = "https://5mnj5uder5.execute-api.ap-south-1.amazonaws.com";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch(`${API_URL}/notes`);
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async () => {
    await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`${API_URL}/notes?id=${id}`, {
      method: "DELETE",
    });

    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Smart Notes Manager</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br /><br />

      <button onClick={addNote}>Add Note</button>

      <hr />

      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}