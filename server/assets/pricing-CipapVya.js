import { W as jsxRuntimeExports } from "./server-C5RWfw8H.js";
import { L as Link } from "./router-BEat1jrZ.js";
import { S as SiteHeader, C as Card, d as CardHeader, e as CardTitle, g as CardContent, h as SiteFooter } from "./index-OMzo9US4.js";
import { B as Button } from "./button-BLUe1V-a.js";
import { B as Badge } from "./badge-BifD0rJZ.js";
import { C as Check } from "./check-BWqtgPws.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const PLANS = [{
  name: "Бесплатно",
  price: "0 ₽",
  suffix: "",
  features: ["1 бизнес-план", "PDF без брендинга", "Базовая аналитика", "Сохранение в облаке"]
}, {
  name: "Профессиональный",
  price: "1 990 ₽",
  suffix: "/мес",
  highlight: true,
  features: ["Все отрасли", "Excel и PDF без ограничений", "API-ключи ФНС, Яндекс, банков", "Аналитика по региону и городу", "Сценарный анализ", "Приоритетная поддержка"]
}, {
  name: "Корпоративный",
  price: "По запросу",
  suffix: "",
  features: ["Для банков и акселераторов", "Белая метка (white-label)", "SLA 99.9%", "On-premise развёртывание", "Интеграция с CRM банка", "Обучение команды"]
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-12 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold md:text-5xl", children: "Тарифы" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Начните бесплатно. Платите только за то, что нужно вашему бизнесу." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-5xl gap-6 md:grid-cols-3", children: PLANS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: p.highlight ? "relative border-primary shadow-[var(--shadow-elegant)]" : "", children: [
        p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: "Популярный" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold", children: p.price }),
            p.suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: p.suffix })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
          ] }, f)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-4 w-full", variant: p.highlight ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wizard", children: "Выбрать" }) })
        ] })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  PricingPage as component
};
