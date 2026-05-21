import React from 'react'

export default function Tabs({files, active, onActivate, onClose}){
  return (
    <div className="tabs">
      {files.map(f=> (
        <div key={f.path} className={`tab ${active===f.path? 'active':''}`} onClick={()=>onActivate(f.path)}>
          <span className="tab-name">{f.name}</span>
          <button className="tab-close" onClick={(e)=>{e.stopPropagation(); onClose(f.path)}}>×</button>
        </div>
      ))}
    </div>
  )
}
