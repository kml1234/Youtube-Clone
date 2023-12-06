import React from 'react'

function ChatCard({info}) {
   

  return (
    <div>
      <h1>{info.snippet.displayMessage}</h1>
    </div>
  )
}

export default ChatCard
