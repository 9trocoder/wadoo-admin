import React from 'react'

function ToastMessage({message, showToast, onClose, type}) {
  return (
    <div className={`toast ${type} ${showToast ? "show" : ''}`}>
      <div className="toast-content">
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ToastMessage