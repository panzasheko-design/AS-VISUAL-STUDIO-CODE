import React, {useState, useEffect} from 'react'

export default function Settings({visible, onClose}){
  const [key, setKey] = useState('')
  useEffect(()=>{ setKey(localStorage.getItem('GEMINI_API_KEY')||'') },[])
  if(!visible) return null
  return (
    <div className="settings-modal">
      <div className="settings-content">
        <h3>Settings</h3>
        <label>Gemini API Key</label>
        <input value={key} onChange={(e)=>setKey(e.target.value)} placeholder="Enter Gemini API key" />
        <div className="settings-actions">
          <button onClick={()=>{ localStorage.setItem('GEMINI_API_KEY', key); onClose()}}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
