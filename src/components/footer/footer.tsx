import { ReactComponent as Logo } from "../../assets/svg/rs_school_js.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_authors">
        Created by <a href="https://github.com/ErkhanDV/">ErkhanDV</a> <br />
        and <a href="https://github.com/mshns/">mshns</a>
      </p>
      <p>
        Online Store <span className="footer_copyright">2023</span>
      </p>
      <a href="https://rs.school/js/" title="RSS">
        <Logo className="footer_school" />
      </a>
    </footer>
  );
};

export default Footer;
