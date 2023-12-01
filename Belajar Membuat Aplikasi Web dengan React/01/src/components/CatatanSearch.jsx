/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";

export default function CatatanSearch({ searchCatatan }) {
  return (
    <div className="catatan-header-search">
      <span className="catatan-header-search__icon">
        <FiSearch />
      </span>
      <input
        type="text"
        placeholder="Pencarian"
        className="catatan-header-search__input"
        onChange={ searchCatatan }
      />
    </div>
  );
}
