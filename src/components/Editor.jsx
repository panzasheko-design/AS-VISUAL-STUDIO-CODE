import React, {useRef, useState} from 'react'
import MonacoEditor from '@monaco-editor/react'

export default function Editor({apiKey}){
  const [value, setValue] = useState('// Welcome to AS Studio Web\n')
  const monacoRef = useRef(null)
  function handleEditorDidMount(editor, monaco){
    monacoRef.current = editor
  }

  async function runAssistant(){
    if(!apiKey){
      alert('Please set your Gemini API key in Settings')
      return
    }
    // Call the secure serverless proxy (Netlify function) which forwards to Gemini
    try{
      const resp = await fetch('/.netlify/functions/gemini',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: value, max_tokens: 256 })
      })
      const data = await resp.json()
      if(data?.output) setValue(v => v + '\n// Assistant:\n' + data.output)
      else if(data?.choices && data.choices[0]) setValue(v => v + '\n// Assistant:\n' + (data.choices[0].text || JSON.stringify(data)))
    }catch(e){
      console.error(e)
      alert('خطأ في الاتصال بخدمة المساعد. تأكد من إعدادات النشر والمتغيرات.')
    }
  }

  return (
    <div className="editor-wrapper">
      <div className="editor-toolbar">
        <button onClick={() => monacoRef.current && monacoRef.current.trigger('','editor.action.formatDocument',null)}>Format</button>
        <button onClick={runAssistant}>Run Gemini</button>
      </div>
      <MonacoEditor
        height="calc(100vh - 40px)"
        defaultLanguage="javascript"
        defaultValue={value}
        onMount={handleEditorDidMount}
        onChange={(v)=>setValue(v)}
      />
    </div>
  )
}
