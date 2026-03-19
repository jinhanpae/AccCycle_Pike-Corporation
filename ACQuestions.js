// PikeQuestions.js
// Pike Corporation – Adjusting entries, income tax, and closing entries
// set: "A" (adjusting) or "closing"

const CURRENT_YEAR = new Date().getFullYear();

const journalQuestions = [
  // --- Adjusting entries a–f ---

  {
    id: 1,
    set: "A",
    title: "[A] Insurance adjustment",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Insurance expired during the year, $2,000.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 606, debit: 2000, credit: 0 }, // Insurance Expense
      { accountId: 150, debit: 0, credit: 2000 }  // Prepaid Insurance
    ],
    explanation:
      "Recognize the portion of prepaid insurance that expired during the year ($2,000)."
  },

  {
    id: 2,
    set: "A",
    title: "[A] Depreciation on furniture and equipment",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Depreciation on furniture and equipment for the year is $12,500.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 605, debit: 12500, credit: 0 }, // Depreciation Expense
      { accountId: 170, debit: 0, credit: 12500 }  // Accumulated Depreciation—F. & E.
    ],
    explanation:
      "Record annual depreciation for furniture and equipment ($12,500)."
  },

  {
    id: 3,
    set: "A",
    title: "[A] Accrued interest receivable",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Interest at 8% per year is receivable on the note for three months ($140).",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      // You can later split Interest Receivable into its own asset account if you wish
      { accountId: 125, debit: 140, credit: 0 }, // Interest Receivable
      { accountId: 510, debit: 0, credit: 140 }  // Interest Revenue
    ],
    explanation:
      "Accrue three months of interest revenue: principal × 8% × 3/12 = $140."
  },

  {
    id: 4,
    set: "A",
    title: "[A] Rent adjustment",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Rent paid in advance at December 31 is $5,400 (originally debited to prepaid rent).",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 604, debit: 7400, credit: 0 }, // Rent Expense
      { accountId: 140, debit: 0, credit: 7400 }  // Prepaid Rent
    ],
    explanation:
      "Reduce prepaid rent to the remaining $5,400 and recognize $7,400 as rent expense."
  },

  {
    id: 5,
    set: "A",
    title: "[A] Accrued salaries",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Accrued salaries at December 31 are $5,800.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 602, debit: 5800, credit: 0 }, // Salaries Expense
      { accountId: 210, debit: 0, credit: 5800 }  // Salaries Payable
    ],
    explanation:
      "Accrue salaries earned but not yet paid at year-end ($5,800)."
  },

  {
    id: 6,
    set: "A",
    title: "[A] Supplies adjustment",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Supplies count at year-end indicates $120 of supplies remaining.",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      // Problem’s closing entry uses Supplies Expense 530 after adjustment
      // Here we adjust by reclassifying $120 from Supplies Expense to Supplies (asset).
      { accountId: 135, debit: 120, credit: 0 }, // Supplies
      { accountId: 603, debit: 0, credit: 120 }  // Supplies Expense
    ],
    explanation:
      "Reclassify the $120 of remaining supplies from expense back to the supplies asset."
  },

  // --- Income tax adjusting entry (from requirement 3) ---

  {
    id: 7,
    set: "A",
    title: "[A] Income tax accrual",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Accrue income tax expense at 30% of income before taxes ($32,913).",
    requiresEntry: true,
    isAdjusting: true,
    isClosing: false,
    correctLines: [
      { accountId: 608, debit: 32913, credit: 0 }, // Income Tax Expense
      { accountId: 230, debit: 0, credit: 32913 }  // Income Taxes Payable
    ],
    explanation:
      "Record income tax expense and the related liability (30% of income before taxes)."
  },

  // --- Closing entries (problem requirement 6) ---

  {
    id: 8,
    set: "closing",
    title: "[C] Close revenues to Income Summary",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Close Sales and Interest Revenue to Income Summary.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 501, debit: 320000, credit: 0 }, // Sales
      { accountId: 510, debit: 140, credit: 0 },    // Interest Revenue
      { accountId: 999, debit: 0, credit: 320140 }  // Income Summary
    ],
    explanation:
      "Close all revenue accounts to Income Summary for a total of $320,140."
  },

  {
    id: 9,
    set: "closing",
    title: "[C] Close expenses to Income Summary",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Close all expense accounts to Income Summary.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 999, debit: 243343, credit: 0 }, // Income Summary
      { accountId: 601, debit: 0, credit: 131000 }, // Cost of Sales
      { accountId: 602, debit: 0, credit: 55800 },  // Salaries Expense
      { accountId: 604, debit: 0, credit: 7400 },   // Rent Expense
      { accountId: 605, debit: 0, credit: 12500 },  // Depreciation Expense
      { accountId: 606, debit: 0, credit: 2000 },   // Insurance Expense
      { accountId: 607, debit: 0, credit: 1200 },   // R&D Expense
      { accountId: 603, debit: 0, credit: 530 },    // Supplies Expense
      { accountId: 608, debit: 0, credit: 32913 }   // Income Taxes
    ],
    explanation:
      "Close all expense accounts (including income taxes) to Income Summary for $243,343."
  },

  {
    id: 10,
    set: "closing",
    title: "[C] Close Income Summary to Retained Earnings",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Close the balance of Income Summary to Retained Earnings.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 999, debit: 76797, credit: 0 }, // Income Summary
      { accountId: 310, debit: 0, credit: 76797 }  // Retained Earnings
    ],
    explanation:
      "Transfer net income of $76,797 from Income Summary to Retained Earnings."
  },

  {
    id: 11,
    set: "closing",
    title: "[C] Close Dividends to Retained Earnings",
    date: `${CURRENT_YEAR}-12-31`,
    description:
      "Close Dividends to Retained Earnings.",
    requiresEntry: true,
    isAdjusting: false,
    isClosing: true,
    correctLines: [
      { accountId: 310, debit: 150, credit: 0 }, // Retained Earnings
      { accountId: 401, debit: 0, credit: 150 }  // Dividends
    ],
    explanation:
      "Close the dividends account to Retained Earnings."
  }
];
