/* eslint-disable react/prop-types */
import NoteItem from "./CatatanItem";
import { FiInfo } from "react-icons/fi";

function CatatanList({ notes, type, deleteNote, moveNote, archiveNote }) {
  if(!notes.length) return (
    <div className="catatan-list-empty">
      <span className="catatan-list-empty__icon"><FiInfo /></span>
      <p className="catatan-list-empty__desc">Tidak ada catatan</p>
    </div>
  )
  return (
    <div className="catatan-list">
      { notes.map((note) => <NoteItem type={type} 
        deleteNote={deleteNote}
        moveNote={moveNote}
        archiveNote ={archiveNote}
        key={note.id} {...note} />) }
    </div>
  );
}

export default CatatanList;