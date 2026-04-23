const STORAGE_KEY = "freelance-pricing-studio-day1-state";

const translations = {
  zh: {
    eyebrow: "报价别再靠感觉和临场发挥",
    title: "自由职业报价工作台",
    subtitle: "用收入目标、容量、风险和交付节奏生成更稳的报价方案，并把多个场景放在一起比较。",
    chipOne: "方案保存",
    chipTwo: "报价包建议",
    chipThree: "双语客户摘要",
    loadDemo: "加载示例",
    exportSummary: "导出摘要",
    hourlyRate: "建议时薪",
    metricHourlyHint: "按全年真实可售工时计算",
    projectQuote: "项目报价",
    metricProjectHint: "已经叠加风险和修订成本",
    scenarioCount: "已保存方案",
    metricScenarioHint: "适合按客户类型保留多套报价",
    inputKicker: "Step 1",
    inputsTitle: "建立你的报价基线",
    saveScenario: "保存方案",
    monthlyIncome: "目标月收入",
    monthlyExpenses: "每月固定成本",
    billableHours: "每周可计费小时",
    vacationWeeks: "每年休假周数",
    overheadRate: "非计费时间占比",
    bufferRate: "税费与风险缓冲",
    projectHours: "预估项目工时",
    projectRisk: "项目额外风险系数",
    timelineWeeks: "期望交付周数",
    revisionRounds: "包含修订轮次",
    planKicker: "Step 2",
    resultsTitle: "结果与报价策略",
    dailyRate: "建议日薪",
    monthlyRevenue: "月营收目标",
    annualBillableHours: "全年可计费工时",
    capacityTitle: "容量信号",
    effectiveUtilization: "有效利用率",
    bufferApplied: "总缓冲",
    weeklyCapacity: "每周可售产能",
    riskAdviceTitle: "风险提示",
    compareKicker: "Step 3",
    compareTitle: "方案库与对比",
    clearScenarios: "清空方案库",
    summaryKicker: "Step 4",
    summaryTitle: "客户摘要",
    copySummary: "复制",
    formulaTitle: "计算逻辑",
    switchLabel: "EN",
    saveSuccess: "方案已保存。",
    copySuccess: "摘要已复制。",
    exportFile: "报价摘要已导出。",
    cleared: "方案库已清空。",
    starterPackage: "轻量验证包",
    starterDesc: "适合方向验证、一次性交付和较小范围项目。",
    corePackage: "标准交付包",
    coreDesc: "适合多轮沟通、明确范围和可复用资产交付。",
    retainerPackage: "持续协作包",
    retainerDesc: "适合每周固定参与、滚动需求和长期维护。",
    packageIncludes: "包含内容",
    packageBestFor: "适用场景",
    packagePrice: "建议报价",
    riskLowUtilization: "当前有效利用率偏低，时薪需要更高才能守住收入目标。",
    riskHighRush: "交付周数较短，建议额外保留加急缓冲或拆分里程碑。",
    riskHighRevisions: "修订轮次较多，最好把轮次上限写进合同里。",
    riskHealthy: "当前组合较稳，可以把报价重点放在价值和交付范围，而不是单纯压价。",
    formula1: "先把目标月收入与固定成本相加，得到基础月营收目标。",
    formula2: "再根据休假周数、可计费小时和非计费时间占比，估算真实可售工时。",
    formula3: "叠加税费、风险和修订成本，得出时薪、日薪和项目报价。",
    formula4: "把同一套基线扩展为轻量包、标准包和持续协作包，方便直接对客户报价。",
    compareName: "方案",
    compareHourly: "时薪",
    compareProject: "项目价",
    compareUtilization: "利用率",
    compareFocus: "适合场景",
    compareEmpty: "还没有保存方案。先录入一套报价条件，再把不同客户或项目类型存下来对比。",
    scenarioLoad: "载入",
    scenarioDelete: "删除",
    summaryAudience: "适用项目",
    summaryCapacity: "交付容量",
    summaryQuote: "建议报价",
    summaryNext: "建议沟通方式",
    clientMessage: "可以先给客户展示标准交付包，再根据范围压缩到轻量版或扩展到持续协作包。",
    starterUse: "试点、MVP、小型咨询",
    coreUse: "正式项目、完整交付、含复盘",
    retainerUse: "固定顾问、长期协作、迭代支持",
    scenarioPlaceholder: "方案名称，例如跨境咨询版",
    labelWeeks: "周",
    labelRounds: "轮",
    labelHours: "小时",
    labelSavedAt: "保存时间",
    loadDemoName: "跨境咨询版",
  },
  en: {
    eyebrow: "Stop pricing on instinct alone",
    title: "Freelance Pricing Studio",
    subtitle: "Turn income goals, capacity, risk, and delivery pace into stronger pricing scenarios you can save and compare.",
    chipOne: "Scenario library",
    chipTwo: "Package recommendations",
    chipThree: "Bilingual client brief",
    loadDemo: "Load Demo",
    exportSummary: "Export Brief",
    hourlyRate: "Suggested hourly rate",
    metricHourlyHint: "Calculated from real yearly sellable hours",
    projectQuote: "Project quote",
    metricProjectHint: "Already includes risk and revision cost",
    scenarioCount: "Saved scenarios",
    metricScenarioHint: "Useful for different clients and deal shapes",
    inputKicker: "Step 1",
    inputsTitle: "Build your pricing baseline",
    saveScenario: "Save Scenario",
    monthlyIncome: "Target monthly income",
    monthlyExpenses: "Fixed monthly costs",
    billableHours: "Billable hours per week",
    vacationWeeks: "Vacation weeks per year",
    overheadRate: "Non-billable time ratio",
    bufferRate: "Tax and risk buffer",
    projectHours: "Estimated project hours",
    projectRisk: "Extra project risk factor",
    timelineWeeks: "Expected delivery weeks",
    revisionRounds: "Included revision rounds",
    planKicker: "Step 2",
    resultsTitle: "Results and pricing strategy",
    dailyRate: "Suggested day rate",
    monthlyRevenue: "Monthly revenue target",
    annualBillableHours: "Annual billable hours",
    capacityTitle: "Capacity signals",
    effectiveUtilization: "Effective utilization",
    bufferApplied: "Total buffer",
    weeklyCapacity: "Weekly sellable capacity",
    riskAdviceTitle: "Risk guidance",
    compareKicker: "Step 3",
    compareTitle: "Scenario library and compare",
    clearScenarios: "Clear Library",
    summaryKicker: "Step 4",
    summaryTitle: "Client-ready brief",
    copySummary: "Copy",
    formulaTitle: "Pricing logic",
    switchLabel: "中文",
    saveSuccess: "Scenario saved.",
    copySuccess: "Brief copied.",
    exportFile: "Pricing brief exported.",
    cleared: "Scenario library cleared.",
    starterPackage: "Lean validation package",
    starterDesc: "Best for quick validation, one-off scope, and smaller engagements.",
    corePackage: "Core delivery package",
    coreDesc: "Best for clearer scope, multi-round collaboration, and reusable deliverables.",
    retainerPackage: "Ongoing collaboration package",
    retainerDesc: "Best for recurring involvement, rolling requests, and long-term support.",
    packageIncludes: "Includes",
    packageBestFor: "Best for",
    packagePrice: "Suggested quote",
    riskLowUtilization: "Your effective utilization is low, so the rate needs to stay higher to protect the income goal.",
    riskHighRush: "The timeline is short. Add rush buffer or split the work into milestones.",
    riskHighRevisions: "Higher revision count means the contract should define a firm revision cap.",
    riskHealthy: "This setup looks healthy. Anchor the conversation on value and scope instead of pure discounting.",
    formula1: "Start with target monthly income plus fixed costs to get the revenue floor.",
    formula2: "Estimate real sellable hours using vacation weeks, billable hours, and overhead ratio.",
    formula3: "Apply tax, risk, and revision cost to produce hourly, day, and project pricing.",
    formula4: "Expand the same baseline into lean, core, and retainer packages for faster client negotiation.",
    compareName: "Scenario",
    compareHourly: "Hourly",
    compareProject: "Project",
    compareUtilization: "Utilization",
    compareFocus: "Best fit",
    compareEmpty: "No saved scenarios yet. Save a few pricing setups for different client types or deal structures.",
    scenarioLoad: "Load",
    scenarioDelete: "Delete",
    summaryAudience: "Best-fit work",
    summaryCapacity: "Delivery capacity",
    summaryQuote: "Suggested quote",
    summaryNext: "Recommended communication",
    clientMessage: "Lead with the core package, then compress into the lean version or expand into the retainer if the scope shifts.",
    starterUse: "Pilots, MVPs, small advisory work",
    coreUse: "Formal projects, full delivery, review cycle",
    retainerUse: "Advisory retainers, long-term collaboration, iteration support",
    scenarioPlaceholder: "Scenario name, for example Global consulting",
    labelWeeks: "weeks",
    labelRounds: "rounds",
    labelHours: "hours",
    labelSavedAt: "Saved at",
    loadDemoName: "Global consulting",
  }
};

const defaultInputs = {
  monthlyIncome: 25000,
  monthlyExpenses: 3000,
  billableHours: 24,
  vacationWeeks: 4,
  overheadRate: 30,
  bufferRate: 18,
  projectHours: 36,
  projectRisk: 15,
  timelineWeeks: 3,
  revisionRounds: 2
};

const demoInputs = {
  monthlyIncome: 36000,
  monthlyExpenses: 5500,
  billableHours: 22,
  vacationWeeks: 5,
  overheadRate: 34,
  bufferRate: 24,
  projectHours: 48,
  projectRisk: 22,
  timelineWeeks: 2,
  revisionRounds: 3
};

const state = loadState();

const refs = {
  switchButton: document.querySelector("#language-switch"),
  loadDemo: document.querySelector("#load-demo"),
  exportSummary: document.querySelector("#export-summary"),
  saveScenario: document.querySelector("#save-scenario"),
  clearScenarios: document.querySelector("#clear-scenarios"),
  copySummary: document.querySelector("#copy-summary"),
  scenarioName: document.querySelector("#scenario-name"),
  resultHourly: document.querySelector("#result-hourly"),
  hourlyRate: document.querySelector("#hourly-rate"),
  dailyRate: document.querySelector("#daily-rate"),
  monthlyRevenue: document.querySelector("#monthly-revenue"),
  projectQuote: document.querySelector("#project-quote"),
  annualBillableHours: document.querySelector("#annual-billable-hours"),
  effectiveUtilization: document.querySelector("#effective-utilization"),
  bufferApplied: document.querySelector("#buffer-applied"),
  weeklyCapacity: document.querySelector("#weekly-capacity"),
  riskList: document.querySelector("#risk-list"),
  packageGrid: document.querySelector("#package-grid"),
  scenarioList: document.querySelector("#scenario-list"),
  compareTable: document.querySelector("#compare-table"),
  scenarioCount: document.querySelector("#scenario-count"),
  summaryPreview: document.querySelector("#summary-preview"),
  formulaList: document.querySelector("#formula-list")
};

const inputRefs = {
  monthlyIncome: document.querySelector("#monthly-income"),
  monthlyExpenses: document.querySelector("#monthly-expenses"),
  billableHours: document.querySelector("#billable-hours"),
  vacationWeeks: document.querySelector("#vacation-weeks"),
  overheadRate: document.querySelector("#overhead-rate"),
  bufferRate: document.querySelector("#buffer-rate"),
  projectHours: document.querySelector("#project-hours"),
  projectRisk: document.querySelector("#project-risk"),
  timelineWeeks: document.querySelector("#timeline-weeks"),
  revisionRounds: document.querySelector("#revision-rounds")
};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return {
      language: parsed?.language || "zh",
      inputs: { ...defaultInputs, ...(parsed?.inputs || {}) },
      savedScenarios: Array.isArray(parsed?.savedScenarios) ? parsed.savedScenarios : []
    };
  } catch (_error) {
    return {
      language: "zh",
      inputs: { ...defaultInputs },
      savedScenarios: []
    };
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return translations[state.language][key];
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value) || 0, min), max);
}

function currency(value) {
  const locale = state.language === "zh" ? "zh-CN" : "en-US";
  const code = state.language === "zh" ? "CNY" : "USD";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
    maximumFractionDigits: 0
  }).format(Math.max(0, Math.round(value)));
}

function integer(value) {
  return Math.round(value).toLocaleString(state.language === "zh" ? "zh-CN" : "en-US");
}

function getInputs() {
  return {
    monthlyIncome: clamp(inputRefs.monthlyIncome.value, 0, 100000000),
    monthlyExpenses: clamp(inputRefs.monthlyExpenses.value, 0, 100000000),
    billableHours: clamp(inputRefs.billableHours.value, 1, 80),
    vacationWeeks: clamp(inputRefs.vacationWeeks.value, 0, 20),
    overheadRate: clamp(inputRefs.overheadRate.value, 0, 90),
    bufferRate: clamp(inputRefs.bufferRate.value, 0, 100),
    projectHours: clamp(inputRefs.projectHours.value, 1, 10000),
    projectRisk: clamp(inputRefs.projectRisk.value, 0, 150),
    timelineWeeks: clamp(inputRefs.timelineWeeks.value, 1, 52),
    revisionRounds: clamp(inputRefs.revisionRounds.value, 0, 10)
  };
}

function fillInputs(values) {
  Object.entries(values).forEach(([key, value]) => {
    if (inputRefs[key]) {
      inputRefs[key].value = value;
    }
  });
  state.inputs = getInputs();
  persist();
  render();
}

function calculate(inputs) {
  const monthlyRevenueTarget = inputs.monthlyIncome + inputs.monthlyExpenses;
  const yearlyWorkingWeeks = Math.max(52 - inputs.vacationWeeks, 1);
  const utilization = Math.max(1 - inputs.overheadRate / 100, 0.1);
  const annualBillableHours = yearlyWorkingWeeks * inputs.billableHours * utilization;
  const weeklySellableHours = inputs.billableHours * utilization;
  const revisionLoad = 1 + inputs.revisionRounds * 0.04;
  const riskLoad = 1 + inputs.projectRisk / 100;
  const yearlyRevenueTarget = monthlyRevenueTarget * 12 * (1 + inputs.bufferRate / 100);
  const hourlyRate = (yearlyRevenueTarget / annualBillableHours) * revisionLoad;
  const dayRate = hourlyRate * 8;
  const projectQuote = hourlyRate * inputs.projectHours * riskLoad;
  const projectBuffer = inputs.bufferRate + inputs.projectRisk + inputs.revisionRounds * 4;

  const packages = [
    {
      id: "starter",
      title: t("starterPackage"),
      description: t("starterDesc"),
      price: projectQuote * 0.82,
      bestFor: t("starterUse"),
      items: state.language === "zh"
        ? ["一次需求澄清", "1 轮修订", "轻量交付与说明"]
        : ["One scoping pass", "1 revision round", "Lean delivery with notes"]
    },
    {
      id: "core",
      title: t("corePackage"),
      description: t("coreDesc"),
      price: projectQuote,
      bestFor: t("coreUse"),
      items: state.language === "zh"
        ? ["完整交付流程", `${inputs.revisionRounds} 轮修订上限`, "交付说明与验收同步"]
        : ["Full delivery workflow", `${inputs.revisionRounds} revision rounds`, "Delivery notes plus acceptance sync"]
    },
    {
      id: "retainer",
      title: t("retainerPackage"),
      description: t("retainerDesc"),
      price: Math.max(monthlyRevenueTarget * 0.68, dayRate * 6),
      bestFor: t("retainerUse"),
      items: state.language === "zh"
        ? ["每周固定时段支持", "滚动需求优先排期", "月度复盘与建议"]
        : ["Reserved weekly support time", "Priority queue for rolling requests", "Monthly review and recommendations"]
    }
  ];

  const riskAdvice = [];
  if (utilization < 0.65) {
    riskAdvice.push(t("riskLowUtilization"));
  }
  if (inputs.timelineWeeks <= 2) {
    riskAdvice.push(t("riskHighRush"));
  }
  if (inputs.revisionRounds >= 3) {
    riskAdvice.push(t("riskHighRevisions"));
  }
  if (riskAdvice.length === 0) {
    riskAdvice.push(t("riskHealthy"));
  }

  return {
    monthlyRevenueTarget,
    annualBillableHours,
    weeklySellableHours,
    utilization,
    hourlyRate,
    dayRate,
    projectQuote,
    projectBuffer,
    packages,
    riskAdvice
  };
}

function summaryText(result) {
  const inputs = getInputs();
  return state.language === "zh"
    ? `# 报价摘要

## ${t("summaryAudience")}
- ${t("starterPackage")}：${t("starterUse")}
- ${t("corePackage")}：${t("coreUse")}
- ${t("retainerPackage")}：${t("retainerUse")}

## ${t("summaryCapacity")}
- ${t("billableHours")}：${inputs.billableHours}${t("labelHours")}
- ${t("effectiveUtilization")}：${Math.round(result.utilization * 100)}%
- ${t("annualBillableHours")}：${integer(result.annualBillableHours)}h
- ${t("timelineWeeks")}：${inputs.timelineWeeks}${t("labelWeeks")}

## ${t("summaryQuote")}
- ${t("hourlyRate")}：${currency(result.hourlyRate)}
- ${t("dailyRate")}：${currency(result.dayRate)}
- ${t("projectQuote")}：${currency(result.projectQuote)}
- ${t("starterPackage")}：${currency(result.packages[0].price)}
- ${t("corePackage")}：${currency(result.packages[1].price)}
- ${t("retainerPackage")}：${currency(result.packages[2].price)}

## ${t("summaryNext")}
${t("clientMessage")}
`
    : `# Pricing Brief

## ${t("summaryAudience")}
- ${t("starterPackage")}: ${t("starterUse")}
- ${t("corePackage")}: ${t("coreUse")}
- ${t("retainerPackage")}: ${t("retainerUse")}

## ${t("summaryCapacity")}
- ${t("billableHours")}: ${inputs.billableHours} ${t("labelHours")}
- ${t("effectiveUtilization")}: ${Math.round(result.utilization * 100)}%
- ${t("annualBillableHours")}: ${integer(result.annualBillableHours)}h
- ${t("timelineWeeks")}: ${inputs.timelineWeeks} ${t("labelWeeks")}

## ${t("summaryQuote")}
- ${t("hourlyRate")}: ${currency(result.hourlyRate)}
- ${t("dailyRate")}: ${currency(result.dayRate)}
- ${t("projectQuote")}: ${currency(result.projectQuote)}
- ${t("starterPackage")}: ${currency(result.packages[0].price)}
- ${t("corePackage")}: ${currency(result.packages[1].price)}
- ${t("retainerPackage")}: ${currency(result.packages[2].price)}

## ${t("summaryNext")}
${t("clientMessage")}
`;
}

function renderPackages(result) {
  refs.packageGrid.innerHTML = result.packages.map((item) => `
    <article class="package-card">
      <header>
        <div>
          <strong>${item.title}</strong>
          <p class="package-meta">${item.description}</p>
        </div>
        <span class="tag-pill">${t("packagePrice")}</span>
      </header>
      <div class="package-price">${currency(item.price)}</div>
      <div class="package-copy">
        <strong>${t("packageBestFor")}</strong>
        <p>${item.bestFor}</p>
      </div>
      <div class="package-copy">
        <strong>${t("packageIncludes")}</strong>
        <ul class="bullet-list">${item.items.map((value) => `<li>${value}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function renderScenarioList(result) {
  refs.scenarioCount.textContent = String(state.savedScenarios.length);

  if (!state.savedScenarios.length) {
    refs.scenarioList.innerHTML = `<div class="empty-card">${t("compareEmpty")}</div>`;
    refs.compareTable.innerHTML = "";
    return;
  }

  refs.scenarioList.innerHTML = state.savedScenarios
    .slice()
    .reverse()
    .map((scenario) => `
      <article class="scenario-card" data-id="${scenario.id}">
        <header>
          <div>
            <strong>${scenario.name}</strong>
            <p class="scenario-meta">${t("labelSavedAt")} · ${new Date(scenario.savedAt).toLocaleString()}</p>
          </div>
          <span class="tag-pill">${currency(scenario.result.projectQuote)}</span>
        </header>
        <p class="scenario-meta">
          ${t("hourlyRate")} ${currency(scenario.result.hourlyRate)} · ${t("timelineWeeks")} ${scenario.inputs.timelineWeeks}${t("labelWeeks")} · ${t("revisionRounds")} ${scenario.inputs.revisionRounds}${t("labelRounds")}
        </p>
        <div class="scenario-actions">
          <button type="button" class="button ghost scenario-load">${t("scenarioLoad")}</button>
          <button type="button" class="button ghost danger scenario-delete">${t("scenarioDelete")}</button>
        </div>
      </article>
    `)
    .join("");

  refs.scenarioList.querySelectorAll(".scenario-card").forEach((card) => {
    const id = card.dataset.id;
    card.querySelector(".scenario-load").addEventListener("click", () => {
      const hit = state.savedScenarios.find((scenario) => scenario.id === id);
      if (!hit) return;
      refs.scenarioName.value = hit.name;
      fillInputs(hit.inputs);
    });
    card.querySelector(".scenario-delete").addEventListener("click", () => {
      state.savedScenarios = state.savedScenarios.filter((scenario) => scenario.id !== id);
      persist();
      render();
    });
  });

  const rows = state.savedScenarios.slice().reverse().slice(0, 6);
  refs.compareTable.innerHTML = `
    <thead>
      <tr>
        <th>${t("compareName")}</th>
        <th>${t("compareHourly")}</th>
        <th>${t("compareProject")}</th>
        <th>${t("compareUtilization")}</th>
        <th>${t("compareFocus")}</th>
      </tr>
    </thead>
    <tbody>
      ${rows.map((scenario) => `
        <tr>
          <td>${scenario.name}</td>
          <td>${currency(scenario.result.hourlyRate)}</td>
          <td>${currency(scenario.result.projectQuote)}</td>
          <td>${Math.round(scenario.result.utilization * 100)}%</td>
          <td>${scenario.result.packages[1].bestFor}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  refs.switchButton.textContent = t("switchLabel");
  refs.scenarioName.placeholder = t("scenarioPlaceholder");
  refs.formulaList.innerHTML = `
    <li>${t("formula1")}</li>
    <li>${t("formula2")}</li>
    <li>${t("formula3")}</li>
    <li>${t("formula4")}</li>
  `;
}

function render() {
  applyTranslations();

  const inputs = getInputs();
  state.inputs = inputs;
  persist();

  const result = calculate(inputs);
  refs.hourlyRate.textContent = currency(result.hourlyRate);
  refs.resultHourly.textContent = currency(result.hourlyRate);
  refs.dailyRate.textContent = currency(result.dayRate);
  refs.monthlyRevenue.textContent = currency(result.monthlyRevenueTarget);
  refs.projectQuote.textContent = currency(result.projectQuote);
  refs.annualBillableHours.textContent = `${integer(result.annualBillableHours)}h`;
  refs.effectiveUtilization.textContent = `${Math.round(result.utilization * 100)}%`;
  refs.bufferApplied.textContent = `${Math.round(result.projectBuffer)}%`;
  refs.weeklyCapacity.textContent = `${integer(result.weeklySellableHours)}h`;
  refs.riskList.innerHTML = result.riskAdvice.map((item) => `<li>${item}</li>`).join("");
  refs.summaryPreview.textContent = summaryText(result);

  renderPackages(result);
  renderScenarioList(result);
}

function saveScenario() {
  const name = refs.scenarioName.value.trim() || t("loadDemoName");
  const inputs = getInputs();
  const result = calculate(inputs);
  const existingIndex = state.savedScenarios.findIndex((scenario) => scenario.name === name);
  const nextValue = {
    id: existingIndex >= 0 ? state.savedScenarios[existingIndex].id : crypto.randomUUID(),
    name,
    inputs,
    result,
    savedAt: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    state.savedScenarios.splice(existingIndex, 1, nextValue);
  } else {
    state.savedScenarios.push(nextValue);
  }

  persist();
  render();
  window.alert(t("saveSuccess"));
}

function downloadSummary() {
  const text = refs.summaryPreview.textContent;
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = state.language === "zh" ? "报价摘要.md" : "pricing-brief.md";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

Object.values(inputRefs).forEach((node) => {
  node.addEventListener("input", render);
});

refs.switchButton.addEventListener("click", () => {
  state.language = state.language === "zh" ? "en" : "zh";
  persist();
  render();
});

refs.loadDemo.addEventListener("click", () => {
  refs.scenarioName.value = t("loadDemoName");
  fillInputs(demoInputs);
});

refs.saveScenario.addEventListener("click", saveScenario);

refs.clearScenarios.addEventListener("click", () => {
  state.savedScenarios = [];
  persist();
  render();
  window.alert(t("cleared"));
});

refs.copySummary.addEventListener("click", async () => {
  await navigator.clipboard.writeText(refs.summaryPreview.textContent);
  window.alert(t("copySuccess"));
});

refs.exportSummary.addEventListener("click", () => {
  downloadSummary();
  window.alert(t("exportFile"));
});

fillInputs(state.inputs);
