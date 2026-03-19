# Accounting Cycle Practice – Pike Corporation

Web app for students to practice year‑end adjusting and closing entries starting from an unadjusted trial balance.

## Access
- **Repo:** `github.com/jinhanpae/AccCycle_Pike-Corporation`  <!-- update if needed -->
- **Live:** `jinhanpae.github.io/AccCycle_Pike-Corporation/`   <!-- update if needed -->

## Features
- **Sets:** Adjustments (A), Closing (C)
- **Unadjusted TB start:** Uses unadjusted 12/31 trial balance as `beginningBalance`
- **Balance label mode:** `startingBalanceLabelMode: "unadjusted"` shows “Unadjusted balance” in the ledger
- **Exercise mode:** Instant feedback + score tracking
- **Test mode:** No feedback (for quizzes)
- Trial balances, general ledger, chart of accounts popup

## Customize
Edit these files:
- `ACConfig.js` – title, mode, password, balance label mode
- `ACChartOfAccounts.js` – accounts (incl. Notes/Interest Receivable, Supplies, Inventory)
- `ACQuestions.js` – adjusting and closing entries

## Classroom Notes
- Browser-based, no install needed
- Allow popups for ledger/TB/chart
- Login: name + class password (`ACConfig.js`)
