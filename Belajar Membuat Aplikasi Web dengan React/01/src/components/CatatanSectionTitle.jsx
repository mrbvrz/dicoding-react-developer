/* eslint-disable react/prop-types */
export default function CatatanSectionTitle({ title, icon, desc }) {
  return (
    <div className="catatan-section">
      <h1 className="catatan-section__title"><span className="catatan-section__icon">{icon}</span> {title}</h1>
      <p className="catatan-section__desc">{desc}</p>
    </div>
  );
}