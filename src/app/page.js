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
  <div
    style={{
      maxWidth: "700px",
      margin: "50px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <h1 style={{ textAlign: "center" }}>Smart Notes Manager</h1>

    <div style={{ marginBottom: "20px" }}>
      <input
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          minHeight: "80px",
        }}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={addNote}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Note
      </button>
    </div>

    <hr />

    {notes.map((note) => (
      <div
        key={note.id}
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          marginTop: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button
          onClick={() => deleteNote(note.id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);
}