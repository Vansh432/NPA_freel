import smaImg from '../assets/service_sma.png'
import sarfaesiImg from '../assets/service_sarfaesi.png'
import drtImg from '../assets/service_drt.png'
import ncltImg from '../assets/service_nclt.png'
import otsImg from '../assets/service_ots.png'
import chequeImg from '../assets/service_cheque.png'

export const services = [
  {
    id: 'sma',
    icon: '📋',
    image: smaImg,
    title: 'SMA Resolution Support',
    short: 'Early intervention for SMA-1 (31–60 days) & SMA-2 (61–90 days) accounts. Stop NPA before it happens.',
    overview: 'SMA (Special Mention Account) is the critical warning stage before your loan becomes NPA. SMA-1 means EMI overdue 31–60 days; SMA-2 means 61–90 days — the last window before NPA declaration. Immediate expert intervention at either stage can prevent SARFAESI proceedings and protect your credit score.',
    whoNeeds: 'Borrowers who have missed 1–3 EMIs and are receiving recovery calls, field visits, or legal warning letters from the bank.',
    process: ['Case registration & loan account review', 'SMA stage assessment (SMA-1 or SMA-2)', 'Bank communication strategy', 'Negotiation for restructuring or repayment plan', 'SARFAESI risk prevention & NPA avoidance', 'Follow-up and closure'],
    documents: ['Loan account statement (last 12 months)', 'Bank notices received', 'Loan sanction letter', 'Financial documents', 'Property papers (if secured loan)'],
    faqs: [
      { q: 'What is the difference between SMA-1 and SMA-2?', a: 'SMA-1 is 31–60 days overdue (medium risk). SMA-2 is 61–90 days overdue (high risk, last stage before NPA). Both need immediate action.' },
      { q: 'Will SMA affect my CIBIL?', a: 'Yes, even SMA classification causes a negative impact on your credit score. The longer it continues, the worse the impact.' },
      { q: 'Can I stop becoming NPA from SMA-2?', a: 'Yes. With timely intervention — restructuring, partial payment, or OTS initiation — NPA classification can be prevented even at SMA-2.' },
    ],
  },
  {
    id: 'sarfaesi',
    icon: '🏛️',
    image: sarfaesiImg,
    title: 'SARFAESI Notice Assistance',
    short: 'Expert help for Section 13(2) and 13(4) notices. Auction prevention guidance.',
    overview: 'The SARFAESI Act, 2002 allows banks to recover secured loans without court intervention. Once you receive a Section 13(2) notice, you have 60 days to respond. Our experts guide you through every step.',
    whoNeeds: 'Anyone who has received a SARFAESI 13(2) or 13(4) notice from a bank or NBFC.',
    process: ['Notice review & legal analysis', 'Written representation preparation', 'Bank negotiation', 'OTS / repayment proposal', 'Auction prevention strategy'],
    documents: ['Original 13(2) or 13(4) notice', 'Loan documents', 'Property papers', 'Previous correspondence with bank'],
    faqs: [
      { q: 'What is a Section 13(2) notice?', a: 'It is a formal demand notice from the bank giving you 60 days to repay dues or face property action.' },
      { q: 'Can bank seal my property without court order?', a: 'Yes, under SARFAESI, banks can take symbolic or physical possession without a court order after 13(4) notice.' },
      { q: 'What happens if I ignore the notice?', a: 'Bank can proceed to 13(4) action — sealing and auctioning your property.' },
    ],
  },
  {
    id: 'drt',
    icon: '⚖️',
    image: drtImg,
    title: 'DRT & DRAT Cases',
    short: 'Debt Recovery Tribunal assistance. Auction stay & borrower rights protection.',
    overview: 'Debt Recovery Tribunal (DRT) is a specialized court for banking recovery matters above ₹20 lakh. Borrowers can approach DRT to challenge wrongful bank action, get auction stays, and present their case.',
    whoNeeds: 'Borrowers facing auction, wrongful SARFAESI action, or disputed recovery amounts.',
    process: ['Case evaluation & DRT applicability check', 'Application preparation', 'Representation before DRT', 'Stay order proceedings', 'Appeal to DRAT if required'],
    documents: ['Bank notices', 'Loan account details', 'Property valuation reports', 'Objection basis documents'],
    faqs: [
      { q: 'Can DRT stop a property auction?', a: 'Yes. DRT can grant a stay order on auction proceedings while the case is being heard.' },
      { q: 'What is DRAT?', a: 'Debt Recovery Appellate Tribunal — the appeals authority if you are unsatisfied with DRT order.' },
    ],
  },
  {
    id: 'nclt',
    icon: '🏢',
    image: ncltImg,
    title: 'NCLT & NCLAT Cases',
    short: 'Corporate insolvency support under IBC. Resolution Professional coordination.',
    overview: 'NCLT (National Company Law Tribunal) handles corporate insolvency under the Insolvency and Bankruptcy Code (IBC). If creditors file against your company, you need expert IBC guidance immediately.',
    whoNeeds: 'Company directors, promoters, and creditors dealing with NCLT insolvency proceedings.',
    process: ['IBC applicability assessment', 'Response to insolvency petition', 'Moratorium period strategy', 'Resolution plan preparation', 'NCLAT appeal if required'],
    documents: ['Company financials', 'NCLT petition copy', 'Board resolutions', 'Creditor communication'],
    faqs: [
      { q: 'What is moratorium under NCLT?', a: 'During insolvency proceedings, all recovery actions and legal proceedings against the company are paused.' },
      { q: 'Can promoters get back control after NCLT?', a: 'Yes, promoters can submit a resolution plan under IBC and regain control if it is approved.' },
    ],
  },
  {
    id: 'ots',
    icon: '🤝',
    image: otsImg,
    title: 'One Time Settlement (OTS)',
    short: 'Bank settlement negotiation. Lump sum & installment OTS structures.',
    overview: 'OTS (One Time Settlement) is the most common and effective way to close a stressed loan account. Banks accept a reduced amount as full and final settlement. Our experts negotiate the best possible OTS for you.',
    whoNeeds: 'NPA borrowers who want to close their account at a negotiated, reduced amount.',
    process: ['Outstanding amount analysis', 'OTS eligibility assessment', 'Settlement amount calculation', 'Bank negotiation', 'OTS documentation & closure'],
    documents: ['NPA account statement', 'Property valuation', 'Financial statements', 'Income/business proof'],
    faqs: [
      { q: 'How much discount can I get in OTS?', a: 'Depending on the case age, property value, and negotiation, borrowers often settle for 40–70% of outstanding.' },
      { q: 'Will OTS close my case permanently?', a: 'Yes. Once OTS is paid and NOC issued, the bank has no further claim on your property.' },
      { q: 'Does OTS affect CIBIL?', a: 'OTS is reported as "Settled" in CIBIL which is a negative remark, but it is far better than active NPA.' },
    ],
  },
  {
    id: 'cheque',
    icon: '📄',
    image: chequeImg,
    title: 'Legal Notice & Cheque Bounce Cases',
    short: 'Section 138 NI Act support. Criminal liability prevention & negotiation.',
    overview: 'Cheque bounce under Section 138 of the Negotiable Instruments Act carries criminal liability including fine and imprisonment. Quick action — legal notice reply and negotiation — is the best strategy.',
    whoNeeds: 'Anyone who has received a Section 138 legal notice or is facing a cheque bounce court case.',
    process: ['Notice review & timeline check', 'Legal notice reply preparation', 'Negotiation & settlement attempt', 'Court representation if needed', 'Case closure'],
    documents: ['Original cheque copy', 'Bank return memo', 'Legal notice received', 'Transaction proof'],
    faqs: [
      { q: 'What happens if I ignore a 138 notice?', a: 'The complainant will file a criminal complaint in court. You could face fine or imprisonment up to 2 years.' },
      { q: 'How much time do I have to pay after notice?', a: '15 days from receiving the notice to make payment and avoid court case.' },
    ],
  },
]

export const steps = [
  { num: '01', title: 'Register Your Case', desc: 'Share your loan details and the type of issue — SARFAESI, NPA, OTS, DRT, or Cheque Bounce — through our simple form.' },
  { num: '02', title: 'Upload Documents', desc: 'Upload notices, loan statements, and property papers securely for expert review.' },
  { num: '03', title: 'Expert Review', desc: 'Our banking and legal experts analyse your case, assess risks, and identify the best resolution path.' },
  { num: '04', title: 'Consultation', desc: 'Receive a detailed consultation — by phone, video, or in-person at our Mumbai/Delhi office.' },
  { num: '05', title: 'Resolution Strategy', desc: 'A customised action plan is implemented — OTS negotiation, DRT filing, restructuring, or bank communication.' },
]

export const whyUs = [
  { icon: '👨‍⚖️', title: 'Experienced Advisors', desc: 'Banking professionals and legal experts with 15+ years in NPA recovery and bank negotiations.' },
  { icon: '🔒', title: 'Confidential Handling', desc: 'Your case details are handled with strict data privacy and complete confidentiality.' },
  { icon: '🌏', title: 'PAN India Assistance', desc: 'Remote consultation available. Physical offices in Mumbai and Delhi for in-person meetings.' },
  { icon: '📊', title: 'Structured Resolution', desc: 'Every case gets a customised strategy — no one-size-fits-all approach.' },
]

export const testimonials = [
  { name: 'Rakesh Sharma', city: 'Mumbai', service: 'OTS Settlement', rating: 5, review: 'NPA Bazar helped me settle my ₹28 lakh NPA account for just ₹14 lakh. Their bank negotiation was excellent. Highly recommended!' },
  { name: 'Priya Agarwal', city: 'Delhi', service: 'SARFAESI Notice', rating: 5, review: 'I received a 13(2) notice and panicked. NPA Bazar team immediately helped me draft a response and start OTS talks. Property saved!' },
  { name: 'Mohammed Ansari', city: 'Ahmedabad', service: 'DRT Case', rating: 5, review: 'Bank was trying to auction my factory. NPA Bazar got a DRT stay within days and helped me negotiate a restructuring plan.' },
  { name: 'Sunita Verma', city: 'Pune', service: 'Cheque Bounce', rating: 5, review: 'Got a 138 notice for ₹5 lakh cheque. NPA Bazar helped me settle the matter without going to court. Saved me from criminal case.' },
  { name: 'Vikas Jain', city: 'Jaipur', service: 'SMA-2 Advisory', rating: 5, review: 'Was SMA-2 for 2 months. Their team negotiated a restructuring with the bank and I avoided NPA classification completely.' },
  { name: 'Deepa Nair', city: 'Bengaluru', service: 'NCLT Case', rating: 5, review: 'Our company faced NCLT insolvency petition. NPA Bazar guided us through the entire IBC process and we submitted a successful resolution plan.' },
]

export const blogs = [
  {
    id: 'what-is-sma2',
    title: 'What is SMA-2? Complete Guide for Borrowers',
    category: 'Banking Recovery',
    date: 'May 15, 2024',
    excerpt: 'SMA-2 is the last warning stage before your loan becomes NPA. Learn what it means, what banks do at this stage, and how you can prevent NPA classification.',
    content: `SMA-2 (Special Mention Account – Category 2) means your loan EMI is overdue for 61–90 days. This is a critical stage — if the overdue crosses 90 days, your account becomes a Non-Performing Asset (NPA) and recovery proceedings begin.

**What happens at SMA-2?**
Banks begin SARFAESI preparation, send recovery agents, and may issue legal warnings. Your CIBIL score gets significantly affected.

**How to respond?**
1. Contact your bank immediately and request a meeting
2. Propose a repayment plan or restructuring
3. Explore OTS (One Time Settlement) option
4. Seek professional advisory help

At NPA Bazar, we specialise in SMA-2 cases and have helped hundreds of borrowers prevent NPA classification through timely bank negotiation.`,
  },
  {
    id: 'how-to-respond-13-2',
    title: 'How to Respond to SARFAESI Section 13(2) Notice',
    category: 'SARFAESI',
    date: 'May 8, 2024',
    excerpt: 'Received a 13(2) notice? You have 60 days and specific legal rights. Here is the complete step-by-step guide on how to respond and protect your property.',
    content: `A Section 13(2) notice under the SARFAESI Act is a formal demand from your bank asking you to repay outstanding dues within 60 days. If you fail to respond, the bank can proceed to seize your property under Section 13(4).

**Your Rights Under 13(2):**
- You can send a written representation to the bank
- The bank is legally required to reply to your representation
- You can propose OTS or restructuring during this period

**Step-by-Step Response:**
1. Read the notice carefully — check the outstanding amount and security details
2. Prepare a written representation disputing any discrepancies
3. Submit the representation to the bank within the 60-day window
4. Initiate OTS or restructuring negotiations
5. If bank does not respond to representation, approach DRT

Our team at NPA Bazar has handled 1000+ SARFAESI cases. Contact us immediately if you have received a 13(2) notice.`,
  },
  {
    id: 'ots-process-explained',
    title: 'OTS Process Explained: How to Settle Your NPA Account',
    category: 'OTS',
    date: 'April 30, 2024',
    excerpt: 'One Time Settlement (OTS) is the most effective way to close an NPA account at a reduced amount. Learn the complete OTS process, eligibility, and negotiation strategy.',
    content: `One Time Settlement (OTS) is a mutual agreement between the borrower and the bank where the bank accepts a lower amount than the outstanding dues as full and final settlement.

**Why Do Banks Offer OTS?**
Banks prefer OTS because full recovery through auction is expensive and time-consuming. They would rather settle for 50–70% of outstanding than wait years for legal proceedings.

**OTS Eligibility:**
- Account classified as NPA
- Genuine financial hardship
- Willingness to pay a lump sum or structured installments

**OTS Negotiation Tips:**
1. Never approach the bank without professional advisory
2. Start with a lower counter-offer (30–40% of outstanding)
3. Back your offer with documented proof of financial hardship
4. Get everything in writing — OTS sanction letter, payment schedule, NOC commitment

NPA Bazar has negotiated OTS settlements for borrowers at 40–60% of outstanding amounts. Our expert team handles all bank communication on your behalf.`,
  },
  {
    id: 'stop-property-auction',
    title: 'How to Stop Property Auction Under SARFAESI',
    category: 'SARFAESI',
    date: 'April 22, 2024',
    excerpt: 'Bank has issued auction notice? You still have legal remedies available. Here are the proven ways to stop or delay a property auction.',
    content: `Receiving an auction notice does not mean you have no options. There are multiple legal remedies available even after an auction notice.

**Options to Stop Auction:**
1. **OTS before auction date** — Pay negotiated settlement amount
2. **DRT Stay Order** — File application at Debt Recovery Tribunal
3. **High Court Writ** — If SARFAESI procedure not followed correctly
4. **Repay dues** — Pay the outstanding + interest + charges

**DRT Route (Most Common):**
File an SA (Securitisation Application) under Section 17 of SARFAESI at DRT. DRT can grant a stay on auction and hear your case.

**Important**: Act immediately. Do not wait for the auction date to approach.`,
  },
  {
    id: 'cheque-bounce-guide',
    title: 'Section 138 Cheque Bounce: Complete Guide & Strategy',
    category: 'Cheque Bounce',
    date: 'April 15, 2024',
    excerpt: 'Cheque bounce under Section 138 is a criminal offence. Know your timelines, rights, and the best strategy to avoid court proceedings.',
    content: `Section 138 of the Negotiable Instruments Act, 1881 makes cheque dishonour a criminal offence punishable with fine or imprisonment up to 2 years.

**Legal Notice Timeline:**
- Cheque bounced → Bank issues return memo
- Within 30 days of return memo: Complainant sends legal notice
- You get 15 days to make payment after receiving notice
- If no payment: Court complaint filed

**Best Strategy:**
1. Do not ignore the notice — respond within 15 days
2. Negotiate a settlement — pay the cheque amount + reasonable compensation
3. If settlement reached, get it in writing and ensure court case is withdrawn

Our team handles 138 cases with expertise in negotiation and court representation.`,
  },
  {
    id: 'nclt-ibc-guide',
    title: 'NCLT & IBC: What Happens When Creditors File Insolvency',
    category: 'NCLT',
    date: 'April 8, 2024',
    excerpt: 'If creditors have filed an insolvency petition against your company at NCLT, understand the IBC process, moratorium, and how to submit a resolution plan.',
    content: `When a creditor files an insolvency petition at NCLT and it is admitted, the Insolvency Resolution Process (CIRP) begins under the IBC (Insolvency and Bankruptcy Code, 2016).

**CIRP Timeline:**
- Admission → 180 days (extendable to 330 days)
- Moratorium: All recoveries, lawsuits against company paused
- Resolution Professional (RP) appointed
- Resolution plans invited from interested parties
- Approved plan → Company continues | No plan → Liquidation

**Promoter Options:**
Promoters can submit a resolution plan but need approval from Committee of Creditors (CoC). Under IBC, promoters of NPA companies need to satisfy specific conditions.

NPA Bazar coordinates with IBC professionals and legal experts to navigate NCLT proceedings.`,
  },
]

export const faqs = [
  { q: 'What is an NPA (Non-Performing Asset)?', a: 'An NPA is a loan or advance where EMI is unpaid for 90+ days. Banks classify such accounts as Sub-standard, Doubtful, or Loss Assets based on the overdue period.' },
  { q: 'What is a Section 13(2) notice?', a: 'It is a formal demand notice from the bank under SARFAESI Act giving you 60 days to repay dues. Ignoring it leads to 13(4) action — property possession.' },
  { q: 'Can bank auction my property without court order?', a: 'Yes. Under SARFAESI Act, secured creditors can take possession and auction property without approaching a civil court. However, borrowers can challenge at DRT.' },
  { q: 'How does OTS work?', a: 'In OTS (One Time Settlement), you negotiate with the bank to pay a reduced amount as full and final settlement of the loan. Banks offer OTS to recover faster without expensive litigation.' },
  { q: 'What is the difference between DRT and NCLT?', a: 'DRT (Debt Recovery Tribunal) handles individual and business loan recovery cases above ₹20 lakh. NCLT handles corporate insolvency under the IBC for companies.' },
  { q: 'If my property is already locked by bank, what can I do?', a: 'You can file a Securitisation Application (SA) at DRT under Section 17 of SARFAESI Act to challenge the possession and seek stay of auction.' },
  { q: 'What is a cheque bounce case?', a: 'Under Section 138 NI Act, if your cheque bounces due to insufficient funds, the payee can send a legal notice. If you don\'t pay within 15 days, they can file a criminal complaint.' },
  { q: 'Will NPA affect my CIBIL score?', a: 'Yes, severely. NPA classification causes a significant drop in CIBIL score, making future loan approvals very difficult. OTS settlement also has a negative remark ("Settled").' },
  { q: 'What is a Wilful Defaulter?', a: 'A borrower who is capable of repaying but intentionally avoids payment. Wilful defaulter classification leads to future loan blocks and director restrictions.' },
  { q: 'How long does OTS negotiation take?', a: 'Typically 2–8 weeks depending on the bank, loan amount, and negotiation complexity. Having expert advisors significantly speeds up the process.' },
  { q: 'What is SMA-0, SMA-1, SMA-2?', a: 'SMA (Special Mention Account) is a warning stage before NPA: SMA-0 is 1–30 days overdue, SMA-1 is 31–60 days, SMA-2 is 61–90 days. After 90 days, account becomes NPA.' },
  { q: 'Do you provide service across India?', a: 'Yes. NPA Bazar provides consultation remotely via phone and video call across India. Physical offices are in Mumbai and Delhi for in-person meetings.' },
]
