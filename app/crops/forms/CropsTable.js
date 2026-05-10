"use client";

import { useCallback, useState } from "react";

// ── Supabase config ────────────────────────────────────────────────────────────
const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_ANON_KEY";
const TABLE_NAME = "crops";

// ── Variety lists per crop ─────────────────────────────────────────────────────
const VARIETY_MAP = {
  Wheat: [
    "BARI Gom-25",
    "BARI Gom-26",
    "BARI Gom-28",
    "BARI Gom-30",
    "BARI Gom-32",
    "BAW-1143",
    "Sourav",
    "Shatabdi",
  ],
  Mustard: [
    "BARI Sarisha-14",
    "BARI Sarisha-15",
    "BARI Sarisha-17",
    "BINA Sarisha-4",
    "Tori-7",
  ],
  Paddy: [
    "BR-11",
    "BRRI dhan28",
    "BRRI dhan29",
    "BRRI dhan48",
    "BRRI dhan63",
    "BRRI dhan74",
    "Binadhan-7",
  ],
  Jute: ["CVL-1", "O-9897", "BJC-83", "BJRI Tossa Pat-7", "BJRI Deshi Pat-8"],
};
const DEFAULT_VARIETIES = ["Local variety", "Other"];

function getVarieties(cropName) {
  return [...(VARIETY_MAP[cropName] || []), ...DEFAULT_VARIETIES];
}

// ── Sample data ────────────────────────────────────────────────────────────────
const INITIAL_DATA = [
  {
    id: "rec-001",
    f_year: "2025-26",
    crop_session: "robi",
    upazilaId: "Savar",
    crop_name: "Wheat",
    category: "seedbed",
    target: 1500,
    varieties: [],
  },
  {
    id: "rec-002",
    f_year: "2025-26",
    crop_session: "robi",
    upazilaId: "Dhamrai",
    crop_name: "Mustard",
    category: "field",
    target: 900,
    varieties: [
      { name: "BARI Sarisha-14", achievement: 500 },
      { name: "BARI Sarisha-15", achievement: 320 },
    ],
  },
  {
    id: "rec-003",
    f_year: "2024-25",
    crop_session: "kharif",
    upazilaId: "Keraniganj",
    crop_name: "Paddy",
    category: "seedbed",
    target: 3200,
    varieties: [],
  },
  {
    id: "rec-004",
    f_year: "2025-26",
    crop_session: "kharif",
    upazilaId: "Nawabganj",
    crop_name: "Jute",
    category: "field",
    target: 680,
    varieties: [],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
function calcTotal(varieties) {
  return varieties.reduce((s, v) => s + (parseFloat(v.achievement) || 0), 0);
}

function pctColor(pct) {
  if (pct >= 100) return "#1D9E75";
  if (pct >= 60) return "#BA7517";
  return "#D85A30";
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function Toast({ message, type, visible }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        background: "var(--color-bg, #fff)",
        border: `1px solid ${type === "success" ? "#5DCAA5" : "#F09595"}`,
        color: type === "success" ? "#085041" : "#791F1F",
        borderRadius: 8,
        padding: "10px 16px",
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        gap: 8,
        zIndex: 300,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        opacity: visible ? 1 : 0,
        transition: "all .25s",
        pointerEvents: "none",
      }}
    >
      <span>{type === "success" ? "✓" : "⚠"}</span>
      {message}
    </div>
  );
}

function Badge({ session }) {
  const styles = {
    robi: { background: "#E1F5EE", color: "#085041" },
    kharif: { background: "#FAEEDA", color: "#633806" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 11,
        fontWeight: 500,
        ...(styles[session] || { background: "#F1EFE8", color: "#444441" }),
      }}
    >
      {session}
    </span>
  );
}

function IconButton({ onClick, title, hoverColor, hoverBorder, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      title={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: 6,
        border: `0.5px solid ${hovered && hoverBorder ? hoverBorder : "#ccc"}`,
        background: "transparent",
        cursor: "pointer",
        color: hovered && hoverColor ? hoverColor : "#888",
        fontSize: 15,
        transition: "all .15s",
      }}
    >
      {children}
    </button>
  );
}

function ProgressBar({ value, target }) {
  const pct = target ? Math.min(Math.round((value / target) * 100), 100) : 0;
  const rawPct = target ? Math.round((value / target) * 100) : 0;
  const color = pctColor(rawPct);
  return (
    <div
      style={{
        marginTop: 16,
        padding: 12,
        background: "#fff",
        borderRadius: 8,
        border: "0.5px solid #e5e5e5",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#888",
          marginBottom: 6,
        }}
      >
        <span>Achievement</span>
        <span style={{ fontWeight: 500, color }}>{rawPct}%</span>
      </div>
      <div
        style={{
          height: 8,
          background: "#eee",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 4,
            width: `${pct}%`,
            background: color,
            transition: "width .3s, background .3s",
          }}
        />
      </div>
      <div style={{ fontSize: 11, color: "#aaa", marginTop: 5 }}>
        {value.toLocaleString()} / {target.toLocaleString()} ha
      </div>
    </div>
  );
}

// ── Variety row inside edit form ───────────────────────────────────────────────
function VarietyRow({ row, index, cropName, usedNames, onChange, onRemove }) {
  const allVarieties = getVarieties(cropName);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 130px 32px",
        gap: 8,
        alignItems: "center",
        padding: "10px 12px",
        background: "#f9f9f9",
        borderRadius: 8,
        border: "0.5px solid #e5e5e5",
      }}
    >
      <select
        value={row.name}
        aria-label="Variety name"
        onChange={(e) => onChange(index, "name", e.target.value)}
        style={{
          width: "100%",
          padding: "6px 8px",
          fontSize: 13,
          border: "0.5px solid #ccc",
          borderRadius: 6,
          background: "#fff",
          color: "#222",
          outline: "none",
        }}
      >
        <option value="">— select variety —</option>
        {allVarieties.map((v) => (
          <option
            key={v}
            value={v}
            disabled={usedNames.includes(v) && v !== row.name}
          >
            {v}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={row.achievement}
        min={0}
        step={0.01}
        placeholder="0.00"
        aria-label="Achievement in hectares"
        onChange={(e) =>
          onChange(index, "achievement", parseFloat(e.target.value) || 0)
        }
        style={{
          width: "100%",
          padding: "6px 8px",
          fontSize: 13,
          border: "0.5px solid #ccc",
          borderRadius: 6,
          background: "#fff",
          color: "#222",
          outline: "none",
        }}
      />

      <button
        onClick={() => onRemove(index)}
        aria-label="Remove row"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 6,
          border: "0.5px solid #ccc",
          background: "transparent",
          cursor: "pointer",
          color: "#999",
          fontSize: 14,
          transition: "all .15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#A32D2D";
          e.currentTarget.style.borderColor = "#F09595";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#999";
          e.currentTarget.style.borderColor = "#ccc";
        }}
      >
        ✕
      </button>
    </div>
  );
}

// ── View Modal ─────────────────────────────────────────────────────────────────
function ViewModal({ item, onClose, onEdit }) {
  const total = calcTotal(item.varieties || []);
  const pct = item.target ? Math.round((total / item.target) * 100) : 0;
  const color = pctColor(pct);
  const hasVarieties = item.varieties && item.varieties.length > 0;
  const printedAt = new Date().toLocaleString("en-BD", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const handlePrint = () => {
    const printStyles = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'DM Sans', sans-serif; color: #1a1a1a; background: #fff; }
      @page { margin: 18mm 16mm; size: A4; }
      .print-wrap { max-width: 700px; margin: 0 auto; padding: 0; }
      .print-header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 18px; border-bottom: 2px solid #1D9E75; margin-bottom: 24px; }
      .print-org { font-family: 'Noto Serif', serif; }
      .print-org-name { font-size: 20px; font-weight: 700; color: #0F6E56; letter-spacing: -0.3px; }
      .print-org-sub { font-size: 11px; color: #888; margin-top: 2px; }
      .print-meta { text-align: right; font-size: 11px; color: #888; line-height: 1.7; }
      .print-title { font-family: 'Noto Serif', serif; font-size: 17px; font-weight: 700; color: #111; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 0.5px solid #e5e5e5; }
      .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; margin-bottom: 24px; }
      .info-item { display: flex; flex-direction: column; gap: 2px; }
      .info-label { font-size: 10px; text-transform: uppercase; letter-spacing: .06em; color: #999; font-weight: 600; }
      .info-value { font-size: 13px; font-weight: 500; color: #222; }
      .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: .07em; color: #888; font-weight: 600; margin-bottom: 10px; }
      .variety-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px; }
      .variety-table th { padding: 8px 12px; background: #f5f5f5; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: #666; text-align: left; border: 0.5px solid #e0e0e0; }
      .variety-table td { padding: 9px 12px; border: 0.5px solid #e8e8e8; color: #333; }
      .variety-table tr:nth-child(even) td { background: #fafafa; }
      .variety-table .total-row td { background: #f0f9f5; font-weight: 600; border-top: 1.5px solid #1D9E75; color: #0F6E56; }
      .progress-section { margin-bottom: 24px; }
      .progress-bg { height: 10px; background: #eee; border-radius: 5px; overflow: hidden; margin: 8px 0; }
      .progress-fill { height: 100%; border-radius: 5px; }
      .progress-labels { display: flex; justify-content: space-between; font-size: 11px; color: #888; }
      .status-badge { display: inline-block; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; }
      .status-robi { background: #E1F5EE; color: #085041; }
      .status-kharif { background: #FAEEDA; color: #633806; }
      .summary-box { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 24px; }
      .summary-card { padding: 12px 14px; background: #f9f9f9; border-radius: 8px; border: 0.5px solid #e5e5e5; }
      .summary-card-label { font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: .05em; font-weight: 600; margin-bottom: 4px; }
      .summary-card-val { font-size: 18px; font-weight: 600; }
      .print-footer { margin-top: 32px; padding-top: 12px; border-top: 0.5px solid #e5e5e5; display: flex; justify-content: space-between; font-size: 10px; color: #bbb; }
      .no-variety { padding: 16px; text-align: center; color: #aaa; font-size: 13px; border: 0.5px dashed #ddd; border-radius: 8px; }
    `;

    const varietyRows = hasVarieties
      ? item.varieties
          .map(
            (v, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${v.name}</td>
            <td>${(v.achievement || 0).toLocaleString()} ha</td>
            <td>${item.target ? Math.round((v.achievement / item.target) * 100) : 0}%</td>
          </tr>`,
          )
          .join("") +
        `<tr class="total-row">
          <td colspan="2">Total</td>
          <td>${total.toLocaleString()} ha</td>
          <td>${pct}%</td>
        </tr>`
      : `<tr><td colspan="4" style="text-align:center;color:#aaa;padding:16px">No variety data recorded</td></tr>`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Crop Record — ${item.crop_name} | ${item.upazilaId}</title>
  <style>${printStyles}</style>
</head>
<body>
  <div class="print-wrap">
    <div class="print-header">
      <div class="print-org">
        <div class="print-org-name">Department of Agricultural Extension</div>
        <div class="print-org-sub">Government of Bangladesh · Crop Achievement Report</div>
      </div>
      <div class="print-meta">
        Printed: ${printedAt}<br/>
        Record ID: ${item.id}
      </div>
    </div>

    <div class="print-title">Crop Achievement Record — ${item.crop_name}, ${item.upazilaId}</div>

    <div class="info-grid">
      <div class="info-item"><span class="info-label">Financial Year</span><span class="info-value">${item.f_year}</span></div>
      <div class="info-item"><span class="info-label">Crop Session</span><span class="info-value"><span class="status-badge status-${item.crop_session}">${item.crop_session}</span></span></div>
      <div class="info-item"><span class="info-label">Upazila</span><span class="info-value">${item.upazilaId}</span></div>
      <div class="info-item"><span class="info-label">Crop Name</span><span class="info-value">${item.crop_name}</span></div>
      <div class="info-item"><span class="info-label">Category</span><span class="info-value" style="text-transform:capitalize">${item.category || "—"}</span></div>
      <div class="info-item"><span class="info-label">Total Target</span><span class="info-value">${(item.target || 0).toLocaleString()} ha</span></div>
    </div>

    <div class="summary-box">
      <div class="summary-card">
        <div class="summary-card-label">Target</div>
        <div class="summary-card-val">${(item.target || 0).toLocaleString()} <span style="font-size:12px;font-weight:400;color:#999">ha</span></div>
      </div>
      <div class="summary-card">
        <div class="summary-card-label">Achievement</div>
        <div class="summary-card-val" style="color:${color}">${total.toLocaleString()} <span style="font-size:12px;font-weight:400;color:#999">ha</span></div>
      </div>
      <div class="summary-card">
        <div class="summary-card-label">Progress</div>
        <div class="summary-card-val" style="color:${color}">${pct}%</div>
      </div>
    </div>

    <div class="progress-section">
      <div class="section-title">Achievement vs Target</div>
      <div class="progress-bg">
        <div class="progress-fill" style="width:${Math.min(pct, 100)}%;background:${color}"></div>
      </div>
      <div class="progress-labels"><span>0</span><span>${(item.target || 0).toLocaleString()} ha</span></div>
    </div>

    <div class="section-title">Variety-wise breakdown</div>
    <table class="variety-table">
      <thead>
        <tr><th>#</th><th>Variety name</th><th>Achievement (ha)</th><th>Share of target</th></tr>
      </thead>
      <tbody>${varietyRows}</tbody>
    </table>

    <div class="print-footer">
      <span>Department of Agricultural Extension — Bangladesh</span>
      <span>Generated by Crop Management System</span>
    </div>
  </div>
</body>
</html>`;

    const win = window.open("", "_blank", "width=860,height=700");
    win.document.write(html);
    win.document.close();
    win.onload = () => {
      win.focus();
      win.print();
    };
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          border: "0.5px solid #e0e0e0",
          width: "min(680px, 96vw)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Modal header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "0.5px solid #f0f0f0",
            background: "#fafafa",
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>
              {item.crop_name} — {item.upazilaId}
            </div>
            <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
              {item.f_year} · {item.crop_session} season · ID: {item.id}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              border: "0.5px solid #ddd",
              background: "#fff",
              cursor: "pointer",
              fontSize: 16,
              color: "#888",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", flex: 1, padding: "20px" }}>
          {/* Info grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
              marginBottom: 20,
            }}
          >
            {[
              ["Financial Year", item.f_year],
              ["Session", item.crop_session],
              ["Upazila", item.upazilaId],
              ["Crop Name", item.crop_name],
              ["Category", item.category || "—"],
              ["Record ID", item.id],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "10px 12px",
                  background: "#f9f9f9",
                  borderRadius: 8,
                  border: "0.5px solid #efefef",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#222",
                    wordBreak: "break-all",
                  }}
                >
                  {label === "Session" ? (
                    <span
                      style={{
                        display: "inline-block",
                        padding: "1px 8px",
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 600,
                        ...(value === "robi"
                          ? { background: "#E1F5EE", color: "#085041" }
                          : { background: "#FAEEDA", color: "#633806" }),
                      }}
                    >
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 10,
              marginBottom: 20,
            }}
          >
            {[
              {
                label: "Target",
                value: `${(item.target || 0).toLocaleString()} ha`,
                c: "#185FA5",
              },
              {
                label: "Achievement",
                value: hasVarieties
                  ? `${total.toLocaleString()} ha`
                  : "Pending",
                c: hasVarieties ? color : "#D85A30",
              },
              {
                label: "Progress",
                value: hasVarieties ? `${pct}%` : "—",
                c: hasVarieties ? color : "#aaa",
              },
            ].map(({ label, value, c }) => (
              <div
                key={label}
                style={{
                  padding: "14px",
                  background: "#fff",
                  borderRadius: 10,
                  border: "0.5px solid #e5e5e5",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 22, fontWeight: 600, color: c }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          {hasVarieties && (
            <div style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  color: "#999",
                  marginBottom: 6,
                }}
              >
                <span style={{ fontWeight: 500, color: "#555" }}>
                  Achievement vs Target
                </span>
                <span style={{ fontWeight: 600, color }}>{pct}%</span>
              </div>
              <div
                style={{
                  height: 10,
                  background: "#eee",
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.min(pct, 100)}%`,
                    background: color,
                    borderRadius: 5,
                    transition: "width .4s",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10,
                  color: "#ccc",
                  marginTop: 4,
                }}
              >
                <span>0 ha</span>
                <span>{(item.target || 0).toLocaleString()} ha</span>
              </div>
            </div>
          )}

          {/* Variety table */}
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: ".06em",
              color: "#aaa",
              marginBottom: 10,
            }}
          >
            Variety-wise breakdown
          </div>
          {hasVarieties ? (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}
            >
              <thead>
                <tr style={{ background: "#f5f5f5" }}>
                  {[
                    "#",
                    "Variety name",
                    "Achievement (ha)",
                    "Share of target",
                  ].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "9px 12px",
                        textAlign: h === "#" ? "center" : "left",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#777",
                        textTransform: "uppercase",
                        letterSpacing: ".04em",
                        border: "0.5px solid #ebebeb",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.varieties.map((v, i) => {
                  const share = item.target
                    ? Math.round((v.achievement / item.target) * 100)
                    : 0;
                  return (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}
                    >
                      <td
                        style={{
                          padding: "9px 12px",
                          border: "0.5px solid #efefef",
                          textAlign: "center",
                          color: "#aaa",
                        }}
                      >
                        {i + 1}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          border: "0.5px solid #efefef",
                          fontWeight: 500,
                        }}
                      >
                        {v.name}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          border: "0.5px solid #efefef",
                        }}
                      >
                        {(v.achievement || 0).toLocaleString()}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          border: "0.5px solid #efefef",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <div
                            style={{
                              flex: 1,
                              height: 5,
                              background: "#eee",
                              borderRadius: 3,
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                width: `${Math.min(share, 100)}%`,
                                height: "100%",
                                background: "#1D9E75",
                                borderRadius: 3,
                              }}
                            />
                          </div>
                          <span
                            style={{
                              fontSize: 11,
                              color: "#777",
                              minWidth: 30,
                            }}
                          >
                            {share}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {/* Total row */}
                <tr style={{ background: "#f0f9f5" }}>
                  <td
                    colSpan={2}
                    style={{
                      padding: "10px 12px",
                      border: "0.5px solid #d0eadf",
                      fontWeight: 600,
                      color: "#0F6E56",
                    }}
                  >
                    Total
                  </td>
                  <td
                    style={{
                      padding: "10px 12px",
                      border: "0.5px solid #d0eadf",
                      fontWeight: 600,
                      color: "#0F6E56",
                    }}
                  >
                    {total.toLocaleString()}
                  </td>
                  <td
                    style={{
                      padding: "10px 12px",
                      border: "0.5px solid #d0eadf",
                      fontWeight: 600,
                      color: "#0F6E56",
                    }}
                  >
                    {pct}%
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div
              style={{
                padding: 24,
                textAlign: "center",
                color: "#ccc",
                border: "0.5px dashed #ddd",
                borderRadius: 8,
                fontSize: 13,
              }}
            >
              No variety data recorded yet
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            borderTop: "0.5px solid #f0f0f0",
            background: "#fafafa",
            flexShrink: 0,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "7px 16px",
              borderRadius: 8,
              fontSize: 13,
              border: "0.5px solid #ddd",
              background: "#fff",
              cursor: "pointer",
              color: "#555",
            }}
          >
            Close
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                onClose();
                onEdit();
              }}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                fontSize: 13,
                border: "0.5px solid #85B7EB",
                background: "#EBF4FF",
                cursor: "pointer",
                color: "#185FA5",
                fontWeight: 500,
              }}
            >
              ✏ Edit record
            </button>
            <button
              onClick={handlePrint}
              style={{
                padding: "7px 18px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                border: "1px solid #0F6E56",
                background: "#0F6E56",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              🖨 Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Edit Modal ─────────────────────────────────────────────────────────────────
function EditModal({ item, onClose, onSave }) {
  const [rows, setRows] = useState(
    (item.varieties || []).map((v) => ({
      name: v.name,
      achievement: v.achievement,
    })),
  );
  const [saving, setSaving] = useState(false);

  const total = calcTotal(rows);
  const pct = item.target ? Math.round((total / item.target) * 100) : 0;
  const overTarget = total > item.target;

  const usedNames = rows.map((r) => r.name);

  const handleChange = useCallback((idx, field, value) => {
    setRows((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, [field]: value } : r)),
    );
  }, []);

  const handleRemove = useCallback((idx) => {
    setRows((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const handleAdd = () => {
    const opts = getVarieties(item.crop_name);
    const next = opts.find((v) => !usedNames.includes(v)) || "";
    setRows((prev) => [...prev, { name: next, achievement: 0 }]);
  };

  const handleSave = async () => {
    if (rows.some((r) => !r.name)) return;
    setSaving(true);
    const payload = {
      varieties: rows,
      achievement_total: total,
      updated_at: new Date().toISOString(),
    };
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?id=eq.${item.id}`,
        {
          method: "PATCH",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) throw new Error("Supabase error");
      onSave(item.id, rows, total);
    } catch {
      // demo fallback
      onSave(item.id, rows, total);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          border: "0.5px solid #e5e5e5",
          width: "min(800px, 96vw)",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            borderBottom: "0.5px solid #e5e5e5",
            flexShrink: 0,
          }}
        >
          <h2 style={{ fontSize: 15, fontWeight: 500, margin: 0 }}>
            Edit achievement — {item.crop_name}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 28,
              height: 28,
              borderRadius: 6,
              border: "0.5px solid #ccc",
              background: "transparent",
              cursor: "pointer",
              fontSize: 16,
              color: "#888",
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            flex: 1,
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {/* Left — record details */}
          <div
            style={{
              padding: "20px 16px",
              borderRight: "0.5px solid #e5e5e5",
              background: "#f9f9f9",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".05em",
                color: "#999",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Record details
            </div>
            {[
              ["Financial year", item.f_year],
              ["Session", item.crop_session],
              ["Upazila", item.upazilaId],
              ["Crop name", item.crop_name],
              ["Category", item.category || "—"],
              ["Target", `${(item.target || 0).toLocaleString()} ha`],
            ].map(([k, v]) => (
              <div key={k} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, color: "#aaa" }}>{k}</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
            <ProgressBar value={total} target={item.target} />
          </div>

          {/* Right — variety form */}
          <div style={{ padding: "20px", overflowY: "auto" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".05em",
                color: "#999",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Variety-wise achievement
            </div>

            {/* Column headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 130px 32px",
                gap: 8,
                padding: "0 12px",
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 11, color: "#aaa" }}>Variety name</span>
              <span style={{ fontSize: 11, color: "#aaa" }}>
                Achievement (ha)
              </span>
              <span />
            </div>

            {/* Rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 12,
              }}
            >
              {rows.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "24px 0",
                    color: "#bbb",
                    fontSize: 13,
                  }}
                >
                  No varieties added yet
                </div>
              ) : (
                rows.map((row, i) => (
                  <VarietyRow
                    key={i}
                    row={row}
                    index={i}
                    cropName={item.crop_name}
                    usedNames={usedNames.filter((_, idx) => idx !== i)}
                    onChange={handleChange}
                    onRemove={handleRemove}
                  />
                ))
              )}
            </div>

            {/* Add button */}
            <button
              onClick={handleAdd}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                width: "100%",
                padding: "8px 12px",
                borderRadius: 8,
                border: "0.5px dashed #ccc",
                background: "transparent",
                cursor: "pointer",
                fontSize: 13,
                color: "#888",
                transition: "all .15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#378ADD";
                e.currentTarget.style.color = "#185FA5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ccc";
                e.currentTarget.style.color = "#888";
              }}
            >
              + Add variety
            </button>

            {/* Total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 14px",
                marginTop: 14,
                background: "#f9f9f9",
                borderRadius: 8,
                border: "0.5px solid #e5e5e5",
              }}
            >
              <span style={{ fontSize: 13, color: "#888" }}>
                Total achievement
              </span>
              <span
                style={{ fontSize: 15, fontWeight: 500, color: pctColor(pct) }}
              >
                {total.toLocaleString()} ha
              </span>
            </div>

            {/* Over-target warning */}
            {overTarget && (
              <div
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#BA7517",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                ⚠ Total exceeds target by {(total - item.target).toFixed(1)} ha
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            padding: "14px 20px",
            borderTop: "0.5px solid #e5e5e5",
            flexShrink: 0,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "7px 16px",
              borderRadius: 8,
              fontSize: 13,
              border: "0.5px solid #ccc",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || rows.some((r) => !r.name)}
            style={{
              padding: "7px 18px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              border: "1px solid #185FA5",
              background: saving ? "#ccc" : "#185FA5",
              color: "#E6F1FB",
              cursor: saving ? "not-allowed" : "pointer",
              opacity: rows.some((r) => !r.name) ? 0.5 : 1,
              transition: "background .15s",
            }}
          >
            {saving ? "Saving…" : "Save to database"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main CropsTable component ──────────────────────────────────────────────────
const CropsTable = ({ label = "Crops Overview", data: externalData }) => {
  const [tableData, setTableData] = useState(externalData || INITIAL_DATA);
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  };

  const handleSave = (id, rows, total) => {
    setTableData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, varieties: rows, achievement_total: total }
          : item,
      ),
    );
    setEditItem(null);
    showToast("Achievement saved successfully", "success");
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Table card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          border: "0.5px solid #e5e5e5",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            borderBottom: "0.5px solid #e5e5e5",
          }}
        >
          <h2 style={{ fontSize: 15, fontWeight: 500, margin: 0 }}>{label}</h2>
          <span style={{ fontSize: 12, color: "#999" }}>
            {tableData.length} records
          </span>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
          >
            <thead>
              <tr style={{ background: "#f9f9f9" }}>
                {[
                  "SL",
                  "Fin. Year",
                  "Session",
                  "Upazila",
                  "Crop Name",
                  "Target",
                  "Achievement",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 14px",
                      textAlign: h === "Actions" ? "center" : "left",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#999",
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                const total = calcTotal(item.varieties || []);
                const pct = item.target
                  ? Math.round((total / item.target) * 100)
                  : 0;
                const hasData = item.varieties && item.varieties.length > 0;

                return (
                  <tr
                    key={item.id}
                    style={{ borderTop: "0.5px solid #f0f0f0" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#fafafa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "")
                    }
                  >
                    <td style={{ padding: "10px 14px" }}>{index + 1}</td>
                    <td style={{ padding: "10px 14px" }}>{item.f_year}</td>
                    <td style={{ padding: "10px 14px" }}>
                      <Badge session={item.crop_session} />
                    </td>
                    <td style={{ padding: "10px 14px" }}>{item.upazilaId}</td>
                    <td style={{ padding: "10px 14px", fontWeight: 500 }}>
                      {item.crop_name}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      {(item.target || 0).toLocaleString()} ha
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      {hasData ? (
                        <span>
                          {total.toLocaleString()} ha{" "}
                          <span style={{ fontSize: 11, color: pctColor(pct) }}>
                            ({pct}%)
                          </span>
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-block",
                            padding: "2px 8px",
                            borderRadius: 4,
                            fontSize: 11,
                            fontWeight: 500,
                            background: "#FCEBEB",
                            color: "#791F1F",
                          }}
                        >
                          Pending
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          justifyContent: "center",
                        }}
                      >
                        <IconButton
                          title="View"
                          hoverColor="#0F6E56"
                          hoverBorder="#5DCAA5"
                          onClick={() => setViewItem(item)}
                        >
                          👁
                        </IconButton>
                        <IconButton
                          title="Edit"
                          hoverColor="#185FA5"
                          hoverBorder="#85B7EB"
                          onClick={() => setEditItem(item)}
                        >
                          ✏
                        </IconButton>
                        <IconButton
                          title="Delete"
                          hoverColor="#A32D2D"
                          hoverBorder="#F09595"
                        >
                          🗑
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {viewItem && (
        <ViewModal
          item={viewItem}
          onClose={() => setViewItem(null)}
          onEdit={() => setEditItem(viewItem)}
        />
      )}

      {/* Edit Modal */}
      {editItem && (
        <EditModal
          item={editItem}
          onClose={() => setEditItem(null)}
          onSave={handleSave}
        />
      )}

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />
    </div>
  );
};

export default CropsTable;
