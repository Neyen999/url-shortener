import React, { useState } from 'react';

export const ShortLink = ({ linkData }) => {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkData.result.short_link)
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="short--box">
      <div className="full--link">
        <p>{linkData.result.original_link}</p>
      </div>
      <hr />
      <div className="short--link">
        <p>{linkData.result.short_link}{copied ? <i className="fas fa-clipboard-check"></i> : null}</p>
        {
          copied === false ? <button onClick={copyToClipboard} className="button copy">Copy</button> : <button className="button copied">Copied!</button>
        }
      </div>
    </div>
  )
}
