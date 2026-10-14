import type { EmiCalculationResult } from "@/lib/emi";
import type { LoanTypeConfig } from "@/constants/emiCalculator";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

function money(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

function number(value: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(value);
}

export function downloadEmiOverviewPdf({
  loan, result, interestRate, tenure,
}: { loan: LoanTypeConfig; result: EmiCalculationResult; interestRate: number; tenure: number }) {
  const generatedAt = new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "long", year: "numeric" }).format(new Date());
  const principalPct = result.totalPayment > 0 ? (result.principalAmount / result.totalPayment) * 100 : 0;
  const interestPct = result.totalPayment > 0 ? (result.totalInterest / result.totalPayment) * 100 : 0;
  const rows = result.amortization.map((row) => `
    <tr><td>${row.month}</td><td class="num">${money(row.emi)}</td><td class="num">${money(row.principal)}</td><td class="num">${money(row.interest)}</td><td class="num">${money(row.closingBalance)}</td></tr>`).join("");
  const yearlyRows = Array.from({ length: Math.ceil(tenure / 12) }, (_, index) => {
    const yearRows = result.amortization.slice(index * 12, (index + 1) * 12);
    const principal = yearRows.reduce((sum, row) => sum + row.principal, 0);
    const interest = yearRows.reduce((sum, row) => sum + row.interest, 0);
    const balance = yearRows[yearRows.length - 1]?.closingBalance ?? 0;
    return `<tr class="year-row"><td>Year ${index + 1}</td><td class="num">${money(principal)}</td><td class="num">${money(interest)}</td><td class="num">${money(balance)}</td></tr>`;
  }).join("");

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Perfect Lender - EMI Overview</title>
  <style>
    @page { size:A4; margin:14mm 12mm 16mm; } *{box-sizing:border-box} body{margin:0;color:#17253c;background:#fff;font:10px/1.45 Arial,Helvetica,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .topline{height:5px;margin:0 0 22px;background:linear-gradient(90deg,#2563eb,#06b6d4);border-radius:4px} header{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-bottom:17px;border-bottom:1px solid #dbe5f2}.brand{display:flex;align-items:center;gap:12px}.logo{width:54px;height:54px;object-fit:contain;border-radius:10px}.brand-name{font-size:19px;font-weight:800;letter-spacing:-.5px;color:#10284d}.tagline{margin-top:3px;font-size:8px;color:#5c7190;letter-spacing:1.5px;text-transform:uppercase}.report-tag{text-align:right}.report-tag strong{display:block;font-size:12px;color:#153766}.report-tag span{display:block;margin-top:4px;color:#64748b;font-size:9px}
    h1{margin:23px 0 5px;font-size:22px;letter-spacing:-.6px;color:#10284d}.sub{margin:0 0 18px;color:#64748b;font-size:10px}.hero{padding:19px 20px;border:1px solid #cfe0fa;border-radius:14px;background:linear-gradient(120deg,#f2f7ff,#f4fcff);page-break-inside:avoid}.eyebrow{text-transform:uppercase;font-size:8px;letter-spacing:1.35px;font-weight:bold;color:#3565a5}.emi{margin:5px 0 13px;font-size:31px;line-height:1.1;font-weight:800;letter-spacing:-1px;color:#12356b}.metric-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.metric{border:1px solid #dbe6f5;border-radius:9px;background:#fff;padding:10px;min-width:0}.metric span{display:block;font-size:8px;color:#64748b}.metric strong{display:block;margin-top:4px;font-size:12px;word-break:break-word;color:#13294b}
    .section-title{display:flex;align-items:center;gap:8px;margin:22px 0 10px;font-size:12px;font-weight:800;color:#173860;break-after:avoid}.section-title:before{content:"";display:inline-block;width:4px;height:15px;background:#2563eb;border-radius:4px}.details{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.detail{padding:10px;border:1px solid #e2e8f0;border-radius:9px}.detail small{display:block;color:#64748b;font-size:8px}.detail b{display:block;margin-top:4px;font-size:11px}.composition{border:1px solid #e2e8f0;border-radius:11px;padding:14px;page-break-inside:avoid}.bar{display:flex;overflow:hidden;height:11px;border-radius:20px;background:#eaf0f8;margin:8px 0 12px}.principal{background:#2563eb;height:100%}.interest{background:#06b6d4;height:100%}.legend{display:grid;grid-template-columns:1fr 1fr;gap:12px}.legend .label{font-size:8px;color:#64748b}.legend b{display:block;font-size:11px;margin-top:3px}
    table{width:100%;border-collapse:collapse;font-size:8.5px}thead{display:table-header-group}tr{page-break-inside:avoid}th{padding:8px 7px;text-align:left;color:#fff;background:#173b70;font-size:8px;letter-spacing:.15px}td{padding:6px 7px;border-bottom:1px solid #e8eef6;color:#263850}tbody tr:nth-child(even){background:#f6f9fd}.num{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}.year-row{font-weight:bold;background:#eaf2ff!important}.year-row td{border-top:1px solid #c9dafa;color:#173b70}.table-note{margin:7px 0 0;color:#64748b;font-size:8px}.schedule{break-before:page}.schedule h2{margin-top:0}.footer{margin-top:22px;padding-top:10px;border-top:1px solid #dbe5f2;display:flex;justify-content:space-between;gap:15px;color:#64748b;font-size:8px}.disclaimer{margin-top:12px;padding:10px 12px;background:#f7f9fc;border-radius:8px;color:#63748b;font-size:8px}.print-hint{margin:18px 0;padding:12px;border:1px dashed #93b7e7;border-radius:8px;background:#f1f7ff;color:#244b7f;text-align:center;font-size:12px}
    @media screen{body{max-width:900px;margin:24px auto;padding:0 24px 30px}.print-hint{position:sticky;bottom:12px;box-shadow:0 8px 20px #10284d22}}@media print{.print-hint{display:none}header,.hero,.metric,.detail,.composition{break-inside:avoid}}
  </style></head><body>
  <div class="topline"></div><header><div class="brand"><img class="logo" src="${typeof window !== "undefined" ? `${window.location.origin}/images/logo.png` : "/images/logo.png"}" alt="Perfect Lender logo" onerror="this.style.display='none'"/><div><div class="brand-name">Perfect Lender</div><div class="tagline">Choose Best For You</div></div></div><div class="report-tag"><strong>EMI OVERVIEW</strong><span>Generated on ${escapeHtml(generatedAt)}</span></div></header>
  <h1>Your loan repayment overview</h1><p class="sub">A personalized estimate to help you understand your monthly commitment and total cost of borrowing.</p>
  <section class="hero"><div class="eyebrow">Estimated monthly instalment · ${escapeHtml(loan.label)}</div><div class="emi">${money(result.emi)}</div><div class="metric-grid"><div class="metric"><span>Loan amount / principal</span><strong>${money(result.principalAmount)}</strong></div><div class="metric"><span>Total interest</span><strong>${money(result.totalInterest)}</strong></div><div class="metric"><span>Total repayment</span><strong>${money(result.totalPayment)}</strong></div></div></section>
  <h2 class="section-title">Loan details</h2><section class="details"><div class="detail"><small>Loan type</small><b>${escapeHtml(loan.label)}</b></div><div class="detail"><small>Interest rate</small><b>${number(interestRate)}% p.a.</b></div><div class="detail"><small>Loan tenure</small><b>${tenure} months (${number(tenure / 12)} years)</b></div><div class="detail"><small>Monthly instalment</small><b>${money(result.emi)}</b></div><div class="detail"><small>Principal share</small><b>${principalPct.toFixed(1)}% of total</b></div><div class="detail"><small>Interest share</small><b>${interestPct.toFixed(1)}% of total</b></div></section>
  <h2 class="section-title">Principal vs. interest</h2><section class="composition"><div class="bar"><div class="principal" style="width:${principalPct}%"></div><div class="interest" style="width:${interestPct}%"></div></div><div class="legend"><div><div class="label">● Principal repayment</div><b>${money(result.principalAmount)}</b></div><div><div class="label">● Interest cost</div><b>${money(result.totalInterest)}</b></div></div></section>
  <section class="schedule"><h2 class="section-title">Monthly repayment schedule</h2><table><thead><tr><th>Month</th><th class="num">EMI (₹)</th><th class="num">Principal (₹)</th><th class="num">Interest (₹)</th><th class="num">Balance (₹)</th></tr></thead><tbody>${rows}</tbody></table>
  <h2 class="section-title">Yearly repayment summary</h2><table><thead><tr><th>Period</th><th class="num">Principal repaid (₹)</th><th class="num">Interest paid (₹)</th><th class="num">Closing balance (₹)</th></tr></thead><tbody>${yearlyRows}</tbody></table><p class="table-note">Each year covers up to 12 monthly instalments. The final year may contain fewer months.</p></section>
  <div class="disclaimer"><strong>Important:</strong> This report is an illustrative estimate only, based on the inputs supplied to the EMI calculator. Actual EMI, rates, fees, tenure and lender terms may vary. This report is not a loan sanction, offer, or guarantee of eligibility.</div><div class="footer"><span>Perfect Lender · Choose Best For You</span><span>Illustrative repayment estimate</span></div>
  <div class="print-hint">Choose <strong>Save as PDF</strong> in the print destination, then tap <strong>Save</strong> to download this report.<br/><button onclick="window.print()" style="margin-top:8px;padding:8px 16px;border:0;border-radius:7px;background:#2563eb;color:white;font-weight:700;cursor:pointer">Save / Download PDF</button></div></body></html>`;

  // Open synchronously inside the user's click gesture so popup blockers
  // are less likely to block the print-to-PDF workflow.
  const reportWindow = window.open("", "_blank");
  if (reportWindow) {
    reportWindow.document.open();
    reportWindow.document.write(html);
    reportWindow.document.close();
    reportWindow.focus();
    reportWindow.setTimeout(() => reportWindow.print(), 800);
    return;
  }

  // Fallback for browsers that block the report window: save the printable
  // report so the user can open it and choose Print → Save as PDF.
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `perfect-lender-emi-overview-${new Date().toISOString().slice(0, 10)}.html`;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
