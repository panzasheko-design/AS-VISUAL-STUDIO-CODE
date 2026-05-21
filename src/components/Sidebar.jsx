import React, {useState} from 'react'

export default function Sidebar({onChangeKey, geminiKey}){
  const [key, setKey] = useState(geminiKey || '')
  return (
    <aside className="sidebar">
      <div className="brand">AS Studio Web</div>
      <div className="section">
        <h4>Gemini API</h4>
        <input placeholder="أدخل مفتاح Gemini" value={key} onChange={(e)=>setKey(e.target.value)} />
        <button onClick={()=>onChangeKey(key)}>حفظ المفتاح</button>
      </div>
      <div className="section footer">🚀 Crafted with ❤️ by ADAM STUDIO</div>
    </aside>
  )
}
