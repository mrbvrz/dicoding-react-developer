import { FiGlobe, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

export default function CatatanFooter() {
  return (
    <div className="catatan-footer">
      <p>
        Dibuat dengan ❤️ oleh <span className="catatan-footer__name">Hasan Suryaman</span>
      </p>
      <ul className="catatan-footer__social">
        <li className="catatan-footer__social__icon">
          <a href="https://hasansuryaman.com/">
            <FiGlobe />
          </a>
        </li>
        <li className="catatan-footer__social__icon">
          <a href="https://github.com/mrbvrz">
            <FiGithub />
          </a>
        </li>
        <li className="catatan-footer__social__icon">
          <a href="https://twitter.com/mrbvrz">
            <FiTwitter />
          </a>
        </li>
        <li className="catatan-footer__social__icon">
          <a href="https://www.instagram.com/mrbvrz/">
            <FiInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
