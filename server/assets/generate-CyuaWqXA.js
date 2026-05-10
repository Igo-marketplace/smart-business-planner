import { r as reactExports, W as jsxRuntimeExports } from "./server-C5RWfw8H.js";
import { u as useNavigate, L as Link } from "./router-BEat1jrZ.js";
import { c as createLucideIcon, S as SiteHeader, C as Card, g as CardContent, h as SiteFooter } from "./index-OMzo9US4.js";
import { P as Progress } from "./progress-Mkg4Wz6E.js";
import { u as usePlanner } from "./planner-CjhQ_khq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
const STEPS = ["Анализируем отрасль и регион...", "Загружаем макроданные Росстата...", "Считаем точку безубыточности и налоги РФ...", "Формируем P&L, Cash Flow и баланс...", "Оцениваем риски и собираем PDF..."];
function GeneratePage() {
  const [progress, setProgress] = reactExports.useState(0);
  const [stepIdx, setStepIdx] = reactExports.useState(0);
  const navigate = useNavigate();
  const planner = usePlanner();
  reactExports.useEffect(() => {
    if (!planner.segment || !planner.industry) {
      navigate({
        to: "/wizard"
      });
      return;
    }
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 4);
        setStepIdx(Math.min(STEPS.length - 1, Math.floor(next / 100 * STEPS.length)));
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate({
            to: "/results"
          }), 400);
        }
        return next;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [navigate, planner.segment, planner.industry]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto flex min-h-[70vh] max-w-2xl items-center px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-8 p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Создаём ваш бизнес-план" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Это займёт до 30 секунд" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 text-sm transition-opacity ${i <= stepIdx ? "opacity-100" : "opacity-40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${i < stepIdx ? "bg-success" : i === stepIdx ? "bg-primary animate-pulse" : "bg-muted-foreground/40"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
      ] }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
        "Не закрывайте страницу. Если что-то пойдёт не так — ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wizard", className: "underline", children: "вернуться к настройкам" })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  GeneratePage as component
};
