/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils";
import { IoMdTime } from "react-icons/io";

function CatatanItem({
  id,
  title,
  body,
  createdAt,
  type,
  deleteNote,
  moveNote,
  archiveNote,
}) {
  let secondButton;

  if (type === "archive") {
    secondButton = (
      <button
        type="submit"
        className="catatan-item__button__move"
        onClick={() => moveNote(id)}
      >
        Pindahkan
      </button>
    );
  } else {
    secondButton = (
      <button
        type="submit"
        className="catatan-item__button__archive"
        onClick={() => archiveNote(id)}
      >
        Arsipkan
      </button>
    );
  }

  return (
    <div className="catatan-item">
      <h3 className="catatan-item__title">{title}</h3>
      <div className="catatan-item__date">
        <span className="catatan-item__date__icon">
          <IoMdTime />
        </span>{" "}
        {showFormattedDate(createdAt)}
      </div>
      <div className="catatan-item__body">{body}</div>
      <div className="catatan-item__button__wrapper">
        <div className="catatan-item__button">
          <button
            type="submit"
            className="catatan-item__button__delete"
            onClick={() => deleteNote(id)}
          >
            Hapus
          </button>
          {secondButton}
        </div>
      </div>
    </div>
  );
}

export default CatatanItem;
