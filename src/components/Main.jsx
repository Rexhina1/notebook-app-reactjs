import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

 if (!activeNote) return <div className="no-active-note"></div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
      <form method="post">
        <label for="category">Choose a category:</label>
        <select name="category" id="category" onChange={(e) => onEditField("category", e.target.value)}>
          <option value="Priority">Priority</option>
          <option value="Not Important">Not Important</option>
        </select>
        <br/><br/>
          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
          />
      </form>
      </div>
    </div>
  );
};

export default Main;
