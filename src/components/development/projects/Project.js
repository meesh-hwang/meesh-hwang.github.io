import linkicon from "../../../assets/link-icon.svg";

const Project = ({ title, link, gitLink, description, tools, details, closeModal }) => {
  return (
    <div className="modal-container">
      <div onClick={() => closeModal(false)} className="close-modal">x</div>
      <div className="modal-title">
        <a href={link} rel="noreferrer" target="_blank"> {title} <img src={linkicon} alt="Open link in new tab" className="link-icon"/> </a>
      </div>
      <div className="modal-content">
        <div className="modal-section-top">
          <div className="modal-section">
            <div className="section-title">DESCRIPTION</div>
            <hr />
            <p>{description}</p>
          </div>
          <div className="modal-section">
            <div className="section-title">TOOLS</div>
            <hr />
            <p className="tools">{tools}</p>
          </div>
        </div>
        <div className="modal-section link-btns">
          <a href={link} rel="noreferrer" target="_blank" className="link-btn">View</a>
          {gitLink ? <a href={gitLink} rel="noreferrer" target="_blank" className="link-btn">GitHub</a> : null}
        </div>
        <div className="modal-section">
          <div className="section-title">DETAILS</div>
            <hr />
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
