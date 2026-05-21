import React, {useState} from 'react'
import Explorer from './Explorer'
import Tabs from './Tabs'
import Editor from './Editor'
import CommandPalette from './CommandPalette'
import Settings from './Settings'
import Sidebar from './Sidebar'
import fileSystem from '../utils/fileSystem'

export default function Workbench(){
  const [openFiles, setOpenFiles] = useState([])
  const [active, setActive] = useState(null)
  const [showPalette, setShowPalette] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [files, setFiles] = useState(fileSystem)

  function openFile(path){
    const f = files.find(x=>x.path===path)
    if(!f) return
    if(!openFiles.find(x=>x.path===path)) setOpenFiles([...openFiles, f])
    setActive(path)
  }

  function closeFile(path){
    const next = openFiles.filter(x=>x.path!==path)
    setOpenFiles(next)
    if(active===path) setActive(next.length? next[next.length-1].path : null)
  }

  function updateFile(path, content){
    setFiles(files.map(f=>f.path===path?{...f, content}:f))
    setOpenFiles(openFiles.map(f=>f.path===path?{...f, content}:f))
  }

  return (
    <div className="workbench-root">
      <Sidebar />
      <div className="workbench-main">
        <Explorer files={files} onOpen={openFile} />
        <div className="editor-pane">
          <Tabs files={openFiles} active={active} onActivate={setActive} onClose={closeFile} />
          <div className="editor-content">
            {active ? (
              <Editor fileName={active} value={files.find(f=>f.path===active)?.content || ''} onChange={(c)=>updateFile(active,c)} />
            ) : (
              <div className="empty-state">افتح ملفاً لبدء التحرير</div>
            )}
          </div>
        </div>
      </div>
      <CommandPalette visible={showPalette} onClose={()=>setShowPalette(false)} onOpenFile={openFile} onToggleSettings={()=>setShowSettings(s=>!s)} />
      <Settings visible={showSettings} onClose={()=>setShowSettings(false)} />
    </div>
  )
}
