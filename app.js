/* =========================================================
   Pratham Builds — interactions
   ========================================================= */

/* ---- CONFIG: keep these HONEST. Fake timers / fake numbers destroy trust
   (and are banned under India's 2023 Dark Patterns guidelines). ---- */
const CONFIG = {
  // Real closing date of the founding batch. After this passes, the bar hides itself.
  offerEndsAt: "2026-10-31T23:59:59+05:30",
  currency: "₹",
  founderSlots: 100,
  foundersJoined: 0, // update with your REAL count as people enrol
};

const COURSES = [
  {
    id: "vibe101", cat: "ai", title: "Vibe Coding 101: Build Your First App with AI",
    outcome: "Zero coding se pehla live app — sirf 1 din me.",
    code: "prompt → app", theme: "t-purple", badge: "free",
    hours: 2.5, lessons: 18, projects: 1, level: "Beginner", price: 9,
    learn: ["Vibe coding kya hai (aur kya nahi)", "Prompts jo kaam karte hain", "AI-generated code ko samajhna", "Bugs fix karwana AI se", "Apna app deploy karna", "Kab AI pe bharosa na karein"],
    modules: [["Mindset", 20, ["Vibe coding explained (free)", "Tools setup"]], ["Build", 70, ["Idea → prompt", "Iterate like a pro", "Fix what breaks"]], ["Ship", 30, ["Deploy in 5 minutes", "Share it"]]],
  },
  {
    id: "git", cat: "web", title: "Git & GitHub in 90 Minutes",
    outcome: "Har developer ki pehli zaroorat — ek baar me clear.",
    code: "git commit -m 🚀", theme: "t-blue",
    hours: 1.5, lessons: 14, projects: 1, level: "Beginner", price: 9,
    learn: ["Commits, branches, merges", "Pull requests", "Merge conflicts fix karna", "GitHub profile that stands out"],
    modules: [["Everything Git", 90, ["Init & commit (free)", "Branches", "PRs & conflicts", "Profile README"]]],
  },
  {
    id: "website", cat: "web", title: "Build & Ship Your First Website",
    outcome: "HTML, CSS, JS + apna domain. Portfolio ready.",
    code: "</> index.html", theme: "t-yellow",
    hours: 5, lessons: 36, projects: 2, level: "Beginner", price: 19,
    learn: ["HTML structure properly", "Modern CSS layouts", "JavaScript basics that matter", "Responsive design", "AI se faster build", "Custom domain pe live"],
    modules: [["Foundations", 80, ["How the web works (free)", "HTML", "CSS layouts"]], ["Interactivity", 90, ["JS basics", "DOM projects"]], ["Ship", 40, ["Deploy", "Domain + SSL"]]],
  },
  {
    id: "aitools", cat: "ai", title: "AI Tools & Workflows for Builders",
    outcome: "Cursor, Claude, Gemini — 10x faster kaam karo.",
    code: "ai.workflow()", theme: "t-blue",
    hours: 4, lessons: 28, projects: 2, level: "All levels", price: 29,
    learn: ["Right AI tool for each job", "AI coding editors deep-dive", "Prompt patterns for code", "Automate boring tasks", "AI for design & content", "My exact daily workflow"],
    modules: [["The toolkit", 60, ["My stack (free)", "AI editors", "Chat vs agents"]], ["Workflows", 120, ["Code faster", "Automations", "Content & design"]]],
  },
  {
    id: "fullstack", cat: "web", title: "Full-Stack Web Dev — AI Edition",
    outcome: "React + Node + Database — AI ke saath, samajh ke.",
    code: "full-stack ⚡", theme: "t-purple", badge: "best",
    hours: 20, lessons: 140, projects: 4, level: "Beginner → Intermediate", price: 79,
    learn: ["React with hooks & routing", "Node + Express APIs", "Database (Mongo / Postgres)", "Auth & protected routes", "AI pair-programming", "Deploy frontend + backend"],
    modules: [["Frontend", 300, ["React mental model (free)", "Components & state", "Routing"]], ["Backend", 360, ["REST APIs", "Database", "Auth"]], ["Full build", 300, ["Build a real app", "Deploy everything"]]],
  },
  {
    id: "deploy", cat: "deploy", title: "Deploy Anything: Vercel, Domains & VPS",
    outcome: "Localhost se real domain tak, SSL ke saath.",
    code: "git push → live", theme: "t-yellow", badge: "new",
    hours: 4, lessons: 30, projects: 3, level: "All levels", price: 49,
    learn: ["Vercel, Netlify, Render", "Domain kharidna & DNS", "Free SSL", "Your own VPS + Nginx", "Env vars & secrets", "CI/CD basics"],
    modules: [["One-click deploys", 60, ["Deploy in 5 min (free)", "Vercel & Render"]], ["Own your server", 120, ["VPS setup", "Nginx", "SSL"]], ["Automate", 60, ["GitHub Actions"]]],
  },
  {
    id: "docker", cat: "deploy", title: "Docker & DevOps Basics",
    outcome: "'Mere laptop pe chal raha tha' — hamesha ke liye khatam.",
    code: "docker run -it", theme: "t-blue",
    hours: 5, lessons: 34, projects: 2, level: "Intermediate", price: 49,
    learn: ["Images, containers, volumes", "Dockerfile likhna", "docker-compose for full stacks", "Deploy containers to cloud"],
    modules: [["Docker", 160, ["Why containers (free)", "Dockerfile", "Compose"]], ["Ship", 140, ["Deploy to cloud", "Basic monitoring"]]],
  },
  {
    id: "saas", cat: "saas", title: "Build a SaaS from Scratch",
    outcome: "Login, dashboard, Razorpay payments — real paisa.",
    code: "₹ MRR++", theme: "t-purple",
    hours: 10, lessons: 70, projects: 1, level: "Intermediate", price: 69,
    learn: ["Idea validation", "Auth & user accounts", "Dashboard UI", "Razorpay subscriptions", "Emails & onboarding", "Launch checklist"],
    modules: [["Plan", 60, ["Pick a SaaS idea (free)", "Scope the MVP"]], ["Build", 360, ["Auth", "Core feature", "Payments"]], ["Launch", 180, ["Landing page", "Go live"]]],
  },
  {
    id: "monetize", cat: "saas", title: "Launch & Monetize Your Project",
    outcome: "Pehla user, pehla payment. Jo main live kar raha hoon.",
    code: "$0 → $1", theme: "t-yellow",
    hours: 3, lessons: 22, projects: 1, level: "All levels", price: 49,
    learn: ["Pricing your product", "Landing page that converts", "First 100 users", "Building in public", "Freelance vs product", "Lessons from my $100K challenge"],
    modules: [["Launch", 90, ["Why most projects die (free)", "Launch plan"]], ["Money", 90, ["Pricing", "First customers", "Building in public"]]],
  },
];

const CATS = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & Vibe Coding" },
  { id: "web", label: "Web Dev" },
  { id: "deploy", label: "Deploy & DevOps" },
  { id: "saas", label: "SaaS & Startups" },
];

const SUM = COURSES.reduce((s, c) => s + c.price, 0);
const PLANS = {
  bundle: { id: "bundle", title: "All Batches Bundle", price: 99, mrp: SUM, code: "ALL 9", theme: "t-purple" },
};

const FAQS = [
  ["₹9 me itna sasta kyun?", "Kyunki yeh founding batch hai. Main chahta hoon pehle students bina soche try karein, project banayein aur feedback dein. Sasta hai, kam nahi — content poora hai."],
  ["Main bilkul beginner hoon. Kya yeh mere liye hai?", "Haan. Vibe Coding 101 aur First Website zero se start hote hain. Quiz le lo, woh exact batayega kahan se shuru karna hai."],
  ["Pasand nahi aaya toh?", "7 din ke andar prathamvfx20@gmail.com pe ek email — poora refund. Koi sawaal nahi."],
  ["Vibe coding se kya sach me seekhte hain?", "Haan, agar sahi tarike se karo. Main AI se code likhwana bhi sikhata hoon aur usse samajhna bhi — taaki jab AI galti kare, tum pakad sako."],
  ["Course kab tak access rahega?", "Har batch lifetime access ke saath aata hai. Bundle me is saal aane wale naye batches bhi included hain."],
  ["Hindi me hai ya English me?", "Hinglish — jaise hum normally baat karte hain. Code aur technical terms English me."],
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => (n === 0 ? "Free" : CONFIG.currency + n.toLocaleString("en-IN"));
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};
const BADGES = { best: "Flagship", new: "New", free: "Start here" };

let cart = store.get("pb_cart", []).filter((id) => PLANS[id] || COURSES.some((c) => c.id === id));
let wishlist = store.get("pb_wish", []);
let activeCat = "all";
let query = "";

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- confetti (small reward moment) ---------- */
function confetti(x = innerWidth / 2, y = innerHeight / 2) {
  const cv = $("#confetti"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ["#ffd644", "#7b5cfa", "#3d6bff", "#dce8ff", "#ff8fab"];
  const parts = Array.from({ length: 90 }, () => ({
    x, y, vx: (Math.random() - .5) * 14, vy: Math.random() * -14 - 4,
    s: Math.random() * 7 + 4, r: Math.random() * 6, vr: (Math.random() - .5) * .3,
    c: colors[(Math.random() * colors.length) | 0], life: 0,
  }));
  (function frame() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    let alive = false;
    parts.forEach((p) => {
      p.vy += .45; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++;
      if (p.y < cv.height + 20 && p.life < 160) alive = true;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
    });
    if (alive) requestAnimationFrame(frame); else ctx.clearRect(0, 0, cv.width, cv.height);
  })();
}

/* ---------- offer bar (real deadline only) ---------- */
function initOffer() {
  const end = new Date(CONFIG.offerEndsAt).getTime();
  const bar = $("#offerBar"), el = $("#offerTimer");
  if (!end || Date.now() > end) return;
  bar.hidden = false;
  const tick = () => {
    const d = end - Date.now();
    if (d <= 0) { bar.hidden = true; return; }
    const days = Math.floor(d / 864e5), h = Math.floor(d / 36e5) % 24, m = Math.floor(d / 6e4) % 60, s = Math.floor(d / 1e3) % 60;
    el.textContent = `${days}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
  };
  tick(); setInterval(tick, 1000);
}

/* ---------- courses ---------- */
function renderTabs() {
  $("#courseTabs").innerHTML = CATS.map((c) => {
    const n = c.id === "all" ? COURSES.length : COURSES.filter((x) => x.cat === c.id).length;
    return `<button class="tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}" role="tab" id="tab-${c.id}">${c.label}<span class="n">${n}</span></button>`;
  }).join("");
}

function courseCard(c) {
  const inCart = cart.includes(c.id) || cart.includes("bundle");
  const wished = wishlist.includes(c.id);
  const badge = c.badge ? `<span class="badge ${c.badge}">${BADGES[c.badge]}</span>` : "";
  const catLabel = CATS.find((x) => x.id === c.cat).label;
  return `
  <article class="course" data-id="${c.id}" id="course-${c.id}">
    <div class="thumb ${c.theme}">
      ${badge}
      <button class="wish ${wished ? "on" : ""}" data-wish="${c.id}" aria-label="Save to wishlist">${wished ? "❤️" : "🤍"}</button>
      <span class="thumb-code">${c.code}</span>
    </div>
    <div class="c-body">
      <span class="c-cat">${catLabel} · ${c.level}</span>
      <h3 class="c-title">${c.title}</h3>
      <p class="c-out">${c.outcome}</p>
      <div class="c-meta">
        <span>⏱ ${c.hours}h</span>
        <span>· ${c.lessons} lessons</span>
        <span>· 🚀 ${c.projects} project${c.projects > 1 ? "s" : ""}</span>
      </div>
      <div class="c-foot">
        <div class="c-price"><b>${money(c.price)}</b></div>
        <button class="btn btn-sm ${inCart ? "added" : "btn-yellow"}" data-add="${c.id}">${inCart ? "✓ In cart" : "Add to cart"}</button>
      </div>
    </div>
  </article>`;
}

function renderCourses() {
  const q = query.trim().toLowerCase();
  const list = COURSES.filter((c) =>
    (activeCat === "all" || c.cat === activeCat) &&
    (!q || (c.title + c.outcome + c.code + c.cat + c.learn.join(" ")).toLowerCase().includes(q))
  );
  $("#courseGrid").innerHTML = list.map(courseCard).join("");
  $("#courseEmpty").hidden = list.length > 0;
}

/* ---------- course modal ---------- */
function openCourse(id) {
  const c = COURSES.find((x) => x.id === id);
  if (!c) return;
  const inCart = cart.includes(c.id) || cart.includes("bundle");
  $("#modalContent").innerHTML = `
    <div class="m-hero thumb ${c.theme}" style="height:auto;display:block">
      <span class="c-cat">${CATS.find((x) => x.id === c.cat).label} · ${c.level}</span>
      <h2 id="modalTitle">${c.title}</h2>
      <p class="big">${c.outcome}</p>
      <div class="c-meta" style="margin-top:14px">
        <span>👨‍💻 Taught by Pratham</span>
        <span>· ⏱ ${c.hours}h · ${c.lessons} lessons</span>
        <span>· 🚀 ${c.projects} project${c.projects > 1 ? "s" : ""}</span>
      </div>
    </div>
    <div class="m-grid">
      <div>
        <h3>Is batch ke baad tum kar paoge</h3>
        <ul class="m-learn">${c.learn.map((l) => `<li>${l}</li>`).join("")}</ul>
        <h3 style="margin-bottom:12px">Curriculum</h3>
        <div class="curr">
          ${c.modules.map(([name, mins, lessons], i) => `
            <details class="curr-mod" ${i === 0 ? "open" : ""}>
              <summary>${name} <small>${lessons.length} lessons · ${mins} min</small></summary>
              <ul>${lessons.map((l) => `<li><span>▸ ${l.replace(" (free)", "")}</span>${l.includes("(free)") ? `<span class="free-tag" data-preview="${c.id}">Preview free</span>` : `<span>🔒</span>`}</li>`).join("")}</ul>
            </details>`).join("")}
        </div>
      </div>
      <aside>
        <div class="buy-box">
          <div class="c-price"><b>${money(c.price)}</b></div>
          <span class="save">Founding batch price</span>
          <button class="btn btn-block btn-lg ${inCart ? "added" : "btn-yellow"}" data-add="${c.id}">${inCart ? "✓ In cart" : "Add to cart"}</button>
          <button class="btn btn-ghost btn-block" data-buynow="${c.id}">Buy now</button>
          <p class="muted" style="font-size:.85rem;margin-top:6px">Ya <a href="#" class="link" data-add="bundle">saare 9 batches ₹99 me</a></p>
          <ul>
            <li>🔁 7-day full refund</li>
            <li>♾️ Lifetime access</li>
            <li>📁 Source code included</li>
            <li>🎓 Certificate of completion</li>
          </ul>
        </div>
      </aside>
    </div>`;
  const m = $("#courseModal");
  m.classList.add("open");
  m.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  const m = $("#courseModal");
  m.classList.remove("open");
  m.setAttribute("aria-hidden", "true");
  if (!$("#cartDrawer").classList.contains("open")) document.body.style.overflow = "";
}

/* ---------- cart ---------- */
const itemOf = (id) => PLANS[id] || COURSES.find((c) => c.id === id);

function addToCart(id, el) {
  if (PLANS[id]) {
    // bundle replaces individual batches — never let someone pay twice
    cart = [id];
    toast("🎉 Bundle added — saare 9 batches covered!");
  } else {
    if (cart.includes("bundle")) { toast("Bundle me yeh already included hai 🙌"); openCart(); return; }
    if (cart.includes(id)) { openCart(); return; }
    cart.push(id);
    toast(`✓ Added: ${itemOf(id).title}`);
  }
  store.set("pb_cart", cart);
  updateCartCount(true);
  if (el) { const r = el.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top); }
  refreshButtons();
}
function removeFromCart(id) {
  cart = cart.filter((x) => x !== id);
  store.set("pb_cart", cart);
  updateCartCount();
  renderCart();
  refreshButtons();
}
function updateCartCount(bump) {
  const el = $("#cartCount");
  el.textContent = cart.length;
  if (bump) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
}
function refreshButtons() {
  renderCourses();
  $$("#modalContent .btn[data-add]").forEach((b) => {
    const inCart = cart.includes(b.dataset.add) || cart.includes("bundle");
    b.classList.toggle("added", inCart); b.classList.toggle("btn-yellow", !inCart);
    b.textContent = inCart ? "✓ In cart" : "Add to cart";
  });
}
function renderCart() {
  const items = cart.map(itemOf).filter(Boolean);
  if (!items.length) {
    $("#cartItems").innerHTML = `<div class="cart-empty"><span class="e">🛒</span>Cart khaali hai.<br/>₹9 wale Vibe Coding 101 se shuru karein?</div>
      <button class="btn btn-yellow" data-add="vibe101">Add Vibe Coding 101 — ₹9</button>`;
    $("#cartFoot").innerHTML = "";
    return;
  }
  $("#cartItems").innerHTML = items.map((c) => `
    <div class="cart-item">
      <div class="ci-thumb thumb ${c.theme}" style="height:56px;border-bottom:1.5px solid var(--ink)">${c.code.split(" ")[0]}</div>
      <div><b>${c.title}</b><small>${money(c.price)} ${c.mrp ? `<s>${money(c.mrp)}</s>` : ""}</small></div>
      <button class="ci-remove" data-remove="${c.id}">Remove</button>
    </div>`).join("");

  const subtotal = items.reduce((s, c) => s + c.price, 0);
  const mrp = items.reduce((s, c) => s + (c.mrp || c.price), 0);
  const hasPlan = items.some((c) => PLANS[c.id]);
  // Honest upsell: only when the bundle genuinely costs little extra or saves money
  const showUpsell = !hasPlan && subtotal >= 49;
  const diff = PLANS.bundle.price - subtotal;
  $("#cartFoot").innerHTML = `
    ${showUpsell ? `<div class="upsell">💡 ${diff > 0 ? `Sirf <b>${money(diff)}</b> aur me` : `<b>${money(-diff)} bachao</b> —`} <b>saare 9 batches</b> + community mil jayegi.
      <br/><button data-add="bundle">Switch to ₹99 Bundle →</button></div><br/>` : ""}
    ${mrp > subtotal ? `<div class="total-row"><span class="muted">Batches alag se</span><s class="muted">${money(mrp)}</s></div>
    <div class="total-row"><span>You save</span><span class="saving">−${money(mrp - subtotal)}</span></div>` : ""}
    <div class="total-row big"><span>Total</span><span>${money(subtotal)}</span></div>
    <button class="btn btn-yellow btn-block btn-lg" id="checkoutBtn">Checkout securely →</button>
    <p class="muted" style="text-align:center;font-size:.82rem;margin-top:10px">🔒 UPI · Cards · Netbanking · 7-day refund</p>`;
}
function openCart() {
  renderCart();
  const d = $("#cartDrawer");
  d.classList.add("open"); d.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  const d = $("#cartDrawer");
  d.classList.remove("open"); d.setAttribute("aria-hidden", "true");
  if (!$("#courseModal").classList.contains("open")) document.body.style.overflow = "";
}

/* ---------- quiz (commitment + personalisation) ---------- */
const QUIZ = [
  { q: "Abhi coding me kahan ho?", key: "level", opts: [
    { v: "zero", e: "🌱", t: "Bilkul zero", s: "Kabhi code nahi likha" },
    { v: "basics", e: "📚", t: "Basics aate hain", s: "HTML/JS thoda bahut" },
    { v: "builder", e: "🛠️", t: "Apps bana leta hoon", s: "Ab next level chahiye" }] },
  { q: "Goal kya hai?", key: "goal", opts: [
    { v: "job", e: "💼", t: "Developer job", s: "Placement / switch" },
    { v: "freelance", e: "💸", t: "Freelancing", s: "Clients se kamana" },
    { v: "startup", e: "🚀", t: "Apna SaaS / startup", s: "Product banake bechna" }] },
  { q: "Roz kitna time de sakte ho?", key: "time", opts: [
    { v: 0.5, e: "☕", t: "30 min", s: "Busy schedule" },
    { v: 1, e: "⏰", t: "1 ghanta", s: "Steady pace" },
    { v: 2, e: "🔥", t: "2+ ghante", s: "Full focus mode" }] },
];
let answers = {};
let step = 0;

function pathFor({ level, goal }) {
  if (goal === "startup") return { name: "AI-Powered Founder", ids: level === "builder" ? ["aitools", "saas", "deploy", "monetize"] : ["vibe101", "aitools", "saas", "deploy", "monetize"] };
  if (goal === "freelance") return { name: "Freelance Web Builder", ids: level === "builder" ? ["aitools", "fullstack", "deploy", "monetize"] : ["vibe101", "website", "deploy", "monetize"] };
  if (level === "builder") return { name: "Job-ready Full-Stack Dev", ids: ["aitools", "fullstack", "docker", "saas"] };
  return { name: "Zero → Job-ready Developer", ids: ["vibe101", "git", "website", "fullstack", "deploy"] };
}

function renderQuiz() {
  const body = $("#quizBody");
  $("#quizBar").style.width = (step / QUIZ.length) * 100 + "%";
  if (step < QUIZ.length) {
    const s = QUIZ[step];
    body.innerHTML = `<div class="fade-in">
      <p class="muted" style="font-family:var(--f-mono);font-size:.8rem;margin-bottom:6px">Question ${step + 1}/${QUIZ.length}</p>
      <p class="q-title">${s.q}</p>
      <div class="q-options">${s.opts.map((o, i) => `<button class="q-opt" data-qv="${i}" id="q${step}-opt${i}"><span class="e">${o.e}</span><b>${o.t}</b><small>${o.s}</small></button>`).join("")}</div>
    </div>`;
    return;
  }
  const p = pathFor(answers);
  const courses = p.ids.map((id) => COURSES.find((c) => c.id === id));
  const hours = courses.reduce((s, c) => s + c.hours, 0);
  const weeks = Math.max(1, Math.ceil((hours * 1.6) / (answers.time * 7))); // 1.6x for building alongside
  const projects = courses.reduce((s, c) => s + c.projects, 0);
  const total = courses.reduce((s, c) => s + c.price, 0);
  const bundleBetter = total > PLANS.bundle.price;
  body.innerHTML = `<div class="q-result fade-in">
    <div>
      <span class="eyebrow">Your roadmap ✨</span>
      <h3>${p.name}</h3>
      <p class="muted">Tumhare answers ke hisaab se yeh order sabse fast kaam karega.</p>
      <div class="q-meta">
        <span class="chip">⏱ ~${weeks} week${weeks > 1 ? "s" : ""}</span>
        <span class="chip">📦 ${courses.length} batches</span>
        <span class="chip">🚀 ${projects} live projects</span>
      </div>
      ${bundleBetter
        ? `<button class="btn btn-yellow btn-lg" data-add="bundle">Get this path + everything — ₹99</button>
           <p class="muted" style="font-size:.85rem;margin-top:10px">Alag se lo toh ${money(total)} · Bundle me saare 9 batches ₹99</p>`
        : `<button class="btn btn-yellow btn-lg" id="addPath">Add this path — ${money(total)}</button>`}
      <br/><button class="q-restart" id="quizRestart">↺ Retake quiz</button>
    </div>
    <ol class="q-path">${courses.map((c) => `<li data-open="${c.id}" style="cursor:pointer">${c.title}<small>${money(c.price)}</small></li>`).join("")}</ol>
  </div>`;
  $("#quizBar").style.width = "100%";
  store.set("pb_path", p.ids);
  const add = $("#addPath");
  if (add) add.onclick = (e) => { courses.forEach((c) => { if (!cart.includes(c.id)) cart.push(c.id); }); store.set("pb_cart", cart); updateCartCount(true); refreshButtons(); confetti(e.clientX, e.clientY); openCart(); };
  $("#quizRestart").onclick = () => { step = 0; answers = {}; renderQuiz(); };
}

/* ---------- founders wall + faq ---------- */
function renderFounders() {
  const n = CONFIG.founderSlots, joined = CONFIG.foundersJoined;
  $("#founderSlots").innerHTML = Array.from({ length: n }, (_, i) =>
    i < joined ? `<span class="slot" style="background:var(--purple);border:2px solid var(--ink)" title="Founding member #${i + 1}"></span>`
      : i === joined ? `<span class="slot you" title="Spot #${i + 1} — yours?">YOU?</span>`
      : `<span class="slot" title="Spot #${i + 1}"></span>`).join("");
}
function renderFaq() {
  $("#faqList").innerHTML = FAQS.map(([q, a], i) => `
    <div class="acc" id="faq-${i}">
      <button class="acc-q" aria-expanded="false">${q}<span class="plus">+</span></button>
      <div class="acc-a"><p>${a}</p></div>
    </div>`).join("");
}
function renderPrices() {
  ["#sumPrice", "#sumPrice2"].forEach((s) => { const el = $(s); if (el) el.textContent = money(SUM); });
}

/* ---------- scroll effects ---------- */
function initScroll() {
  const nav = $("#nav"), sticky = $("#stickyCta"), hero = $(".hero");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 10);
    sticky.classList.toggle("show", scrollY > hero.offsetHeight);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .15 });
  $$(".reveal").forEach((el) => io.observe(el));

  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, to = parseFloat(el.dataset.to), suf = el.dataset.suffix || "";
      const t0 = performance.now();
      const run = (t) => {
        const p = Math.min((t - t0) / 1200, 1), v = to * (1 - Math.pow(1 - p, 3));
        el.textContent = Math.round(v).toLocaleString("en-IN") + suf;
        if (p < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
      cio.unobserve(el);
    });
  }, { threshold: .5 });
  $$(".count").forEach((el) => cio.observe(el));
}

/* ---------- global events ---------- */
document.addEventListener("click", (e) => {
  const t = e.target;
  const tab = t.closest("[data-cat]");
  if (tab) { activeCat = tab.dataset.cat; renderTabs(); renderCourses(); return; }

  const wish = t.closest("[data-wish]");
  if (wish) {
    e.stopPropagation();
    const id = wish.dataset.wish;
    wishlist = wishlist.includes(id) ? wishlist.filter((x) => x !== id) : [...wishlist, id];
    store.set("pb_wish", wishlist);
    toast(wishlist.includes(id) ? "❤️ Saved to wishlist" : "Removed from wishlist");
    renderCourses();
    return;
  }

  const add = t.closest("[data-add]");
  if (add) {
    e.preventDefault(); e.stopPropagation();
    const id = add.dataset.add;
    addToCart(id, add);
    if (PLANS[id] || add.closest("#cartDrawer")) { closeModal(); openCart(); }
    return;
  }

  const plan = t.closest("[data-plan]");
  if (plan) { addToCart(plan.dataset.plan, plan); openCart(); return; }

  const buy = t.closest("[data-buynow]");
  if (buy) { if (!cart.includes(buy.dataset.buynow)) addToCart(buy.dataset.buynow, buy); closeModal(); openCart(); return; }

  const prev = t.closest("[data-preview]");
  if (prev) { toast("▶ Free preview — video player yahan connect hoga"); return; }

  const rm = t.closest("[data-remove]");
  if (rm) { removeFromCart(rm.dataset.remove); return; }

  const qv = t.closest("[data-qv]");
  if (qv) { answers[QUIZ[step].key] = QUIZ[step].opts[+qv.dataset.qv].v; step++; renderQuiz(); return; }

  const op = t.closest("[data-open]");
  if (op) { openCourse(op.dataset.open); return; }

  const card = t.closest(".course");
  if (card) { openCourse(card.dataset.id); return; }

  if (t.closest("[data-close]")) { closeModal(); return; }
  if (t.closest("[data-close-cart]")) { closeCart(); return; }

  if (t.closest("#checkoutBtn")) {
    confetti();
    toast("🔒 Yahan Razorpay checkout connect karna hai");
    return;
  }

  const acc = t.closest(".acc-q");
  if (acc) {
    const box = acc.parentElement, a = box.querySelector(".acc-a"), open = box.classList.toggle("open");
    acc.setAttribute("aria-expanded", open);
    a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
  }
});

$("#cartBtn").addEventListener("click", openCart);
$("#courseSearch").addEventListener("input", (e) => { query = e.target.value; renderCourses(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeCart(); } });

/* ---------- boot ---------- */
initOffer();
renderPrices();
renderTabs();
renderCourses();
renderQuiz();
renderFounders();
renderFaq();
updateCartCount();
initScroll();
/* ---------- custom dopamine cursor ---------- */
function initCustomCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cursor = $("#customCursor");
  const dot = $("#cursorDot");
  const ring = $("#cursorRing");
  const label = $("#cursorLabel");
  if (!cursor || !dot || !ring) return;

  document.body.classList.add("has-custom-cursor");

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.remove("cursor-hidden");

    // Immediate positioning for precision dot
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  // Smooth lerp loop for organic follower ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.22;
    ringY += (mouseY - ringY) * 0.22;

    ring.style.left = `${ringX.toFixed(1)}px`;
    ring.style.top = `${ringY.toFixed(1)}px`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover detection with contextual dopamine badges
  document.addEventListener("mouseover", (e) => {
    const t = e.target;
    cursor.classList.remove("cursor-hidden", "hovering", "hover-view", "hover-buy", "hover-action", "cursor-text");
    label.textContent = "";

    const isInput = t.closest("input, textarea");
    if (isInput) {
      cursor.classList.add("cursor-text");
      return;
    }

    const buyBtn = t.closest("[data-add], [data-plan], [data-buynow], #priceBundle, #checkoutBtn");
    if (buyBtn) {
      cursor.classList.add("hovering", "hover-buy");
      label.textContent = "BUILD ⚡";
      return;
    }

    const wishBtn = t.closest("[data-wish]");
    if (wishBtn) {
      cursor.classList.add("hovering", "hover-action");
      label.textContent = "SAVE";
      return;
    }

    const courseCard = t.closest(".course, .q-opt, .project, .yt-card");
    if (courseCard && !t.closest("button, a")) {
      cursor.classList.add("hovering", "hover-view");
      label.textContent = courseCard.classList.contains("course") ? "VIEW 🚀" : "EXPLORE";
      return;
    }

    const clickable = t.closest("a, button, .tab, .acc-q, .link, [role='button'], summary");
    if (clickable) {
      cursor.classList.add("hovering", "hover-action");
      label.textContent = "";
      return;
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget) {
      cursor.classList.add("cursor-hidden");
    }
  });

  // Tactile mousedown bounce + micro sparks
  window.addEventListener("mousedown", (e) => {
    cursor.classList.add("is-down");
    createSparks(e.clientX, e.clientY);
  });

  window.addEventListener("mouseup", () => {
    cursor.classList.remove("is-down");
  });

  // Micro spark particles for click satisfaction
  const sparkColors = ["#ffd644", "#7b5cfa", "#3d6bff", "#1fae6b", "#ff5a5f"];
  function createSparks(x, y) {
    const count = 4;
    for (let i = 0; i < count; i++) {
      const spark = document.createElement("div");
      spark.className = "cursor-spark";
      const angle = (i * (360 / count) + Math.random() * 20) * (Math.PI / 180);
      const dist = 22 + Math.random() * 12;
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
      spark.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
      spark.style.setProperty("--rot", `${(Math.random() - 0.5) * 180}deg`);
      spark.style.background = sparkColors[i % sparkColors.length];
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 450);
    }
  }
}

// Boot me run karne ke liye:
initCustomCursor();


