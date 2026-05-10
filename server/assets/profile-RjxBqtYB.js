import { r as reactExports, W as jsxRuntimeExports } from "./server-C5RWfw8H.js";
import { c as createLucideIcon, S as SiteHeader, C as Card, d as CardHeader, e as CardTitle, f as CardDescription, g as CardContent, h as SiteFooter } from "./index-OMzo9US4.js";
import { B as Button } from "./button-BLUe1V-a.js";
import { K as KeyRound, L as Label, I as Input } from "./label-B0KDOGFp.js";
import { B as Badge } from "./badge-BifD0rJZ.js";
import { u as usePlanner } from "./planner-CjhQ_khq.js";
import { t as toast } from "./router-BEat1jrZ.js";
import { S as ShieldCheck } from "./shield-check-BH-qYL6W.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function ProfilePage() {
  const s = usePlanner();
  const [checking, setChecking] = reactExports.useState(false);
  const mask = (k) => k ? "•".repeat(Math.min(12, k.length)) : "—";
  const status = s.apiKeys.status;
  const statusBadge = {
    active: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-success text-success-foreground", children: "Активен" }),
    untested: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "Не проверен" }),
    error: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "Ошибка" })
  }[status];
  const remove = () => {
    s.setApiKeys({
      fns: void 0,
      yandex: void 0,
      bank: void 0,
      status: "untested"
    });
    toast.success("Ключи удалены");
  };
  const check = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      const ok = !!(s.apiKeys.fns || s.apiKeys.yandex || s.apiKeys.bank);
      s.setApiKeys({
        status: ok ? "active" : "error"
      });
      if (ok) toast.success("Ключи активны");
      else toast.error("Не удалось проверить ключи", {
        description: "Введите хотя бы один ключ"
      });
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 bg-surface py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "API-ключи" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Подключите внешние источники данных для точного прогноза" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
              " Сохранённые ключи"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Ключи хранятся зашифрованными" })
          ] }),
          statusBadge
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyField, { label: "Ключ ФНС", value: s.apiKeys.fns ?? "", onChange: (v) => s.setApiKeys({
            fns: v,
            status: "untested"
          }), mask: mask(s.apiKeys.fns) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyField, { label: "Ключ Яндекс / Авито", value: s.apiKeys.yandex ?? "", onChange: (v) => s.setApiKeys({
            yandex: v,
            status: "untested"
          }), mask: mask(s.apiKeys.yandex) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KeyField, { label: "Ключ банка (Альфа / Т-Банк / Сбер)", value: s.apiKeys.bank ?? "", onChange: (v) => s.setApiKeys({
            bank: v,
            status: "untested"
          }), mask: mask(s.apiKeys.bank) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: check, disabled: checking, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "mr-2 h-4 w-4" }),
              " ",
              checking ? "Проверка..." : "Проверить ключи"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: remove, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
              " Удалить ключи"
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function KeyField({
  label,
  value,
  onChange,
  mask
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", placeholder: mask || "Введите ключ", value, onChange: (e) => onChange(e.target.value) }) })
  ] });
}
export {
  ProfilePage as component
};
