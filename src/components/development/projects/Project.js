import linkicon from "../../../assets/link-icon.svg";

const Project = ({ title, link, description, tools, goals, closeModal }) => {
  return (
    <div className="modal-container">
      <div onClick={() => closeModal(false)} className="close-modal">x</div>
      <div className="modal-title">
        <a href={link}> {title} <img src={linkicon} className="link-icon"/> </a>
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
        <div className="modal-section">
          <div className="section-title">GOALS</div>
            <hr />
          <p>{goals}</p>
        </div>
        <div className="modal-section">
          <div className="section-title">RESULT</div>
            <hr />
        </div>
      </div>
    </div>
  );
};

export default Project;
