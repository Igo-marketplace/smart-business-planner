import { r as reactExports, W as jsxRuntimeExports } from "./server-C5RWfw8H.js";
import { L as Link, t as toast } from "./router-BEat1jrZ.js";
import { c as createLucideIcon, b as cn, S as SiteHeader, h as SiteFooter, i as Sparkles, C as Card, d as CardHeader, e as CardTitle, f as CardDescription, g as CardContent } from "./index-OMzo9US4.js";
import { c as cva, B as Button } from "./button-BLUe1V-a.js";
import { B as Badge } from "./badge-BifD0rJZ.js";
import { u as usePlanner, I as INDUSTRIES } from "./planner-CjhQ_khq.js";
import { F as FileText } from "./file-text-Bksw_rY2.js";
import { F as FileSpreadsheet } from "./file-spreadsheet--NxgZTff.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = reactExports.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props }));
Alert.displayName = "Alert";
const AlertTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h5",
    {
      ref,
      className: cn("mb-1 font-medium leading-none tracking-tight", className),
      ...props
    }
  )
);
AlertTitle.displayName = "AlertTitle";
const AlertDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }));
AlertDescription.displayName = "AlertDescription";
function fmtMoney(n) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  }).format(n);
}
function ResultsPage() {
  const s = usePlanner();
  const industry = INDUSTRIES.find((i) => i.id === s.industry);
  if (!s.segment || !s.industry) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Нет готового плана" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Заполните анкету, чтобы сгенерировать бизнес-план." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wizard", children: "Начать" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] });
  }
  const breakEvenMonth = s.segment === "small" ? 7 : 14;
  const irr = s.segment === "medium" ? "22,4%" : "—";
  const recommendedTax = s.segment === "small" ? s.industry === "services" ? "Патент" : "УСН «Доходы минус расходы» 15%" : "ОСН";
  const monthly = s.monthlyRevenue ?? Math.round(s.budget * 0.18);
  const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
  const seasonFactor = s.industry === "agriculture" ? [0.4, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.4, 1.2, 1, 0.7, 0.5] : [0.7, 0.75, 0.85, 0.95, 1.05, 1.1, 1.05, 1, 1.1, 1.15, 1.2, 1.3];
  const revenue = seasonFactor.map((f) => Math.round(monthly * f));
  const maxRev = Math.max(...revenue);
  const risks = [{
    title: "Рост стоимости сырья",
    mitigation: "Диверсификация поставщиков, фьючерсные контракты"
  }, {
    title: "Снижение спроса в регионе",
    mitigation: "Расширение каналов продаж, онлайн-присутствие"
  }, {
    title: "Ужесточение регулирования",
    mitigation: "Консультации с юристом, мониторинг 219-ФЗ"
  }];
  const downloadStub = (kind) => {
    if (kind === "JSON") {
      const data = JSON.stringify({
        segment: s.segment,
        industry: s.industry,
        budget: s.budget,
        city: s.city,
        breakEvenMonth,
        irr,
        recommendedTax,
        revenue
      }, null, 2);
      navigator.clipboard.writeText(data).then(() => toast.success("JSON скопирован в буфер обмена"));
      return;
    }
    toast.message(`Скачивание ${kind}`, {
      description: "Доступно в платной версии — оформите тариф «Профессиональный»"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 bg-surface py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3 w-3" }),
            " Готов"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold md:text-4xl", children: "Ваш бизнес-план" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-muted-foreground", children: [
            industry?.icon,
            " ",
            industry?.label,
            " · ",
            s.segment === "small" ? "Малый бизнес" : "Средний бизнес",
            " · ",
            s.city || "Россия"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => downloadStub("PDF"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "mr-2 h-4 w-4" }),
            " Скачать PDF (для банка)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => downloadStub("Excel"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "mr-2 h-4 w-4" }),
            " Скачать Excel"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => downloadStub("JSON"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "mr-2 h-4 w-4" }),
            " Копировать JSON"
          ] })
        ] })
      ] }),
      s.apiKeys.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mb-6 border-primary/30 bg-accent/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { children: "Аналитика на основе ваших API-данных" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
          "По данным ФНС для города «",
          s.city || "вашего региона",
          "»: средний чек на 15% ниже отраслевого бенчмарка. Прогноз выручки скорректирован."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }), label: "Точка безубыточности", value: `${breakEvenMonth} мес` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }), label: "IRR", value: irr, hint: s.segment === "small" ? "Только для среднего" : void 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }), label: "Рекомендуемая система налогообложения", value: recommendedTax, compact: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }), label: "Бюджет проекта", value: fmtMoney(s.budget) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Прогноз выручки по месяцам" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
            "Учтена сезонность отрасли «",
            industry?.label,
            "»"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-56 items-end gap-2", children: revenue.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t bg-[image:var(--gradient-hero)] transition-all hover:opacity-80", style: {
            height: `${v / maxRev * 100}%`
          }, title: fmtMoney(v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: months[i] })
        ] }, i)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-warning" }),
            " Топ-3 риска"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "С предложенными мерами снижения" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: risks.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border bg-background p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-warning/20 text-xs font-semibold text-warning-foreground", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Снижение:" }),
              " ",
              r.mitigation
            ] })
          ] })
        ] }) }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Kpi({
  icon,
  label,
  value,
  hint,
  compact
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wide", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 font-bold ${compact ? "text-base" : "text-2xl"}`, children: value }),
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: hint })
  ] }) });
}
export {
  ResultsPage as component
};
