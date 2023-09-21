import FormCreateNote from "../Fragments/FormCreateNote";

const NoteInput = ({
  handleSubmit,
  limit,
  inputTitle,
  handleChange,
  inputBody,
  onChange,
}) => {
  return (
    <div className="notes-input">
      <h2>Take notes</h2>
      <FormCreateNote
        handleSubmit={handleSubmit}
        limit={limit}
        inputTitle={inputTitle}
        handleChange={handleChange}
        inputBody={inputBody}
        onChange={onChange}
      />
    </div>
  );
};

export default NoteInput;
