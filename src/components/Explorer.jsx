import React from 'react'

export default function Explorer({files, onOpen}){
  return (
    <aside className="explorer">
      <div className="explorer-header">Explorer</div>
      <ul className="file-list">
        {files.map(f=> (
          <li key={f.path} className="file-item" onDoubleClick={()=>onOpen(f.path)}>{f.name}</li>
        ))}
      </ul>
    </aside>
  )
}
