// PikeChartOfAccounts.js
// Chart of accounts for Pike Corporation (Accounting Cycle Review)
// Uses the unadjusted trial balance as at December 31 as beginningBalance.
// In the config file, set 'startingBalanceLabelMode: "unadjusted",'

const chartOfAccounts = [
  // Assets (100s)
  { id: 101, code: "101", name: "Cash", type: "Asset", beginningBalance: 11200 },
  { id: 110, code: "110", name: "Accounts Receivable", type: "Asset", beginningBalance: 37000 },
  { id: 120, code: "120", name: "Notes Receivable", type: "Asset", beginningBalance: 7000 },
  { id: 125, code: "125", name: "Interest Receivable", type: "Asset", beginningBalance: 0 }, 
  { id: 130, code: "130", name: "Merchandise Inventory", type: "Asset", beginningBalance: 74000 },
  { id: 135, code: "135", name: "Supplies", type: "Asset", beginningBalance: 0 },                 { id: 140, code: "140", name: "Prepaid Rent", type: "Asset", beginningBalance: 12800 },
  { id: 150, code: "150", name: "Prepaid Insurance", type: "Asset", beginningBalance: 4800 },
  { id: 160, code: "160", name: "Furniture and Equipment", type: "Asset", beginningBalance: 125000 },

  // Contra‑asset (negative balance in TB)
  { id: 170, code: "170", name: "Accumulated Depreciation—F. & E.", type: "Asset", beginningBalance: -15000 },

  // Liabilities (200s)
  { id: 201, code: "201", name: "Accounts Payable", type: "Liability", beginningBalance: -10800 },
  { id: 210, code: "210", name: "Salaries Payable", type: "Liability", beginningBalance: 0 },
  { id: 220, code: "220", name: "Interest Payable", type: "Liability", beginningBalance: 0 },
  { id: 230, code: "230", name: "Income Taxes Payable", type: "Liability", beginningBalance: 0 },

  // Equity (300s)
  { id: 301, code: "301", name: "Share Capital", type: "Equity", beginningBalance: -44000 },
  { id: 310, code: "310", name: "Retained Earnings", type: "Equity", beginningBalance: -65000 },

  // Dividends (400s)
  { id: 401, code: "401", name: "Dividends", type: "Equity", beginningBalance: 150 },

  // Revenues (500s)
  { id: 501, code: "501", name: "Sales", type: "Revenue", beginningBalance: -320000 },
  { id: 510, code: "510", name: "Interest Revenue", type: "Revenue", beginningBalance: 0 },

  // Expenses (600s)
  { id: 601, code: "601", name: "Cost of Sales", type: "Expense", beginningBalance: 131000 },
  { id: 602, code: "602", name: "Salaries Expense", type: "Expense", beginningBalance: 50000 },
  { id: 603, code: "603", name: "Supplies Expense", type: "Expense", beginningBalance: 650 },
  { id: 604, code: "604", name: "Rent Expense", type: "Expense", beginningBalance: 0 },
  { id: 605, code: "605", name: "Depreciation Expense", type: "Expense", beginningBalance: 0 },
  { id: 606, code: "606", name: "Insurance Expense", type: "Expense", beginningBalance: 0 },
  { id: 607, code: "607", name: "R&D Expense", type: "Expense", beginningBalance: 1200 },
  { id: 608, code: "608", name: "Income Tax Expense", type: "Expense", beginningBalance: 0 },

  // Income Summary (999)
  { id: 999, code: "999", name: "Income Summary", type: "Equity", beginningBalance: 0 }
];
