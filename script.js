// ==================== DATA ====================
const SERVICES = [
  { name: 'PM Kisan Samman Nidhi', dept: 'Agriculture Dept.', icon: '🌾', cat: 'agriculture', time: '30 days' },
  { name: 'Maharashtra Student Scholarship', dept: 'Education Dept.', icon: '📚', cat: 'education', time: '45 days' },
  { name: 'Gharkul Housing Scheme', dept: 'Housing Dept.', icon: '🏠', cat: 'housing', time: '60 days' },
  { name: 'Mahatma Phule Jan Arogya Yojana', dept: 'Health Dept.', icon: '🏥', cat: 'health', time: '7 days' },
  { name: 'Ration Card New / Update', dept: 'Food & Civil Supplies', icon: '🍚', cat: 'welfare', time: '21 days' },
  { name: 'Domicile Certificate', dept: 'Revenue Dept.', icon: '📜', cat: 'certificates', time: '15 days' },
  { name: 'Income Certificate', dept: 'Revenue Dept.', icon: '💰', cat: 'certificates', time: '10 days' },
  { name: 'Caste Certificate', dept: 'Social Justice Dept.', icon: '📋', cat: 'certificates', time: '21 days' },
  { name: 'Swayam Siddha Farmer Scheme', dept: 'Agriculture Dept.', icon: '🚜', cat: 'agriculture', time: '30 days' },
  { name: 'MUDRA Business Loan', dept: 'Finance Dept.', icon: '💼', cat: 'employment', time: '45 days' },
  { name: 'Rajiv Gandhi Scholarship (SC)', dept: 'Social Justice Dept.', icon: '🎓', cat: 'education', time: '60 days' },
  { name: 'Baliraja Krishi Pump Scheme', dept: 'Agriculture Dept.', icon: '⚡', cat: 'agriculture', time: '30 days' },
  { name: 'Jan Aushadi Scheme', dept: 'Health Dept.', icon: '💊', cat: 'health', time: '14 days' },
  { name: 'Mhada Housing Lottery', dept: 'Housing Dept.', icon: '🏢', cat: 'housing', time: '90 days' },
  { name: 'Employment Exchange Registration', dept: 'Employment Dept.', icon: '👔', cat: 'employment', time: '7 days' },
  { name: 'Birth Certificate', dept: 'Revenue Dept.', icon: '👶', cat: 'certificates', time: '7 days' },
  { name: 'Death Certificate', dept: 'Revenue Dept.', icon: '📑', cat: 'certificates', time: '7 days' },
  { name: 'Sheti Pump Yojana', dept: 'Energy Dept.', icon: '🔌', cat: 'agriculture', time: '45 days' },
  { name: 'Child Vaccination Record', dept: 'Health Dept.', icon: '💉', cat: 'health', time: '3 days' },
  { name: 'GST Registration', dept: 'Finance Dept.', icon: '🏪', cat: 'employment', time: '7 days' },
];

const DOCS = [
  { name: 'Aadhaar Card', icon: '🪪', status: 'verified', issued: '12 Jan 2020', expiry: 'Lifetime', size: '2.1 MB' },
  { name: 'PAN Card', icon: '💳', status: 'verified', issued: '5 Mar 2018', expiry: 'Lifetime', size: '1.4 MB' },
  { name: 'Income Certificate', icon: '💰', status: 'verified', issued: '10 Feb 2026', expiry: '10 Feb 2027', size: '0.8 MB' },
  { name: 'Caste Certificate (OBC)', icon: '📋', status: 'verified', issued: '4 Jun 2025', expiry: 'Lifetime', size: '1.2 MB' },
  { name: 'Domicile Certificate', icon: '📜', status: 'verified', issued: '15 Oct 2024', expiry: '15 Oct 2026', size: '0.9 MB' },
  { name: '7/12 Land Record', icon: '🌾', status: 'verified', issued: '1 Jan 2026', expiry: '1 Jan 2027', size: '3.2 MB' },
  { name: 'Marksheet (B.E. Final)', icon: '🎓', status: 'pending', issued: '30 Jun 2020', expiry: 'Lifetime', size: '5.6 MB' },
  { name: 'Bank Passbook / Statement', icon: '🏦', status: 'required', issued: '—', expiry: '—', size: '—' },
  { name: 'Passport Photo', icon: '📷', status: 'verified', issued: '15 Aug 2025', expiry: '—', size: '0.3 MB' },
];

const CONSENTS = [
  { dept: 'Education Dept.', icon: '📚', data: 'Caste cert., income cert., marksheet', purpose: 'Scholarship eligibility verification', granted: '18 Aug 2026', expiry: '18 Feb 2027', status: 'active' },
  { dept: 'Agriculture Dept.', icon: '🌾', data: '7/12 land record, Aadhaar, bank details', purpose: 'Farmer scheme benefit transfer', granted: '22 Aug 2026', expiry: '22 Aug 2027', status: 'active' },
  { dept: 'Revenue Dept.', icon: '📜', data: 'Aadhaar, address proof', purpose: 'Certificate issuance', granted: '5 Jul 2026', expiry: '5 Jan 2027', status: 'active' },
  { dept: 'Health Dept.', icon: '🏥', data: 'Aadhaar, income certificate', purpose: 'Jan Arogya health scheme enrollment', granted: '10 Sep 2025', expiry: '10 Sep 2026', status: 'expiring' },
];

const NOTIFICATIONS = [
  { icon: '✅', title: 'Scholarship approved', body: 'Your Maharashtra Student Scholarship (APP-2026-08-5513) has been approved. ₹12,000 will be credited to your linked account in 3–5 working days.', time: '2 hours ago', unread: true },
  { icon: '📄', title: 'Document expiry alert', body: 'Your Domicile Certificate expires on 15 Oct 2026 (42 days remaining). Renew to avoid disruption to applications.', time: 'Yesterday, 6:30 PM', unread: true },
  { icon: '🔒', title: 'New login from Pune', body: 'A login was detected from Pune, Maharashtra using Chrome on Windows. If this wasn\'t you, secure your account immediately.', time: '2 Sep 2026, 9:12 AM', unread: true },
  { icon: '🏛️', title: 'New scheme launched — Mahila Udyam', body: 'Maharashtra government has launched Mahila Udyam Yojana for women entrepreneurs. Check your eligibility.', time: '1 Sep 2026', unread: false },
  { icon: '🤝', title: 'Consent expiry reminder', body: 'Your consent to Health Dept. expires on 10 Sep 2026. Renew to maintain Jan Arogya scheme enrollment.', time: '28 Aug 2026', unread: false },
];

const ELIGIBILITY = [
  { name: 'PM Kisan Samman Nidhi', dept: 'Agriculture Dept.', match: 92, level: 'high', reason: 'Matched: Maharashtra farmer, land ≤ 5 acres, income ≤ ₹1.5L, Aadhaar linked, bank account required', docs: ['Land record', 'Aadhaar', 'Bank passbook'] },
  { name: 'Swayam Siddha Farmer Scheme', dept: 'Agriculture Dept.', match: 88, level: 'high', reason: 'Matched: Pune district farmer, OBC category, land ownership verified', docs: ['7/12 record', 'Caste cert.', 'Income cert.'] },
  { name: 'Rajiv Gandhi Scholarship (OBC)', dept: 'Social Justice Dept.', match: 81, level: 'high', reason: 'Matched: OBC category, B.E. graduate, income ≤ ₹2L, Maharashtra domicile', docs: ['Caste cert.', 'Marksheet', 'Income cert.'] },
  { name: 'Mahatma Phule Jan Arogya Yojana', dept: 'Health Dept.', match: 76, level: 'medium', reason: 'Matched: Income criteria, Maharashtra resident. Yellow ration card may be required.', docs: ['Aadhaar', 'Income cert.', 'Ration card'] },
  { name: 'Pradhan Mantri Awas Yojana (Rural)', dept: 'Housing Dept.', match: 68, level: 'medium', reason: 'Matched: Income below threshold. No pucca house in records. Verification required.', docs: ['Income cert.', 'Land record', 'Aadhaar'] },
  { name: 'MUDRA Shishu Loan', dept: 'Finance Dept.', match: 55, level: 'medium', reason: 'Partially matched: Self-employed. Business registration and bank statements needed.', docs: ['Business proof', 'Bank statement', 'Aadhaar'] },
  { name: 'Gharkul (Social Welfare Housing)', dept: 'Housing Dept.', match: 72, level: 'medium', reason: 'Matched: OBC category, income criteria. Priority for rural applicants.', docs: ['Caste cert.', 'Income cert.', 'Domicile cert.'] },
  { name: 'Baliraja Krishi Pump Subsidy', dept: 'Energy Dept.', match: 84, level: 'high', reason: 'Matched: Verified farmer, land record available, below subsidy income limit', docs: ['7/12 record', 'Aadhaar', 'Electricity bill'] },
];

const CONNECTORS = [
  { name: 'MahaDBT', full: 'Maharashtra Direct Benefit Transfer', icon: '🏛️', status: 'connected', health: 'Healthy', sync: '2 min ago', responseTime: '142ms', requests: '8,492', errors: '3', auth: 'OAuth 2.0 (Sandbox)' },
  { name: 'Aaple Sarkar', full: 'Aaple Sarkar Portal', icon: '📋', status: 'connected', health: 'Healthy', sync: '5 min ago', responseTime: '89ms', requests: '12,841', errors: '0', auth: 'API Key (Sandbox)' },
  { name: 'Revenue Registry', full: 'Maharashtra Revenue Dept. Registry', icon: '📜', status: 'degraded', health: 'Degraded', sync: '12 min ago', responseTime: '1,240ms', requests: '3,201', errors: '47', auth: 'mTLS (Sandbox)' },
  { name: 'Education Registry', full: 'Maharashtra Education Dept.', icon: '🎓', status: 'connected', health: 'Healthy', sync: '1 min ago', responseTime: '220ms', requests: '5,602', errors: '8', auth: 'OAuth 2.0 (Sandbox)' },
];

const AUDIT = [
  { ts: 'Today 9:12 AM', user: 'Rahul Patil', action: 'Login', dept: 'Portal', ip: '192.168.1.x · Pune', result: 'Success', risk: 'low' },
  { ts: 'Today 9:14 AM', user: 'Rahul Patil', action: 'Document viewed', dept: 'Document Vault', ip: '192.168.1.x · Pune', result: 'Success', risk: 'low' },
  { ts: 'Yesterday 4:30 PM', user: 'Rahul Patil', action: 'OTP requested', dept: 'Profile', ip: '192.168.1.x · Pune', result: 'OTP sent', risk: 'medium' },
  { ts: 'Yesterday 4:31 PM', user: 'Rahul Patil', action: 'Profile update attempt', dept: 'Profile', ip: '192.168.1.x · Pune', result: 'Cancelled', risk: 'low' },
  { ts: '2 Sep 2026 2:10 PM', user: 'Rahul Patil', action: 'Consent granted', dept: 'Education Dept.', ip: '192.168.1.x · Pune', result: 'Success', risk: 'low' },
  { ts: '3 Sep 2026 10:05 AM', user: 'Rahul Patil', action: 'Application submitted', dept: 'Housing Dept.', ip: '192.168.1.x · Pune', result: 'APP-2026-09-0011', risk: 'low' },
  { ts: '3 Sep 2026 10:02 AM', user: 'Suresh.Officer', action: 'Application reviewed', dept: 'Agriculture Dept.', ip: '10.0.0.x · Nashik', result: 'Approved', risk: 'low' },
  { ts: '2 Sep 2026 11:40 AM', user: 'Admin.Sys', action: 'Failed login attempt', dept: 'Portal', ip: '203.x.x.x · Unknown', result: 'Blocked', risk: 'high' },
];

const TRACKING = [
  {
    id: 'APP-2026-08-5513', scheme: 'Maharashtra Student Scholarship', dept: 'Education Dept.',
    submitted: '18 Aug 2026', status: 'approved', color: 'success',
    steps: [
      { label: 'Application Submitted', sub: '18 Aug 2026', done: true },
      { label: 'Document Verification', sub: '20 Aug 2026 — All docs verified', done: true },
      { label: 'Department Review', sub: '22 Aug 2026 — Reviewed by officer', done: true },
      { label: 'Approved', sub: '5 Sep 2026 — ₹12,000 to be disbursed', done: true, active: false },
    ]
  },
  {
    id: 'APP-2026-08-7842', scheme: 'Swayam Siddha Scheme', dept: 'Agriculture Dept.',
    submitted: '22 Aug 2026', status: 'Under Review', color: 'warning',
    steps: [
      { label: 'Application Submitted', sub: '22 Aug 2026', done: true },
      { label: 'Document Verification', sub: '24 Aug 2026 — 3 of 4 docs verified', done: true },
      { label: 'Department Review', sub: 'In progress — Officer: Suresh Mane', done: false, active: true },
      { label: 'Decision', sub: 'Expected: 10 Sep 2026', done: false },
    ]
  },
  {
    id: 'APP-2026-09-0011', scheme: 'Gharkul Housing Scheme', dept: 'Housing Dept.',
    submitted: '3 Sep 2026', status: 'Doc Pending', color: 'info',
    steps: [
      { label: 'Application Submitted', sub: '3 Sep 2026', done: true },
      { label: 'Document Verification', sub: 'Waiting for: Bank passbook', done: false, active: true },
      { label: 'Department Review', sub: 'Pending document clearance', done: false },
      { label: 'Decision', sub: 'Est. 30 days after doc submission', done: false },
    ]
  },
];
// GovBridge applications created during this session
const GOVBRIDGE_APPLICATIONS = [];
// ==================== NAVIGATION ====================
let currentRole = 'citizen';
let currentPage = 'dashboard';

const NAV_CONFIG = {
  citizen: [
    { section: 'Main' },
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'services', label: 'Government Services', icon: '🏛️' },
    { id: 'tracking', label: 'Application Tracking', icon: '📋', badge: '3' },
    { section: 'Tools' },
    { id: 'documents', label: 'Document Vault', icon: '📄' },
    { id: 'eligibility', label: 'Smart Eligibility', icon: '✅' },
    { id: 'consent', label: 'Consent Management', icon: '🔐' },
    { id: 'assistant', label: 'Seva AI Assistant', icon: '🤖' },
    { section: 'Account' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', badge: '3' },
    { id: 'grievance', label: 'Grievance & Support', icon: '📞' },
    { id: 'security', label: 'Security Center', icon: '🔒' },
  ],
  officer: [
    { section: 'Officer Portal' },
    { id: 'officer-dashboard', label: 'My Dashboard', icon: '📊' },
    { id: 'tracking', label: 'Application Queue', icon: '📋', badge: '47' },
    { id: 'audit', label: 'Audit Trail', icon: '📑' },
    { id: 'connectors', label: 'API Connectors', icon: '🔌' },
    { section: 'Account' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'security', label: 'Security', icon: '🔒' },
  ],
  admin: [
    { section: 'Administration' },
    { id: 'admin-dashboard', label: 'System Overview', icon: '📊' },
    { id: 'connectors', label: 'API Connectors', icon: '🔌' },
    { id: 'audit', label: 'Audit Log', icon: '📑' },
    { section: 'Management' },
    { id: 'services', label: 'Service Catalog', icon: '🏛️' },
    { id: 'notifications', label: 'Announcements', icon: '📣' },
    { section: 'Account' },
    { id: 'security', label: 'Security', icon: '🔒' },
  ]
};

function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('userRoleLabel').textContent =
    role === 'citizen' ? 'Citizen · Verified' :
    role === 'officer' ? 'Officer · Agriculture Dept.' : 'Admin · System';
  buildNav();
  const defaultPages = { citizen: 'dashboard', officer: 'officer-dashboard', admin: 'admin-dashboard' };
  navigate(defaultPages[role]);
}

function buildNav() {
  const nav = document.getElementById('sidebarNav');
  const items = NAV_CONFIG[currentRole];
  let html = '';
  items.forEach(item => {
    if (item.section) {
      html += `<div class="sidebar-label">${item.section}</div>`;
    } else {
      const badge = item.badge ? `<span class="nav-badge">${item.badge}</span>` : '';
      html += `<div class="nav-item ${item.id === currentPage ? 'active' : ''}" onclick="navigate('${item.id}')">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
        ${badge}
      </div>`;
    }
  });
  nav.innerHTML = html;
}

function navigate(pageId) {
  currentPage = pageId;
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.onclick && n.onclick.toString().includes(`'${pageId}'`)) n.classList.add('active');
  });
  // Update topbar title
  const labels = {
    dashboard: 'Dashboard', profile: 'My Profile', services: 'Government Services Hub',
    tracking: 'Application Tracking', documents: 'Document Vault',
    eligibility: 'Smart Eligibility Engine', consent: 'Consent Management',
    assistant: 'Seva AI Assistant', notifications: 'Notification Center',
    grievance: 'Grievance & Support', security: 'Security Center',
    connectors: 'API Connector Center', audit: 'Audit Log',
    'admin-dashboard': 'Admin Dashboard', 'officer-dashboard': 'Officer Dashboard',
    'officer-review': 'Application Review'
  };
  document.getElementById('topbarTitle').textContent = labels[pageId] || pageId;
  buildNav();
  window.scrollTo(0, 0);
}

// ==================== TABS ====================
function switchTab(el, panelId) {
  const parent = el.closest('.tabs, .card, .page');
  parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  // Find all sibling panels
  const allPanels = document.querySelectorAll('#' + panelId).length ? [document.getElementById(panelId)] : [];
  // Hide all tab panels in the same section
  const tabSection = el.closest('.card') || el.closest('.page');
  if (tabSection) {
    tabSection.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
  }
  // Hide tabs by id
  const sibs = ['prof-personal','prof-contact','prof-education','prof-bank','prof-emergency',
    'consent-active','consent-pending','consent-history',
    'notif-all','notif-app','notif-sec','notif-doc','notif-govt'];
  sibs.forEach(id => { const el = document.getElementById(id); if(el) el.style.display = 'none'; });
  const panel = document.getElementById(panelId);
  if (panel) panel.style.display = 'block';
}

// ==================== OTP ====================
let otpTimer;
function openOTP(type) {
  const titles = { mobile: 'Change Mobile Number', email: 'Change Email Address', bank: 'Link Bank Account', totp: 'Set Up Authenticator', password: 'Change Password' };
  document.getElementById('otpTitle').textContent = titles[type] || 'Verify Identity';
  document.getElementById('otpModal').classList.add('open');
  ['otp1','otp2','otp3','otp4','otp5','otp6'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('otp1').focus();
  let secs = 30;
  clearInterval(otpTimer);
  otpTimer = setInterval(() => {
    document.getElementById('otpTimer').textContent = secs-- + 's';
    if (secs < 0) { clearInterval(otpTimer); document.getElementById('otpTimer').textContent = 'Resend'; }
  }, 1000);
}

function closeOTP() {
  document.getElementById('otpModal').classList.remove('open');
  clearInterval(otpTimer);
}

function otpNext(input) {
  if (input.value.length === 1) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains('otp-box')) next.focus();
  }
}

function verifyOTP() {
  const code = ['otp1','otp2','otp3','otp4','otp5','otp6'].map(id => document.getElementById(id).value).join('');
  if (code.length < 6) { showToast('Enter all 6 digits'); return; }
  closeOTP();
  showToast('✅ Identity verified successfully. You can now update this field.');
}

// ==================== CHAT ====================
const AI_RESPONSES = {
  'which schemes am i eligible for?': 'Based on your profile, you are likely eligible for:\n\n1. **PM Kisan Samman Nidhi** (92% match) — ₹6,000/year for farmers\n2. **Swayam Siddha Scheme** (88% match) — Agricultural support\n3. **Rajiv Gandhi Scholarship OBC** (81% match) — Education grant\n4. **Gharkul Housing** (72% match) — Housing benefit\n\nWould you like details on any of these schemes?',
  'what documents do i need for housing scheme?': 'For the **Gharkul Housing Scheme**, you will need:\n\n📄 Aadhaar Card (verified ✓)\n📄 Income Certificate (verified ✓)\n📄 Caste Certificate (verified ✓)\n📄 Domicile Certificate (verified ✓)\n🔴 Bank Passbook — *not yet uploaded*\n📄 7/12 Land Record (verified ✓)\n\nYou are missing your Bank Passbook. Upload it in your Document Vault to complete your Gharkul application.',
  'check my application status': 'Your active applications:\n\n✅ **APP-2026-08-5513** — Student Scholarship\n→ **Approved** — ₹12,000 disbursement in 3–5 days\n\n⏳ **APP-2026-08-7842** — Swayam Siddha Scheme\n→ **Under Review** — Officer review in progress. SLA: 2 days remaining\n\n📄 **APP-2026-09-0011** — Gharkul Housing\n→ **Documents Pending** — Upload bank passbook to proceed',
  'how do i apply for ration card?': 'To apply for a **Ration Card** in Maharashtra:\n\n1. Go to **Government Services Hub** in SevaLink\n2. Search for "Ration Card"\n3. Click **Apply Now**\n4. Documents needed: Aadhaar, income proof, address proof, family photo\n\nAlternately, visit your nearest **Aaple Sarkar Seva Kendra** or apply at mahafood.gov.in\n\nProcessing time: 21 working days',
  'what is pm kisan scheme?': '**PM Kisan Samman Nidhi** is a central government scheme that provides income support of ₹6,000 per year to all landholding farmer families across India.\n\n📌 Benefit: ₹6,000/year in 3 installments of ₹2,000\n📌 Eligibility: All farmer families with landholding records\n📌 Disbursement: Directly to Aadhaar-linked bank account\n\nBased on your profile, you are **92% eligible**. Would you like to apply?',
  'how long does domicile certificate take?': 'A **Domicile Certificate** in Maharashtra typically takes:\n\n⏱ **15 working days** after document submission\n\nRequired documents:\n• Aadhaar card\n• School/college certificate (for birth proof)\n• Residence proof (utility bill or rent agreement)\n\nYour existing domicile certificate expires on **15 Oct 2026**. You can renew it via the Aaple Sarkar portal or Revenue Department.',
  'what is mahadbt?': '**MahaDBT (Maharashtra Direct Benefit Transfer)** is the state\'s central platform for delivering government scheme benefits directly to beneficiaries\' bank accounts.\n\n🔹 Covers: Scholarships, agriculture subsidies, social welfare benefits\n🔹 Integration: Aadhaar-linked bank accounts (DBT mode)\n🔹 Status: Connected to SevaLink (Sandbox mode in this demo)\n\nAll scheme benefits in Maharashtra are routed through MahaDBT to ensure direct, transparent delivery.',
  'how to link aadhaar to ration card?': 'To link Aadhaar to your Ration Card:\n\n1. Visit your nearest **Fair Price Shop** or **Seva Kendra**\n2. Carry original Aadhaar card + Ration Card\n3. Submit biometric (fingerprint) verification\n4. SMS confirmation within 24 hours\n\nOnline option: mahafood.gov.in → Aadhaar Seeding\n\nThis is **mandatory** for receiving subsidized food grains under the National Food Security Act.',
};

// ==================== CHAT ====================
let pendingSevaApplication = null;

function isApplicationRequest(msg) {
  const text = msg.toLowerCase().trim();
  return [
    /\bi want to apply\b/,
    /\bi'd like to apply\b/,
    /\bi would like to apply\b/,
    /\bi need to apply\b/,
    /\bapply for\b/,
    /\bapply to\b/,
    /\bsubmit (an|my|the)?\s*application\b/,
    /\bstart (an|my|the)?\s*application\b/,
    /\bmake an application\b/
  ].some(pattern => pattern.test(text));
}

function getCheckLabel(check) {
  const labels = {
    identity: 'Identity verification',
    land: 'Land ownership verification',
    tax: 'Tax status verification',
    welfare: 'Welfare eligibility verification',
    education: 'Education / student verification',
    agriculture: 'Agriculture / farmer verification'
  };
  return labels[check] || check;
}

function getServiceLabel(service, originalRequest) {
  if (service && service !== 'Government Service') return service;
  const text = originalRequest.toLowerCase();
  if (text.includes('welfare') || text.includes('benefit')) return 'Social Welfare';
  if (text.includes('scholarship') || text.includes('education')) return 'Scholarship / Education';
  if (text.includes('farmer') || text.includes('agriculture') || text.includes('crop')) return 'Farmer Benefit';
  if (text.includes('housing') || text.includes('house')) return 'Housing Subsidy';
  return service || 'Government Service';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showApplicationConsentCard(service, requiredChecks, originalRequest) {
  pendingSevaApplication = { service, requiredChecks, request: originalRequest };

  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = 'seva-application-card';

  const checks = requiredChecks.length
    ? requiredChecks.map(check => `
        <div class="ai-check-item"><span>✓</span><span>${escapeHtml(getCheckLabel(check))}</span></div>
      `).join('')
    : `<div class="ai-check-item"><span>✓</span><span>Required information will be verified through GovBridge</span></div>`;

  div.innerHTML = `
    <div class="chat-bubble">
      <div class="ai-application-card">
        <div class="ai-application-title">📋 ${escapeHtml(service)} Application</div>
        <div class="ai-application-sub">Seva AI identified the government checks required for this application.</div>
        <div style="font-size:11px;font-weight:600;color:var(--gray-600)">Requirements / verification checks</div>
        <div class="ai-check-list">${checks}</div>
        <div class="ai-consent-box">
          🔐 <strong>Consent required</strong><br>
          I authorize GovBridge to share the information required for this application
          with the relevant government departments for eligibility and application
          processing. This is sandbox/demo data.
        </div>
        <div class="ai-application-actions">
          <button class="btn btn-success btn-sm" onclick="confirmSevaApplication()">✓ Give Consent & Continue</button>
          <button class="btn btn-outline btn-sm" onclick="cancelSevaApplication()">Cancel</button>
        </div>
        <div class="ai-application-status" id="seva-application-status"></div>
      </div>
    </div>
    <div class="chat-meta">Seva AI · Now</div>
  `;

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function cancelSevaApplication() {
  const card = document.getElementById('seva-application-card');
  if (card) card.remove();
  pendingSevaApplication = null;
  addMsg('Application cancelled. No government checks were submitted.', 'bot');
}

function confirmSevaApplication() {
  if (!pendingSevaApplication) return;

  const application = pendingSevaApplication;
  const status = document.getElementById('seva-application-status');
  const buttons = document.querySelectorAll('#seva-application-card button');
  buttons.forEach(button => button.disabled = true);

  if (status) {
    status.style.color = 'var(--navy)';
    status.textContent = '🔐 Verifying consent and submitting your application...';
  }

  fetch("https://laptop-pst1q70d.tailb251b7.ts.net/agent/application", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      citizen_id: "CIT-1001",
      consent_id: "CONSENT-1001",
      request: application.request
    })
  })
    .then(response => {
      if (!response.ok) throw new Error("Backend returned " + response.status);
      return response.json();
    })
    .then(result => {
      if (!result.success) {
        if (status) {
          status.style.color = 'var(--danger)';
          status.textContent = "❌ " + (result.message || "Consent/application submission failed");
        }
        buttons.forEach(button => button.disabled = false);
        return;
      }

      if (status) {
        status.style.color = 'var(--success)';
        status.textContent = `✅ Consent verified. Application ${result.application_id} submitted.`;
      }

      const newApplication = {
        id: result.application_id,
        scheme: result.service || application.service,
        dept: "GovBridge Interoperability Layer",
        submitted: new Date().toLocaleDateString("en-GB", {
          day: "numeric", month: "short", year: "numeric"
        }),
        status: "Processing", color: "warning",
        steps: [
          { label: "Application Submitted", sub: "Submitted through Seva AI after consent", done: true },
          { label: "GovBridge Agent Planning", sub: "Required government checks identified", done: true },
          { label: "Government Departments", sub: "Processing through connected APIs", done: false, active: true },
          { label: "Unified Response", sub: "Waiting for department checks", done: false }
        ]
      };

      GOVBRIDGE_APPLICATIONS.unshift(newApplication);
      renderTracking();
      startGovBridgeTracking(result.application_id);

      setTimeout(() => navigate('tracking'), 900);
      pendingSevaApplication = null;
    })
    .catch(error => {
      console.error("GovBridge application error:", error);
      if (status) {
        status.style.color = 'var(--danger)';
        status.textContent = "⚠️ Could not connect to GovBridge. Make sure FastAPI is running on port 8000.";
      }
      buttons.forEach(button => button.disabled = false);
    });
}

function sendChat(msg) {
  addMsg(msg, 'user');

  const chatMessages = document.getElementById('chatMessages');
  const thinking = document.createElement('div');
  thinking.className = 'chat-msg bot';
  thinking.id = 'govbridge-thinking';
  thinking.innerHTML = `
    <div class="chat-bubble">🤖 GovBridge Agent is analyzing your request...</div>
    <div class="chat-meta">Seva AI · Now</div>
  `;
  chatMessages.appendChild(thinking);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  fetch('https://laptop-pst1q70d.tailb251b7.ts.net/agent/query?query=' + encodeURIComponent(msg), { method: 'POST' })
    .then(response => {
      if (!response.ok) throw new Error('Backend returned ' + response.status);
      return response.json();
    })
    .then(result => {
      const thinkingMessage = document.getElementById('govbridge-thinking');
      if (thinkingMessage) thinkingMessage.remove();

      if (!result.success) {
        addMsg('Sorry, GovBridge could not process your request.', 'bot');
        return;
      }

      if (isApplicationRequest(msg)) {
        let decision;
        try {
          decision = JSON.parse(result.response);
        } catch (error) {
          console.error('Could not parse agent decision:', error);
          addMsg('⚠️ Seva AI could not safely prepare this application. Please try again.', 'bot');
          return;
        }

        const requiredChecks = Array.isArray(decision.required_checks)
          ? decision.required_checks : [];
        const service = getServiceLabel(decision.service, msg);

        showApplicationConsentCard(service, requiredChecks, msg);
        return;
      }

      addMsg(result.response, 'bot');
    })
    .catch(error => {
      console.error('GovBridge connection error:', error);
      const thinkingMessage = document.getElementById('govbridge-thinking');
      if (thinkingMessage) thinkingMessage.remove();
      addMsg(
        '⚠️ GovBridge backend is currently unavailable. Please make sure the FastAPI server is running on port 8000.',
        'bot'
      );
    });
}


function sendChatInput() {
  const inp = document.getElementById('chatInput');

  const val = inp.value.trim();

  if (!val) {
    return;
  }

  inp.value = '';

  sendChat(val);
}

function addMsg(text, type) {
  const msgs = document.getElementById('chatMessages');
  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  const safeText = escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  div.innerHTML = `<div class="chat-bubble">${safeText}</div><div class="chat-meta">${type === 'user' ? 'You' : 'Seva AI'} · ${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// ==================== RENDER ====================
function renderServices(filter = '') {
  const grid = document.getElementById('serviceGrid');
  if (!grid) return;
  const filtered = SERVICES.filter(s =>
    (!filter || s.cat === filter) &&
    s.name.toLowerCase().includes(searchTerm)
  );
  grid.innerHTML = filtered.map(s => `
    <div class="service-card" onclick="showToast('Opening ${s.name} — Demo Mode')">
      <div class="service-card-icon">${s.icon}</div>
      <div class="service-card-name">${s.name}</div>
      <div class="service-card-dept">${s.dept}</div>
      <div class="service-card-time">⏱ ${s.time}</div>
      <div style="margin-top:10px;display:flex;gap:6px">
        <button class="btn btn-primary btn-xs" onclick="event.stopPropagation();applyService('${s.name.replace(/'/g, "\\'")}')">Apply</button>
        <button class="btn btn-outline btn-xs" onclick="event.stopPropagation();showToast('Details: ${s.name}')">Info</button>
      </div>
    </div>
  `).join('');
}
function applyService(serviceName) {
  navigate('assistant');
  sendChat(`I want to apply for ${serviceName}.`);
}
function startGovBridgeTracking(applicationId) {

  const interval = setInterval(() => {

    fetch(
      `https://laptop-pst1q70d.tailb251b7.ts.net/applications/${applicationId}/status`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Status request failed");
        }

        return response.json();
      })
      .then(result => {

        if (!result.success) {
          clearInterval(interval);
          return;
        }

        const app = GOVBRIDGE_APPLICATIONS.find(
          item => item.id === applicationId
        );

        if (!app) {
          clearInterval(interval);
          return;
        }

        // Update overall status
        app.status =
          result.status === "completed"
            ? "Completed"
            : result.status === "failed"
            ? "Failed"
            : "Processing";

        app.color =
          result.status === "completed"
            ? "success"
            : result.status === "failed"
            ? "info"
            : "warning";

        // Update timeline
        const progress = result.progress || 0;

        app.steps[2].sub =
          `${result.current_step || "Processing"} · ${progress}% complete`;

        if (progress >= 100) {

          app.steps[2].done = true;
          app.steps[2].active = false;

          app.steps[2].sub =
            "All required government checks completed";

          app.steps[3].done = true;
          app.steps[3].active = false;

          app.steps[3].sub =
            "GovBridge generated the unified response";

          clearInterval(interval);

        } else if (result.status === "failed") {

          app.steps[2].done = false;
          app.steps[2].active = false;

          app.steps[2].sub =
            result.error || "Government department unavailable";

          clearInterval(interval);
        }

        renderTracking();

      })
      .catch(error => {

        console.error(
          "GovBridge tracking error:",
          error
        );

        const app = GOVBRIDGE_APPLICATIONS.find(
          item => item.id === applicationId
        );
        if (app) {
          app.steps[2].sub =
            "Unable to retrieve the latest application status";
          renderTracking();
        }
        showToast("Unable to retrieve the latest GovBridge application status.");

        clearInterval(interval);

      });

  }, 2000);
}
let serviceFilter = 'all';
let searchTerm = '';
function filterCat(btn, cat) {
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.remove('active'); c.style.borderColor = ''; c.style.color = '';
  });
  btn.classList.add('active'); btn.style.borderColor = 'var(--navy)'; btn.style.color = 'var(--navy)';
  serviceFilter = cat;
  renderServices(cat === 'all' ? '' : cat);
}
function filterServices(val) { searchTerm = val.toLowerCase(); renderServices(serviceFilter === 'all' ? '' : serviceFilter); }

function renderDocs() {
  const grid = document.getElementById('docGrid');
  if (!grid) return;
  grid.innerHTML = DOCS.map(d => {
    const badge = d.status === 'verified' ? '<span class="verify-badge verify-verified">✓ Verified</span>' :
      d.status === 'pending' ? '<span class="verify-badge verify-pending">⏳ Pending</span>' :
      '<span class="verify-badge verify-required">Upload Required</span>';
    const expiring = d.expiry && d.expiry.includes('2026') ? '<span class="badge badge-warning" style="font-size:10px;margin-left:4px">Expiring</span>' : '';
    return `<div class="doc-card">
      <div class="doc-icon-wrap">${d.icon}</div>
      <div class="doc-name">${d.name}${expiring}</div>
      <div style="margin-top:6px">${badge}</div>
      <div class="doc-meta">Issued: ${d.issued} · Expiry: ${d.expiry}</div>
      ${d.size !== '—' ? `<div class="doc-meta">Size: ${d.size}</div>` : ''}
      <div class="doc-actions">
        ${d.status !== 'required' ? '<button class="btn btn-outline btn-xs" onclick="showToast(\'Document preview — Demo\')">👁 View</button>' : ''}
        ${d.status !== 'required' ? '<button class="btn btn-outline btn-xs" onclick="showToast(\'Download initiated\')">⬇ Download</button>' : ''}
        ${d.status === 'required' ? '<button class="btn btn-primary btn-xs" onclick="showToast(\'Upload panel — Demo\')">⬆ Upload</button>' : ''}
        <button class="btn btn-outline btn-xs" onclick="showToast(\'Share with department\')">🔗 Share</button>
      </div>
    </div>`;
  }).join('');
}

function renderConsents() {
  const list = document.getElementById('consentList');
  if (!list) return;
  list.innerHTML = CONSENTS.map(c => {
    const expBadge = c.status === 'expiring' ? '<span class="badge badge-warning">Expiring</span>' : '<span class="badge badge-success">Active</span>';
    return `<div class="consent-card">
      <div class="consent-icon">${c.icon}</div>
      <div class="consent-info">
        <div class="consent-name">${c.dept} ${expBadge}</div>
        <div class="consent-desc">Data: ${c.data}</div>
        <div class="consent-desc">Purpose: ${c.purpose}</div>
        <div class="consent-desc" style="color:var(--gray-400)">Granted: ${c.granted} · Expires: ${c.expiry}</div>
      </div>
      <div class="consent-actions">
        <button class="btn btn-outline btn-xs" onclick="showToast('Viewing consent details')">Details</button>
        <button class="btn btn-danger btn-xs" onclick="if(confirm('Revoke consent for ${c.dept}? This may affect your active applications.')) showToast('Consent revoked for ${c.dept}')">Revoke</button>
      </div>
    </div>`;
  }).join('');
}

function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;
  list.innerHTML = NOTIFICATIONS.map(n => `
    <div class="notif-item">
      <div class="notif-dot" style="${n.unread ? '' : 'background:transparent'}"></div>
      <div class="notif-icon">${n.icon}</div>
      <div class="notif-text">
        <div class="notif-title" style="${n.unread ? 'font-weight:600' : ''}">${n.title}</div>
        <div class="notif-body">${n.body}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      <button class="btn btn-outline btn-xs" onclick="showToast('Marked as read')">✓</button>
    </div>
  `).join('');
}

function renderEligibility() {
  const list = document.getElementById('eligibilityList');
  if (!list) return;
  list.innerHTML = ELIGIBILITY.map(e => {
    const lvlClass = e.level === 'high' ? '' : e.level === 'medium' ? 'medium' : 'low';
    const lvlColor = e.level === 'high' ? 'success' : e.level === 'medium' ? 'warning' : 'gray';
    return `<div class="scheme-card">
      <div class="scheme-match">
        <div class="match-circle ${lvlClass}">${e.match}%</div>
        <div style="font-size:10px;margin-top:4px;color:var(--${lvlColor === 'success' ? 'success' : lvlColor === 'warning' ? 'warning' : 'gray-500'})">${e.level === 'high' ? 'Strong' : e.level === 'medium' ? 'Partial' : 'Weak'}</div>
      </div>
      <div style="flex:1">
        <div class="scheme-name">${e.name}</div>
        <div class="scheme-dept">${e.dept}</div>
        <div class="scheme-reason">${e.reason}</div>
        <div style="margin-top:8px;font-size:11px;color:var(--gray-600)">Docs needed: ${e.docs.map(d => `<span class="badge badge-gray" style="margin-right:3px">${d}</span>`).join('')}</div>
        <div style="margin-top:10px;display:flex;gap:6px">
          <button class="btn btn-primary btn-sm" onclick="showToast('Redirecting to apply for ${e.name} — Demo')">Apply Now</button>
          <button class="btn btn-outline btn-sm" onclick="showToast('Scheme details — ${e.name}')">View Details</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderTracking() {
  const list = document.getElementById('trackingList');
  if (!list) return;

  const allApplications = [
    ...GOVBRIDGE_APPLICATIONS,
    ...TRACKING
  ];

  list.innerHTML = allApplications.map(app => {

    const statusBadge = `
      <span class="badge badge-${
        app.color === 'success'
          ? 'success'
          : app.color === 'warning'
          ? 'warning'
          : 'info'
      }">
        ${app.status}
      </span>
    `;

    const stepsHtml = app.steps.map(s => `
      <div class="timeline-item">
        <div class="timeline-dot ${
          s.done
            ? 'done'
            : s.active
            ? 'active'
            : 'pending'
        }"></div>

        <div class="timeline-label">${s.label}</div>
        <div class="timeline-sub">${s.sub}</div>
      </div>
    `).join('');

    return `
      <div class="card" style="margin-bottom:14px">

        <div class="card-header">

          <div>
            <div style="display:flex;align-items:center;gap:8px">
              <div class="card-title">${app.scheme}</div>
              ${statusBadge}
            </div>

            <div class="card-sub">
              ID: ${app.id} · ${app.dept} · Submitted: ${app.submitted}
            </div>
          </div>

          <div style="display:flex;gap:6px">
            <button
              class="btn btn-outline btn-sm"
              onclick="showToast('Download receipt for ${app.id}')">
              📥 Receipt
            </button>

            <button
              class="btn btn-outline btn-sm"
              onclick="showToast('Contact ${app.dept}')">
              📞 Contact
            </button>
          </div>

        </div>

        <div class="timeline">
          ${stepsHtml}
        </div>

      </div>
    `;

  }).join('');
}

function renderConnectors() {
  const grid = document.getElementById('connectorGrid');
  if (!grid) return;
  grid.innerHTML = CONNECTORS.map(c => {
    const statusBadge = c.status === 'connected' ? '<span class="badge badge-success">● Connected</span>' :
      c.status === 'degraded' ? '<span class="badge badge-warning">⚠ Degraded</span>' : '<span class="badge badge-danger">● Offline</span>';
    return `<div class="connector-card">
      <div class="connector-header">
        <div class="connector-icon">${c.icon}</div>
        <div>
          <div class="connector-name">${c.name}</div>
          <div class="connector-env">⚠️ SANDBOX / MOCK</div>
          <div style="font-size:11px;color:var(--gray-500)">${c.full}</div>
        </div>
        <div style="margin-left:auto">${statusBadge}</div>
      </div>
      <div class="connector-metric"><span class="metric-label">API Health</span><span class="metric-val ${c.health === 'Healthy' ? 'risk-low' : 'risk-med'}">${c.health}</span></div>
      <div class="connector-metric"><span class="metric-label">Last Sync</span><span class="metric-val">${c.sync}</span></div>
      <div class="connector-metric"><span class="metric-label">Response Time</span><span class="metric-val ${parseFloat(c.responseTime) > 500 ? 'risk-med' : 'risk-low'}">${c.responseTime}</span></div>
      <div class="connector-metric"><span class="metric-label">Requests (24h)</span><span class="metric-val">${c.requests}</span></div>
      <div class="connector-metric"><span class="metric-label">Errors (24h)</span><span class="metric-val ${parseInt(c.errors) > 10 ? 'risk-high' : 'risk-low'}">${c.errors}</span></div>
      <div class="connector-metric"><span class="metric-label">Auth Method</span><span class="metric-val">${c.auth}</span></div>
      <div style="margin-top:12px;display:flex;gap:6px">
        <button class="btn btn-outline btn-sm" onclick="showToast('Testing ${c.name} connection...')">Test</button>
        <button class="btn btn-outline btn-sm" onclick="showToast('Syncing ${c.name}...')">Sync</button>
        <button class="btn btn-outline btn-sm" onclick="showToast('${c.name} logs')">Logs</button>
      </div>
    </div>`;
  }).join('');
}

function renderAudit() {
  const tbody = document.getElementById('auditTable');
  if (!tbody) return;
  tbody.innerHTML = AUDIT.map(a => `
    <tr>
      <td style="font-size:11px;color:var(--gray-500)">${a.ts}</td>
      <td><strong>${a.user}</strong></td>
      <td>${a.action}</td>
      <td><span class="badge badge-gray">${a.dept}</span></td>
      <td style="font-size:11px;color:var(--gray-500)">${a.ip}</td>
      <td>${a.result}</td>
      <td><span class="risk-${a.risk}">${a.risk === 'high' ? '🔴 High' : a.risk === 'medium' ? '🟡 Medium' : '🟢 Low'}</span></td>
    </tr>
  `).join('');
}

// ==================== TOAST ====================
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { toast.style.display = 'none'; }, 3500);
}

// ==================== SIDEBAR TOGGLE ====================
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ==================== INIT ====================
buildNav();
navigate('dashboard');
renderServices();
renderDocs();
renderConsents();
renderNotifications();
renderEligibility();
renderTracking();
renderConnectors();
renderAudit();

// Responsive
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) document.getElementById('sidebar').classList.remove('open');
});

// Session timeout indicator (visual only)
let idleTimer = 30 * 60; // 30 min
setInterval(() => {
  idleTimer--;
  if (idleTimer <= 5 * 60 && idleTimer % 60 === 0) {
    showToast(`⚠️ Session expires in ${Math.ceil(idleTimer/60)} minute${idleTimer > 60 ? 's' : ''}`);
  }
  if (idleTimer <= 0) {
    idleTimer = 30 * 60; // reset for demo
  }
}, 1000);

// Reset idle on activity
document.addEventListener('click', () => { idleTimer = 30 * 60; });
document.addEventListener('keydown', () => { idleTimer = 30 * 60; });
