const FormCreateNote = ({
  handleSubmit,
  limit,
  inputTitle,
  handleChange,
  inputBody,
  onChange,
}) => {
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <p className="notes-input-title-char-limit">
          Remaining characters: {limit}
        </p>
        <input
          value={inputTitle}
          onChange={handleChange}
          type="text"
          className="notes-input-title"
          placeholder="Write down the title ...."
          required
        />
        <textarea
          className="notes-input-body"
          value={inputBody}
          onChange={onChange}
          type="text"
          placeholder="Write down your notes ...."
          required
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default FormCreateNote;
