import React from 'react'
import "../Navbar/Navbar.css"

export function Navbar() {
    return (
        <header>
        <a href="https://www.talkspace.com" class="c-logo w-inline-block"></a>
        <ul>
          <li> How it works</li>
          <li> Business</li>
          <li> Join our network</li>
          <li> Log in</li>
          <li>
          <button type="button">Get Started</button >
          </li>         
        </ul>
      </header>
    );
}
