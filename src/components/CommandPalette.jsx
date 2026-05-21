import React, {useState} from 'react'

const COMMANDS = [
  {id:'openFile', label:'Open File'},
  {id:'toggleSettings', label:'Toggle Settings'},
  {id:'format', label:'Format Document'},
  {id:'runGemini', label:'Run Gemini'}
]

export default function CommandPalette({visible, onClose, onOpenFile, onToggleSettings}){
  const [query, setQuery] = useState('')
  if(!visible) return null
  const filtered = COMMANDS.filter(c=>c.label.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="command-palette">
      <input autoFocus placeholder="Type a command..." value={query} onChange={(e)=>setQuery(e.target.value)} />
      <ul>
        {filtered.map(c=> (
          <li key={c.id} onClick={()=>{
            if(c.id==='openFile') onOpenFile('/main.js')
            if(c.id==='toggleSettings') onToggleSettings()
            onClose()
          }}>{c.label}</li>
        ))}
      </ul>
    </div>
  )
}
