import React from "react";

const navLinks = [
  { label: "Deals", href: "#deals" },
  { label: "Beste Deals", href: "#beste-deals" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" }
];

export function Navigation() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">DEALFLOW</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="muted">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
