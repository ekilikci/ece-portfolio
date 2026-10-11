"use client";

import { useState } from "react";

const entities = [
  { name: "questions", grain: "One canonical question", fields: ["question_id · PK", "canonical_question_tr", "question_type", "timeliness_type", "manual_review_required"], reason: "Model the viewer’s question independently from the words used to search for it. Merge phrases only when the viewer expects substantially the same answer." },
  { name: "question_search_term_mappings", grain: "One question × search term", fields: ["question_id · FK", "search_term_id · FK", "Composite key candidate"], reason: "A bridge keeps the many-to-many relationship explicit: several phrases can express a question, and a phrase can relate to multiple questions." },
  { name: "search_terms", grain: "One normalized phrase per language", fields: ["search_term_id · PK", "normalized_search_text", "language"], reason: "Candidate uniqueness is (normalized_search_text, language). Turkish-first discovery does not require discarding language context upstream." },
  { name: "question_video_matches", grain: "One question × video", fields: ["question_id · FK", "video_id · FK", "relevance_rank · 1–5", "direct_competitor / related_inspiration"], reason: "Separate direct competition from related inspiration. Unique question/video pairs prevent the same evidence being counted twice." },
  { name: "videos", grain: "One YouTube video", fields: ["video_id · PK", "channel_id · FK"], reason: "Use stable YouTube identifiers for entities. One channel publishes many videos; the question/video bridge connects those videos to the opportunity model." },
  { name: "video_metric_snapshots", grain: "One video × capture timestamp", fields: ["video_id · FK", "captured_at", "Unique: video_id + captured_at"], reason: "Append observations instead of overwriting history. A time-aware model supports velocity and change, rather than comparing only current totals." },
];

export default function DataModel() {
  const [selected, setSelected] = useState(0);
  return <figure className="model-figure">
    <figcaption><div><p className="eyebrow">INSIDE THE MODEL</p><h4>One question. Multiple signals.</h4></div><span className="status">V1 architecture design</span></figcaption>
    <p className="model-intro">Selected entities from the documented model. Choose a table to explore its grain and the decision behind it.</p>
    <div className="model-grid" aria-label="Explore data model tables">
      {entities.map((entity, i) => <button key={entity.name} className="entity" aria-pressed={selected === i} aria-controls="model-decision" onClick={() => setSelected(i)}>
        <span className="entity-name">{entity.name}</span><span className="entity-grain">{entity.grain}</span>
        <span className="entity-fields">{entity.fields.map(field => <span key={field}>{field}</span>)}</span>
      </button>)}
    </div>
    <div className="model-relations"><span>questions 1 → N mappings N ← 1 search_terms</span><span>questions 1 → N matches N ← 1 videos</span><span>videos 1 → N metric snapshots</span></div>
    <div className="model-decision" id="model-decision" aria-live="polite"><span className="eyebrow">WHY THIS SHAPE?</span><h5>{entities[selected].name}</h5><p>{entities[selected].reason}</p></div>
    <div className="model-layers"><span>Immutable raw payloads</span><b aria-hidden="true">→</b><span>Staging & enrichment</span><b aria-hidden="true">→</b><span>Semantic models</span><b aria-hidden="true">→</b><span>Dashboard</span></div>
    <p className="model-footnote">Design principles: preserve missing evidence as unknown; record AI classification provenance; serve the dashboard only from semantic models. This diagram describes the intended V1 architecture, not a claim that every component is implemented.</p>
  </figure>;
}
