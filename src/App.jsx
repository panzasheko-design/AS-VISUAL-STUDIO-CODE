import React, {useState, useEffect} from 'react'
import Editor from './components/Editor'
import Sidebar from './components/Sidebar'

export default function App(){
  const [geminiKey, setGeminiKey] = useState('')
  useEffect(()=>{
    const k = localStorage.getItem('GEMINI_API_KEY') || ''
    setGeminiKey(k)
  },[])
  return (
    <div className="app-root">
      <Sidebar onChangeKey={(v)=>{ setGeminiKey(v); localStorage.setItem('GEMINI_API_KEY', v)}} geminiKey={geminiKey} />
      <main className="editor-area">
        <Editor apiKey={geminiKey} />
      </main>
    </div>
  )
}
