/* eslint-disable react/prop-types */
import CatatanSearch from "./CatatanSearch";

export default function CatatanHeader({ searchCatatan }) {
  return (
    <header className="catatan-header">
        <div className="catatan-header__container">
      <div className="catatan-header__logo">
        <span className="catatan-header__logo__text">catatan</span>
      </div>
      <CatatanSearch searchCatatan={ searchCatatan } />
      </div>
    </header>
  );
}