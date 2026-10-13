@echo off
setlocal
set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE_EXE%" (
  echo Node.js runtime was not found on this computer.
  pause
  exit /b 1
)
start "" http://127.0.0.1:4173/
"%NODE_EXE%" "%~dp0preview-server.mjs"