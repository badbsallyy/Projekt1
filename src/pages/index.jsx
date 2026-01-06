import React from "react";
import "../styles/global.css";
import deals from "../../data/deals.json";
import posts from "../../data/posts.json";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Card, CardSpotlight } from "../components/ui/Card";

export default function HomePage() {
  const latestDeals = deals;
  const featuredDeals = deals.slice(0, 2);

  return (
    <div>
      <Navigation />
      <Hero />

      <section className="section" id="deals">
        <div className="container">
          <h2 className="section-title">Neueste Deals</h2>
          <div className="grid grid-3">
            {latestDeals.map((deal) => (
              <Card
                key={deal.id}
                badge={deal.badge}
                title={deal.title}
                description={deal.description}
                price={deal.price}
                ctaLabel="Deal sichern"
                ctaHref={deal.affiliateUrl}
                footer={
                  <div className="card-footer">
                    <span className="muted">Affiliate-Link</span>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="beste-deals">
        <div className="container">
          <h2 className="section-title">Beste Deals</h2>
          <div className="grid grid-2">
            {featuredDeals.map((deal) => (
              <CardSpotlight
                key={deal.id}
                highlight={deal.badge}
                title={deal.title}
                description={deal.description}
                ctaLabel="Top Deal öffnen"
                ctaHref={deal.affiliateUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <h2 className="section-title">Blog-Artikel</h2>
          <div className="grid grid-3">
            {posts.map((post) => (
              <Card
                key={post.id}
                badge={post.category}
                title={post.title}
                description={post.excerpt}
                ctaLabel="Artikel lesen"
                ctaHref={post.affiliateUrl}
                footer={
                  <div className="card-footer">
                    <span className="muted">{post.date}</span>
                    <span className="muted">Affiliate-Link</span>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
