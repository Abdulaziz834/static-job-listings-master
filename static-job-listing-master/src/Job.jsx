export function Job({ job, addTag }) {



  return (
    <article className={`job${job.new ? ' new' : ""}${job.featured ? ' featured' : ""}`}>
      <img src={job.logo} className='job-logo' draggable="false" />
      <div className="job-info">
        <div className="names">
          <h5 className='company-name'>{job.company}</h5>
          {job.new && <span className="badge primary">new!</span>}
          {job.new && <span className="badge neutral">featured</span>}
        </div>
        <h4 className='job-position'>{job.position}</h4>
        <ul className="more-info neutral">
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </ul>
      </div>
      <ul className="tags">
        <li><button className='btn tag primary' onClick={e => addTag(e.target.textContent)}>{job.role}</button></li>
        <li><button className='btn tag primary' onClick={e => addTag(e.target.textContent)}>{job.level}</button></li>
        {job.languages.map(lang => (<li key={lang.toLowerCase()}><button className='btn tag primary' onClick={e => addTag(e.target.textContent)}>{lang}</button></li>))}
        {job.tools.map(tool => (<li key={tool.toLowerCase()}><button className='btn tag primary' onClick={e => addTag(e.target.textContent)}>{tool}</button></li>))}
      </ul>
    </article>
  )
}