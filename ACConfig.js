// PikeConfig.js
// Global configuration for Pike Corporation Accounting Cycle Review

const exerciseConfig = {
  appTitle: "Accounting Cycle – Pike Corporation",
  subtitle:
    "Year‑end adjusting entries and closing entries.",

  entityName: "Pike Corporation",
  chartWindowTitle: "Chart of Accounts – Pike Corporation",
  tbWindowTitle: "Trial Balance",
  tbEntityName: "Pike Corporation – Trial Balance",

  // How to label the starting balances in the ledger:
  // "beginning"  → “Beginning balance”
  // "unadjusted" → “Unadjusted balance”
  // startingBalanceLabelMode: "beginning", // default
  startingBalanceLabelMode: "unadjusted", // Pike


  // "exercise" (feedback & grading) or "test" (no feedback / grading)
  mode: "exercise",  // default
  // mode: "test",

  useLoginScreen: true,
  loginTitle: "Accounting Cycle Practice",
  loginSubtitle: "Pike Corporation",
  loginPrompt:
    "Enter your name (optional) and password to begin.",
  loginPassword: "KUBS",
  loginButtonLabel: "Start",

  footerText:
    "For Korea University classroom use only. Do not redistribute.",
  copyright:
    `© ${new Date().getFullYear()} Jinhan Pae. All rights reserved.`
};
