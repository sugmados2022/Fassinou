import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/hero-vitrago_b6d885aa.webp";
const logoImage = "/manus-storage/logo-vitrago_16478aba.webp";

const benefits = [
  { icon: Sun, title: "Lumière maximale", copy: "Éliminez la poussière et la grisaille" },
  { icon: ShieldCheck, title: "Sécurité", copy: "Évitez les échelles, on s’occupe de tout" },
  { icon: Sparkles, title: "Longévité", copy: "Protégez vos thermos et vos cadres" },
  { icon: Droplets, title: "Look professionnel", copy: "Une maison qui brille, c’est une fierté" },
];

const reviews = [
  { quote: "Ils sont venus chez moi et ont fait un très beau travail. Souriants, ponctuels et respectueux. Je vous les conseille fortement!", name: "Nataly Dutruel", place: "Jésuites" },
  { quote: "Service impeccable, tarifs abordables, ponctuel et souci du détail. Des qualités indéniables pour une réussite en affaires.", name: "Daniel Langlois", place: "Bourg-Royal" },
  { quote: "Yes Alex est très professionnel et il fait de la belle job! Je le recommande sans hésitation.", name: "Richard Talbot", place: "Québec" },
];

const faqs = [
  ["Combien coûte un lavage de vitres résidentiel à Québec?", "Le prix varie selon le nombre de vitres, le type de maison et le service choisi. Demandez votre soumission gratuite pour obtenir un prix exact en quelques minutes."],
  ["Quelle est votre zone de service à Québec et Lévis?", "Nous desservons toute la grande région de Québec et Lévis dans un rayon de 30 km, incluant Sainte-Foy, Cap-Rouge, Sillery, Charlesbourg, Beauport et Limoilou."],
  ["Quelle est la différence entre l’eau purifiée et le squeegee?", "L’eau déminéralisée est idéale pour l’extérieur : elle sèche sans laisser de traces. Le squeegee traditionnel est utilisé pour l’intérieur, avec une précision impeccable."],
  ["Est-ce que vous offrez une garantie de satisfaction?", "Oui. Si vous trouvez une tache ou un défaut après notre passage, nous revenons dans les 24 heures sans frais supplémentaires."],
];

function QuoteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="quote-title">
      <div className="quote-modal">
        <button className="modal-close" onClick={onClose} aria-label="Fermer"><X size={20} /></button>
        <div className="eyebrow">C’est gratuit et sans engagement</div>
        <h2 id="quote-title">Obtenez votre soumission</h2>
        <p>Quelques détails suffisent pour commencer. Nous vous répondrons rapidement.</p>
        <form onSubmit={(event) => { event.preventDefault(); onClose(); }}>
          <label>Votre nom<input required placeholder="Marie Tremblay" /></label>
          <label>Votre téléphone<input required type="tel" placeholder="(418) 000-0000" /></label>
          <label>Votre besoin<select defaultValue=""><option value="" disabled>Choisissez un service</option><option>Résidentiel intérieur</option><option>Résidentiel extérieur</option><option>Intérieur et extérieur</option><option>Commercial</option></select></label>
          <button className="button button-primary button-full" type="submit">Recevoir ma soumission <ArrowRight size={16} /></button>
        </form>
        <div className="modal-note"><ShieldCheck size={15} /> Aucun engagement, jamais de pression</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);
  const openQuote = () => { setQuoteOpen(true); closeMenu(); };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="VitraGo accueil">
          <img src={logoImage} alt="VitraGo" />
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
          <a href="#avantages" onClick={closeMenu}>Avantages</a>
          <a href="#methode" onClick={closeMenu}>Notre méthode</a>
          <a href="#temoignages" onClick={closeMenu}>Témoignages</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="phone-link" href="tel:+14182719362"><Phone size={13} /> (418) 271-9362</a>
          <button className="button button-small button-primary" onClick={openQuote}>Soumission gratuite</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main>
        <section id="accueil" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="review-pill"><span className="google-g">G</span><strong>4.9</strong><span className="tiny-stars">★★★★★</span><span>431+ clients satisfaits depuis 2025</span></div>
            <h1>Vos fenêtres sont sales? <span>On s’en occupe!</span></h1>
            <p>L’entreprise de lavage de vitres la mieux cotée à Québec et Lévis. Plusieurs centaines de clients satisfaits, un résultat impeccable et une garantie de satisfaction.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={openQuote}>Obtenir ma soumission gratuite <ArrowRight size={16} /></button>
              <a className="hero-phone" href="tel:+14182719362">Ou appelez : (418) 271-9362</a>
            </div>
          </div>
          <a className="scroll-cue" href="#avantages" aria-label="Découvrir les avantages"><span>Découvrez</span><ArrowDown size={17} /></a>
        </section>

        <section id="avantages" className="section benefits-section">
          <div className="section-heading centered">
            <div className="eyebrow">Pourquoi nettoyer vos vitres?</div>
            <h2>Des vitres propres, c’est bien plus qu’un nettoyage</h2>
            <p>Un geste simple pour une maison plus lumineuse, plus saine et plus agréable à vivre.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, copy }) => (
              <article className="benefit-card" key={title}>
                <div className="icon-box"><Icon size={22} strokeWidth={1.8} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-band">
          <div className="service-band-copy">
            <div className="eyebrow">Zone de service</div>
            <h2>Lavage de vitres à Québec et Lévis</h2>
            <p>Nous redonnons vie à vos fenêtres résidentielles et commerciales avec une précision chirurgicale dans un rayon de 30 km.</p>
            <div className="service-list"><span><Check size={14} /> Sainte-Foy, Cap-Rouge, Sillery</span><span><Check size={14} /> Charlesbourg, Beauport, Limoilou</span><span><Check size={14} /> Lévis, Saint-Nicolas, Saint-Romuald</span><span><Check size={14} /> Et tous les quartiers environnants!</span></div>
            <button className="text-button" onClick={openQuote}>Obtenir ma soumission <ArrowRight size={16} /></button>
          </div>
          <div className="service-map"><div className="map-orbit map-orbit-large" /><div className="map-orbit map-orbit-small" /><div className="map-pin"><Droplets size={19} /></div><div className="map-label">Rayon de 30 km</div><div className="map-city city-qc">QUÉBEC</div><div className="map-city city-levis">LÉVIS</div></div>
        </section>

        <section id="methode" className="section method-section">
          <div className="section-heading centered"><div className="eyebrow">Notre expertise</div><h2>La méthode VitraGo</h2><p>Une technique adaptée à chaque situation pour des résultats impeccables.</p></div>
          <div className="method-grid">
            <article className="method-card method-card-dark"><div className="method-art art-purified"><div className="bubble bubble-one" /><div className="bubble bubble-two" /><Droplets size={44} strokeWidth={1.2} /></div><div className="method-copy"><span className="method-kicker">Extérieur</span><h3>Eau purifiée</h3><p>Technologie d’eau déminéralisée pour un séchage sans traces, même au soleil. Écologique et sans produits chimiques.</p><span className="method-detail"><Check size={15} /> Séchage naturel sans traces</span><span className="method-detail"><Check size={15} /> Idéal pour les grandes surfaces</span></div></article>
            <article className="method-card"><div className="method-art art-squeegee"><div className="window-frame"><span /><span /><span /><span /></div><div className="squeegee-line" /></div><div className="method-copy"><span className="method-kicker">Intérieur</span><h3>Traditionnel au squeegee</h3><p>L’expertise manuelle au squeegee et mop pour une finition impeccable sans éclaboussures.</p><span className="method-detail"><Check size={15} /> Précision millimétrique</span><span className="method-detail"><Check size={15} /> Protection de vos meubles</span></div></article>
          </div>
          <div className="plus-card"><Sparkles size={21} /><p><strong>Le petit plus VitraGo</strong><br /><span>Nettoyage des rails et cadrages inclus</span> avec chaque service. Moustiquaires en option pour une propreté totale.</p><button className="text-button" onClick={openQuote}>Demander ma soumission <ArrowRight size={16} /></button></div>
        </section>

        <section id="temoignages" className="section reviews-section">
          <div className="section-heading centered"><div className="eyebrow">Résultats garantis</div><h2>La différence VitraGo</h2><p>De vrais avis de vrais clients satisfaits.</p></div>
          <div className="stats-row"><div><strong>500<span>+</span></strong><small>Vitres lavées depuis 2025</small></div><div><strong>431<span>+</span></strong><small>Clients satisfaits</small></div><div><strong>0</strong><small>Client insatisfait</small></div></div>
          <div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="stars">★★★★★</div><p>“{review.quote}”</p><div className="review-author"><span className="avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.place}</small></span></div></article>)}</div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="faq-layout"><div className="section-heading"><div className="eyebrow">Questions fréquentes</div><h2>Tout ce que vous devez savoir</h2><p>Besoin d’un renseignement avant de réserver? Nous avons les réponses.</p><a className="text-button" href="tel:+14182719362">Parler à un expert <Phone size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item is-open" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div>
        </section>

        <section className="final-cta"><div className="final-cta-inner"><div className="eyebrow">Satisfaction garantie</div><h2>Nettoyage de vitres garanti.<br /><span>Zéro risque.</span></h2><p>Si vous trouvez une tache après notre passage, on revient dans les 24h sans frais. C’est la promesse VitraGo.</p><div className="guarantees"><span><ShieldCheck size={17} /> Retour gratuit 24h</span><span><Clock3 size={17} /> Aucun engagement</span></div><button className="button button-primary" onClick={openQuote}>Obtenir ma soumission gratuite <ArrowRight size={16} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><div><a className="brand footer-brand" href="#accueil"><img src={logoImage} alt="VitraGo" /></a><p>Service professionnel de nettoyage de vitres résidentiel et commercial dans la grande région de Québec et Lévis.</p></div><div className="footer-column"><h4>Services</h4><a href="#methode">Lavage résidentiel</a><a href="#methode">Lavage commercial</a><a href="#accueil" onClick={openQuote}>Soumission résidentielle</a></div><div className="footer-column"><h4>Contact</h4><a href="tel:+14182719362">(418) 271-9362</a><a href="mailto:alexandre@vitrago.net">alexandre@vitrago.net</a><span>Québec et Lévis<br />Rayon de 30 km</span></div></div><div className="footer-bottom"><span>© 2025 VitraGo. Tous droits réservés.</span><span>Fait pour des fenêtres qui brillent.</span></div></footer>
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}
