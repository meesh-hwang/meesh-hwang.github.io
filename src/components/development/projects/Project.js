import link from '../../../assets/link-icon.svg'

  const Project = ({title, link, description, tools, goals, closeModal}) => {
    return (
        <div className="modal-container">
            <div onClick={() => closeModal(false)}>x</div>
          <div className="modal-section">
            <a href={link}> {title}</a>
          </div>
          <div className='modal-section'>
            <div>DESCRIPTION</div>
            <p>{description}</p>
            <div>TOOLS</div>
            <p>{tools}</p>
            <div>GOALS</div>
            <p>{goals}</p>
            <div>RESULT</div>
          </div>
        </div>
    )
  }

export default Project;