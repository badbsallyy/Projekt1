import React from "react";

export function Card({ badge, title, description, price, ctaLabel, ctaHref, footer }) {
  return (
    <div className="card">
      {badge ? <span className="card-badge">{badge}</span> : null}
      <div>
        <h3>{title}</h3>
        {description ? <p className="muted">{description}</p> : null}
      </div>
      {price ? <strong>{price}</strong> : null}
      {footer ? footer : null}
      {ctaHref ? (
        <a className="button" href={ctaHref} target="_blank" rel="noreferrer">
          {ctaLabel}
        </a>
      ) : null}
    </div>
  );
}

export function CardSpotlight({ title, description, ctaLabel, ctaHref, highlight }) {
  return (
    <div className="spotlight">
      {highlight ? <span className="card-badge">{highlight}</span> : null}
      <div>
        <h3>{title}</h3>
        <p className="muted">{description}</p>
      </div>
      <a className="button" href={ctaHref} target="_blank" rel="noreferrer">
        {ctaLabel}
      </a>
    </div>
  );
}
