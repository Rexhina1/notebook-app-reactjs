import React, { useEffect, useState } from "react";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  //const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
  const filtered = !search
    ? notes
    : notes.filter((note) =>
        note.body.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="app-sidebar">
      <br/><input type="text" value={search} onChange={handleSearchChange} /> <button type="button" class="btn btn-default">Search</button><br/><br/>
      <div className="app-sidebar-header">
          <h1>All Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {filtered.map(({ id, body, category, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
            <strong>{body && body.substr(0, 100) + "..."}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>
             
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
            <p>Category: {category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
