import { useEffect, useState } from 'react'
import './css/main.css'
import './css/index.css'
import data from "./data.json"
import { Navbar } from './NavBar'
import { Jobs } from './Jobs'

export default function App() {

  const [search, setSearch] = useState([]);

  const newData = data.filter(job => {
    const combinedAttributes = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools
    ].map(attr => attr.toLowerCase());

    return search.every(term => {
      return combinedAttributes.includes(term.tagName.toLowerCase())
    });
  })


  function addTag(tagName) {
    setSearch(previousTags => {
      return [
        ...previousTags,
        { id: crypto.randomUUID(), tagName: tagName }
      ]
    });
  }

  function removeTag(id) {
    setSearch(previousTags => {
      return previousTags.filter(tag => tag.id !== id)
    })
  }


  return (
    <>
      <Navbar></Navbar>

      <div className="container search-bar" style={search.length ? {display: "flex"} : {display: 'none'}}>
        <ul className="selected-tags">
          {search.map(tag => (<li key={tag.id}><div className="btn-group"><label className='btn btn-primary'>{tag.tagName}</label><button className='btn btn-close btn-bg-primary' onClick={() => removeTag(tag.id)}><object data="./images/icon-remove.svg" width={"14px"} height={"14px"}></object></button></div></li>))}
        </ul>
        <button type="reset" className='btn btn-clear' onClick={() => setSearch([])}>Clear</button>
      </div>

      <Jobs data={newData} addTag={addTag}></Jobs>
    </>
  )
}