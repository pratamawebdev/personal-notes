import NoteInput from "../Bricks/NoteInput";
import NotesList from "../Bricks/NoteList";

const Body = ({
  handleSubmit,
  limit,
  inputTitle,
  handleChange,
  inputBody,
  onChange,
  notes,
  searchInput,
  resultBySearch,
  handleDelete,
  handleArsip,
}) => {
  return (
    <div className="notes-body">
      <NoteInput
        handleSubmit={handleSubmit}
        limit={limit}
        inputTitle={inputTitle}
        handleChange={handleChange}
        inputBody={inputBody}
        onChange={onChange}
      />

      <NotesList
        notes={notes}
        searchInput={searchInput}
        resultBySearch={resultBySearch}
        handleDelete={handleDelete}
        handleArsip={handleArsip}
        headingTwo="Active notes"
        conditionArchived={false}
      />

      <NotesList
        notes={notes}
        searchInput={searchInput}
        resultBySearch={resultBySearch}
        handleDelete={handleDelete}
        handleArsip={handleArsip}
        headingTwo="Archived"
        conditionArchived={true}
      />
    </div>
  );
};

export default Body;
