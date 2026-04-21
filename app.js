const state = {
  language: "zh",
};

const translations = {
  zh: {
    eyebrow: "报价别再靠感觉",
    title: "自由职业报价换算器",
    subtitle: "输入你的目标收入、可计费工时和风险缓冲，快速得到更稳妥的时薪、日薪和项目报价建议。",
    inputsTitle: "输入条件",
    monthlyIncome: "目标月收入",
    monthlyExpenses: "每月固定成本",
    billableHours: "每周可计费小时",
    vacationWeeks: "每年休假周数",
    overheadRate: "非计费时间占比",
    bufferRate: "税费与风险缓冲",
    projectHours: "预估项目工时",
    projectRisk: "项目额外风险系数",
    resultsTitle: "报价结果",
    resultsHint: "这些数值是基于你输入参数生成的建议值，可作为报价起点。",
    hourlyRate: "建议时薪",
    dailyRate: "建议日薪",
    monthlyRevenue: "月营收目标",
    projectQuote: "建议项目报价",
    annualBillableHours: "全年可计费工时",
    effectiveUtilization: "有效利用率",
    projectBuffer: "项目风险缓冲",
    formulaTitle: "计算逻辑",
    formula1: "先把目标月收入和每月固定成本相加，得到月营收目标。",
    formula2: "再根据每周可计费小时、休假周数和非计费时间占比，估算全年真实可售工时。",
    formula3: "最后叠加税费与风险缓冲，得到更稳妥的时薪、日薪和项目报价。",
    switchLabel: "EN",
  },
  en: {
    eyebrow: "Stop guessing your rates",
    title: "Freelance Rate Calculator",
    subtitle: "Turn your target income, billable time, and risk buffer into practical hourly, daily, and project pricing.",
    inputsTitle: "Inputs",
    monthlyIncome: "Target monthly income",
    monthlyExpenses: "Fixed monthly costs",
    billableHours: "Billable hours per week",
    vacationWeeks: "Vacation weeks per year",
    overheadRate: "Non-billable time ratio",
    bufferRate: "Tax and risk buffer",
    projectHours: "Estimated project hours",
    projectRisk: "Extra project risk factor",
    resultsTitle: "Suggested Rates",
    resultsHint: "These numbers are generated from your inputs and are meant to be a reliable starting point for pricing.",
    hourlyRate: "Suggested hourly rate",
    dailyRate: "Suggested day rate",
    monthlyRevenue: "Monthly revenue target",
    projectQuote: "Suggested project quote",
    annualBillableHours: "Annual billable hours",
    effectiveUtilization: "Effective utilization",
    projectBuffer: "Project risk buffer",
    formulaTitle: "How It Works",
    formula1: "Add your target monthly income and fixed monthly costs to get a revenue target.",
    formula2: "Estimate realistic yearly sellable hours using billable hours, vacation weeks, and non-billable time.",
    formula3: "Apply tax and risk buffers to produce safer hourly, daily, and project rates.",
    switchLabel: "中文",
  },
};

const fields = {
  monthlyIncome: document.querySelector("#monthly-income"),
  monthlyExpenses: document.querySelector("#monthly-expenses"),
  billableHours: document.querySelector("#billable-hours"),
  vacationWeeks: document.querySelector("#vacation-weeks"),
  overheadRate: document.querySelector("#overhead-rate"),
  bufferRate: document.querySelector("#buffer-rate"),
  projectHours: document.querySelector("#project-hours"),
  projectRisk: document.querySelector("#project-risk"),
};

const outputs = {
  hourlyRate: document.querySelector("#hourly-rate"),
  dailyRate: document.querySelector("#daily-rate"),
  monthlyRevenue: document.querySelector("#monthly-revenue"),
  projectQuote: document.querySelector("#project-quote"),
  annualBillableHours: document.querySelector("#annual-billable-hours"),
  effectiveUtilization: document.querySelector("#effective-utilization"),
  projectBuffer: document.querySelector("#project-buffer"),
};

const switchButton = document.querySelector("#language-switch");

function clampNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function currencyFormatter(value) {
  const locale = state.language === "zh" ? "zh-CN" : "en-US";
  const prefix = state.language === "zh" ? "¥" : "$";
  return `${prefix}${Math.round(value).toLocaleString(locale)}`;
}

function applyTranslations() {
  const dict = translations[state.language];
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dict[key];
  });

  switchButton.textContent = dict.switchLabel;
}

function calculate() {
  const monthlyIncome = clampNumber(fields.monthlyIncome.value, 0);
  const monthlyExpenses = clampNumber(fields.monthlyExpenses.value, 0);
  const billableHours = Math.max(clampNumber(fields.billableHours.value, 1), 1);
  const vacationWeeks = Math.min(Math.max(clampNumber(fields.vacationWeeks.value, 0), 0), 52);
  const overheadRate = Math.min(Math.max(clampNumber(fields.overheadRate.value, 0), 0), 90);
  const bufferRate = Math.max(clampNumber(fields.bufferRate.value, 0), 0);
  const projectHours = Math.max(clampNumber(fields.projectHours.value, 1), 1);
  const projectRisk = Math.max(clampNumber(fields.projectRisk.value, 0), 0);

  const monthlyRevenueTarget = monthlyIncome + monthlyExpenses;
  const yearlyWorkingWeeks = Math.max(52 - vacationWeeks, 1);
  const utilization = Math.max(1 - overheadRate / 100, 0.1);
  const annualBillableHours = yearlyWorkingWeeks * billableHours * utilization;
  const yearlyRevenueTarget = monthlyRevenueTarget * 12 * (1 + bufferRate / 100);
  const hourlyRate = yearlyRevenueTarget / annualBillableHours;
  const dayRate = hourlyRate * 8;
  const projectQuote = hourlyRate * projectHours * (1 + projectRisk / 100);

  outputs.hourlyRate.textContent = currencyFormatter(hourlyRate);
  outputs.dailyRate.textContent = currencyFormatter(dayRate);
  outputs.monthlyRevenue.textContent = currencyFormatter(monthlyRevenueTarget);
  outputs.projectQuote.textContent = currencyFormatter(projectQuote);
  outputs.annualBillableHours.textContent = `${Math.round(annualBillableHours).toLocaleString()}h`;
  outputs.effectiveUtilization.textContent = `${Math.round(utilization * 100)}%`;
  outputs.projectBuffer.textContent = `${Math.round(projectRisk)}%`;
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", calculate);
});

switchButton.addEventListener("click", () => {
  state.language = state.language === "zh" ? "en" : "zh";
  applyTranslations();
  calculate();
});

applyTranslations();
calculate();
