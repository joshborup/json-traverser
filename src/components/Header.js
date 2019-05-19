import React, { useState } from "react";

export default function Header({ children }) {
  return (
    <header>
      <div className="logo">&#123;&quot;theJSON&quot;&#125;</div>
      <div className="content">{children}</div>
    </header>
  );
}
