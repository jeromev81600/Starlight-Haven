import "./Footer.scss";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div>
        <p>&copy;WCS Projet 2 - 06 Mai 2023</p>
      </div>
      <div className="up">
        <button role="button" className="scroll-to-top" onClick={scrollToTop}>
          <i className="pi pi-chevron-up" style={{ fontSize: "2rem" }} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
