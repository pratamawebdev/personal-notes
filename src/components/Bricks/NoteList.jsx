import NoteItems from "./NoteItems";

const NotesList = ({
  notes,
  searchInput,
  resultBySearch,
  handleDelete,
  handleArsip,
  headingTwo,
  conditionArchived,
}) => {
  const emptyNotes = "public/images/blank.svg";
  return (
    <>
      <h2>{headingTwo}</h2>
      {notes.length === 0 ||
      notes.filter((value) => value.archived === conditionArchived).length ===
        0 ? (
        <div className="empty-notes">
          <img src={emptyNotes} alt="" />
          <p>Blank notes</p>
        </div>
      ) : (
        <div className="notes-list">
          {searchInput.length === 0
            ? notes.map((note) => {
                {
                  return (
                    note.archived === conditionArchived && (
                      <NoteItems
                        key={note.id}
                        note={note}
                        handleDelete={handleDelete}
                        handleArsip={handleArsip}
                      />
                    )
                  );
                }
              })
            : resultBySearch.map((note) => {
                {
                  return (
                    note.archived === conditionArchived && (
                      <NoteItems
                        key={note.id}
                        note={note}
                        handleDelete={handleDelete}
                        handleArsip={handleArsip}
                      />
                    )
                  );
                }
              })}
        </div>
      )}
    </>
  );
};

export default NotesList;
