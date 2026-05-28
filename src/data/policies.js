// Policy contents for NPA Bazar legal pages.
// Structure:
//   { heading, parts: [ { subheading?, text?, list?, outro? } ] }
//
// To update the effective date, edit EFFECTIVE_DATE below.
// To update contact info, edit the CONTACT block — it's referenced
// from inside the policy bodies so the four docs stay in sync.

export const EFFECTIVE_DATE = '29 May 2026'

export const CONTACT = {
  website: 'www.npabazar.com',
  email: 'gnm@vkdlnpaadvisory.com',
  whatsapp: '+91 97161 88884',
  offices: 'Mumbai & Delhi, India',
}

/* ───────────── PAYMENT & REFUND POLICY ───────────── */
export const refundPolicy = {
  slug: 'refund-policy',
  title: 'Payment & Refund Policy',
  tagline: 'How fees, refunds, and cancellations work at NPA Bazar.',
  intro:
    'Welcome to NPA Bazar. By using our website, services, consultation facilities, registration platform, and payment systems, you agree to the terms of this Payment & Refund Policy.',
  sections: [
    {
      heading: '1. Nature of Services',
      parts: [
        {
          text: 'NPA Bazar provides advisory, consultancy, documentation assistance, financial guidance, and coordination support related to:',
          list: [
            'SMA-1 / SMA-2 Resolution Guidance',
            'SARFAESI Act Matters',
            'Section 13(2) & 13(4) Notices',
            'Bank Locked Property Matters',
            'DRT & DRAT Cases',
            'NCLT & NCLAT Matters',
            'One Time Settlement (OTS) Assistance',
            'Legal Notice & Cheque Bounce Case Guidance',
            'Financial Recovery Consultation',
          ],
          outro:
            'We do not guarantee any specific legal, financial, settlement, banking, tribunal, or court outcome.',
        },
      ],
    },
    {
      heading: '2. Payment Terms',
      parts: [
        {
          subheading: '2.1 Consultation Fees',
          text: 'Customers may be required to pay:',
          list: [
            'Registration Fees',
            'Consultation Fees',
            'Documentation Review Charges',
            'Processing Charges',
            'Case Evaluation Charges',
            'Professional Service Charges',
          ],
          outro: 'All fees are displayed before payment confirmation.',
        },
        {
          subheading: '2.2 Payment Methods',
          text: 'We accept payments through:',
          list: ['UPI', 'Debit / Credit Cards', 'Net Banking', 'Wallets', 'Razorpay / Payment Gateway Partners'],
        },
        {
          subheading: '2.3 Invoice & Confirmation',
          text: 'After successful payment:',
          list: [
            'Payment confirmation will be sent via email / SMS / WhatsApp.',
            'Customer dashboard will reflect payment status.',
            'Invoice / receipt may be generated digitally.',
          ],
        },
      ],
    },
    {
      heading: '3. Refund Policy',
      parts: [
        {
          subheading: '3.1 Registration Fees',
          text: 'Registration fees are NON-REFUNDABLE once:',
          list: ['Registration is completed', 'Case ID is generated', 'Basic review process starts'],
          outro: 'No refund request shall be entertained.',
        },
        {
          subheading: '3.2 Consultation Fees',
          text: 'Consultation fees are NON-REFUNDABLE once:',
          list: ['Consultation slot is booked', 'Expert is assigned', 'Consultation has been initiated'],
        },
        {
          subheading: '3.3 Service Charges',
          text: 'Service charges paid for:',
          list: [
            'Documentation review',
            'Case analysis',
            'Resolution strategy',
            'OTS support',
            'Tribunal coordination',
            'Advisory support',
          ],
          outro:
            'are generally NON-REFUNDABLE because professional time and resources are allocated immediately after service activation.',
        },
      ],
    },
    {
      heading: '4. Limited Refund Conditions',
      parts: [
        {
          text: 'Refunds may be considered only under the following conditions:',
          list: [
            'Duplicate payment',
            'Excess payment due to technical error',
            'Payment deducted but service not activated',
            'Wrong amount charged because of a system error',
          ],
        },
      ],
    },
    {
      heading: '5. Non-Refundable Conditions',
      parts: [
        {
          text: 'Refunds shall NOT be applicable if:',
          list: [
            'Customer changes their mind',
            'Customer does not respond',
            'Customer fails to submit documents',
            'Desired legal / banking outcome is not achieved',
            'Bank rejects OTS proposal',
            'Tribunal / court order is unfavourable',
            'Delay is caused by the customer',
            'Service has already been initiated',
            'Consultation has already been delivered',
          ],
        },
      ],
    },
    {
      heading: '6. No Guarantee Clause',
      parts: [
        {
          text: 'NPA Bazar provides:',
          list: ['Advisory support', 'Coordination assistance', 'Financial guidance', 'Documentation support'],
        },
        {
          text: 'We do NOT guarantee:',
          list: [
            'Loan settlement approval',
            'OTS approval',
            'Stay orders',
            'Case victory',
            'Property release',
            'Bank decision',
            'Tribunal outcome',
          ],
        },
        {
          text: 'All outcomes depend on:',
          list: ['Facts of the case', 'Bank policies', 'Applicable laws', 'Judicial / tribunal decisions'],
        },
      ],
    },
    {
      heading: '7. Payment Gateway Liability',
      parts: [
        {
          text: 'NPA Bazar shall not be responsible for:',
          list: [
            'Payment gateway downtime',
            'Bank server issues',
            'Transaction delays',
            'Failed payments due to customer bank issues',
          ],
          outro: 'However, verified failed transactions may be reviewed for reconciliation.',
        },
      ],
    },
    {
      heading: '8. Refund Process',
      parts: [
        {
          text: 'If a refund is approved, it may take 7–15 working days depending upon:',
          list: ['Bank', 'Payment gateway', 'Financial institution'],
        },
      ],
    },
    {
      heading: '9. Cancellation Policy',
      parts: [
        {
          subheading: 'Customer Cancellation',
          text: 'Customers may request cancellation before service activation. However:',
          list: ['Processing charges may apply', 'Registration charges remain non-refundable'],
        },
        {
          subheading: 'Company Cancellation',
          text: 'NPA Bazar reserves the right to reject applications, refuse service, or cancel registration in cases involving:',
          list: ['Fraud', 'Misrepresentation', 'Abusive conduct', 'Illegal activity', 'Fake documents'],
          outro: 'Refund in such cases shall be solely at company discretion.',
        },
      ],
    },
    {
      heading: '10. Dispute Resolution',
      parts: [
        {
          text: 'Any payment-related dispute shall first be attempted to be resolved through:',
          list: ['Email communication', 'Support team review', 'Internal escalation'],
        },
      ],
    },
    {
      heading: '11. Contact Details',
      parts: [{ text: 'Reach our customer support team via the channels listed at the bottom of this page.' }],
    },
    {
      heading: '12. Policy Acceptance',
      parts: [
        {
          text: 'By making a payment on the NPA Bazar platform, the customer confirms that:',
          list: [
            'They have read this policy',
            'They understand the refund conditions',
            'They agree to the payment terms',
            'They accept the advisory nature of services',
          ],
        },
      ],
    },
    {
      heading: '13. Modification Rights',
      parts: [
        {
          text: 'NPA Bazar reserves the right to update, modify, or change this policy at any time without prior notice. The updated policy becomes effective immediately upon publication on the website.',
        },
      ],
    },
  ],
}

/* ───────────── PRIVACY POLICY ───────────── */
export const privacyPolicy = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  tagline: 'How we collect, use, store, and protect your personal information.',
  intro:
    'We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you use our website, services, registration forms, consultation systems, payment gateways, and communication channels.',
  sections: [
    {
      heading: '1. About NPA Bazar',
      parts: [
        {
          text: 'NPA Bazar provides advisory and consultancy support related to:',
          list: [
            'SMA-1 / SMA-2 Matters',
            'SARFAESI Act Notices',
            'DRT & DRAT Cases',
            'NCLT & NCLAT Matters',
            'One Time Settlement (OTS)',
            'Legal Notices',
            'Cheque Bounce Cases',
            'Banking & Financial Resolution Guidance',
          ],
        },
      ],
    },
    {
      heading: '2. Information We Collect',
      parts: [
        {
          subheading: '2.1 Personal Information',
          text: 'We may collect:',
          list: [
            'Full Name',
            'Mobile Number',
            'Email Address',
            'Address',
            'City / State',
            'PAN Number',
            'Aadhaar Number (where legally permitted)',
            'Business Details',
            'Loan Information',
            'Bank Details',
            'Case-related Documents',
          ],
        },
        {
          subheading: '2.2 Financial & Case Information',
          text: 'Depending on service requirements, we may collect:',
          list: [
            'Loan Account Details',
            'EMI Status',
            'Bank Notices',
            'SARFAESI Notices',
            'DRT / NCLT Documents',
            'Property Documents',
            'Legal Notices',
            'Settlement Proposals',
          ],
        },
        {
          subheading: '2.3 Technical Information',
          text: 'When you visit our website, we may automatically collect:',
          list: [
            'IP Address',
            'Browser Type',
            'Device Information',
            'Operating System',
            'Website Usage Data',
            'Cookies & Analytics Data',
          ],
        },
      ],
    },
    {
      heading: '3. How We Use Your Information',
      parts: [
        {
          text: 'We use your information for:',
          list: [
            'Registration & account creation',
            'Case evaluation',
            'Consultation services',
            'Customer support',
            'Payment processing',
            'Communication updates',
            'Legal & compliance purposes',
            'Internal analytics',
            'Service improvement',
          ],
        },
      ],
    },
    {
      heading: '4. Documents & Sensitive Data',
      parts: [
        {
          text: 'Some services may require sensitive documents such as:',
          list: ['Loan statements', 'Legal notices', 'Property papers', 'Identity proofs'],
          outro: 'Such documents are collected only for service-related purposes and handled with reasonable confidentiality measures.',
        },
      ],
    },
    {
      heading: '5. Payment Information',
      parts: [
        {
          text: 'Payments are processed through third-party payment gateways. We do not store:',
          list: ['Debit / Credit Card details', 'CVV numbers', 'Banking passwords', 'UPI PINs'],
          outro: 'Payment processing is subject to the policies of the respective payment gateway providers.',
        },
      ],
    },
    {
      heading: '6. Cookies Policy',
      parts: [
        {
          text: 'Our website may use cookies to:',
          list: ['Improve user experience', 'Analyse website traffic', 'Remember user preferences', 'Enhance security'],
          outro: 'Users may disable cookies through browser settings, though some features may not function properly.',
        },
      ],
    },
    {
      heading: '7. Information Sharing',
      parts: [
        { text: 'We do not sell customer personal information. However, information may be shared with:' },
        {
          list: [
            'Professional consultants / advisors',
            'Payment gateway providers',
            'Technical service providers',
            'Legal authorities where required by law',
            'Compliance / regulatory authorities',
          ],
          outro: 'Only necessary information is shared for legitimate business or legal purposes.',
        },
      ],
    },
    {
      heading: '8. Data Security',
      parts: [
        {
          text: 'We implement reasonable technical and organisational measures to protect data from:',
          list: ['Unauthorised access', 'Misuse', 'Loss', 'Alteration', 'Disclosure'],
          outro: 'However, no digital system can guarantee complete security.',
        },
      ],
    },
    {
      heading: '9. Customer Responsibilities',
      parts: [
        {
          text: 'Customers are responsible for:',
          list: [
            'Providing accurate information',
            'Maintaining login confidentiality',
            'Protecting OTPs / passwords',
            'Uploading lawful documents only',
          ],
        },
      ],
    },
    {
      heading: '10. Third-Party Links',
      parts: [
        {
          text: 'Our website may contain links to third-party websites. We are not responsible for:',
          list: ['Third-party content', 'Privacy practices', 'External website policies'],
          outro: 'Users should review third-party privacy policies separately.',
        },
      ],
    },
    {
      heading: '11. Data Retention',
      parts: [
        {
          text: 'We may retain customer information for:',
          list: [
            'Service completion',
            'Legal compliance',
            'Record maintenance',
            'Dispute resolution',
            'Regulatory requirements',
          ],
          outro: 'Retention duration may vary depending on legal or operational requirements.',
        },
      ],
    },
    {
      heading: '12. Customer Rights',
      parts: [
        {
          text: 'Subject to applicable laws, customers may request:',
          list: [
            'Access to their information',
            'Correction of inaccurate information',
            'Account deactivation',
            'Data deletion (where legally permissible)',
          ],
          outro: 'Requests may be subject to verification and legal obligations.',
        },
      ],
    },
    {
      heading: '13. Confidentiality Disclaimer',
      parts: [
        {
          text: 'NPA Bazar provides advisory and consultancy support only. Submission of information or documents through the website does not automatically create:',
          list: ['Advocate-client relationship', 'Legal privilege', 'Financial guarantee'],
          outro: 'unless separately agreed in writing.',
        },
      ],
    },
    {
      heading: '14. Children’s Privacy',
      parts: [
        {
          text: 'Our services are intended for adults only. We do not knowingly collect information from minors under the applicable legal age.',
        },
      ],
    },
    {
      heading: '15. Legal Compliance',
      parts: [
        {
          text: 'We may disclose information if required:',
          list: ['By law', 'Court order', 'Regulatory authority', 'Government agency'],
        },
      ],
    },
    {
      heading: '16. Limitation of Liability',
      parts: [
        {
          text: 'While we strive to protect user data, NPA Bazar shall not be liable for:',
          list: [
            'Cyber attacks',
            'Unauthorised hacking',
            'Technical failures',
            'Force majeure events',
            'Third-party security breaches',
          ],
          outro: 'beyond reasonable control.',
        },
      ],
    },
    {
      heading: '17. Policy Updates',
      parts: [
        {
          text: 'We reserve the right to modify, update, or revise this Privacy Policy at any time. Updated versions become effective immediately upon publication on the website.',
        },
      ],
    },
    {
      heading: '18. Contact Details',
      parts: [{ text: 'See the contact section at the bottom of this page for support channels.' }],
    },
    {
      heading: '19. Consent',
      parts: [
        {
          text: 'By using our website, registering an account, submitting forms, uploading documents, or making payments, you consent to:',
          list: ['Collection of your information', 'Processing of your data', 'Use of your information as described in this Privacy Policy'],
        },
      ],
    },
    {
      heading: '20. Governing Law',
      parts: [
        {
          text: 'This Privacy Policy shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of competent courts as determined by applicable law.',
        },
      ],
    },
  ],
}

/* ───────────── DISCLAIMER ───────────── */
export const disclaimer = {
  slug: 'disclaimer',
  title: 'Disclaimer',
  tagline: 'The advisory nature of our services and the limits of our role.',
  intro:
    'By accessing or using this website, registration system, consultation platform, communication channels, or any services provided by NPA Bazar, you acknowledge and agree to the terms of this Disclaimer.',
  sections: [
    {
      heading: '1. General Information Purpose',
      parts: [
        {
          text: 'The content, materials, articles, blogs, notices, explanations, consultation information, and services available on this website are provided for:',
          list: [
            'General informational purposes',
            'Advisory support',
            'Educational understanding',
            'Financial and legal awareness',
          ],
          outro: 'only.',
        },
        {
          text: 'Nothing on this website should be interpreted as:',
          list: [
            'Guaranteed legal advice',
            'Guaranteed financial resolution',
            'Guaranteed court outcome',
            'Guaranteed bank settlement',
            'Guaranteed OTS approval',
          ],
        },
      ],
    },
    {
      heading: '2. No Legal Representation Guarantee',
      parts: [
        {
          text: 'NPA Bazar is an advisory and consultancy support platform. Use of this website or communication with our representatives does NOT automatically create:',
          list: [
            'Advocate-client relationship',
            'Attorney-client privilege',
            'Fiduciary relationship',
            'Legal representation agreement',
          ],
          outro: 'unless specifically agreed through separate written engagement documentation.',
        },
      ],
    },
    {
      heading: '3. No Guarantee of Results',
      parts: [
        {
          text: 'Every banking, financial, legal, SARFAESI, DRT, NCLT, OTS, or cheque bounce matter depends upon:',
          list: [
            'Facts of the case',
            'Applicable laws',
            'Bank policies',
            'Regulatory guidelines',
            'Tribunal / court decisions',
            'Documentation quality',
            'Customer cooperation',
          ],
        },
        {
          text: 'Therefore, NPA Bazar does NOT guarantee:',
          list: [
            'Loan settlement approval',
            'OTS sanction',
            'Stay orders',
            'Property release',
            'Auction cancellation',
            'Tribunal success',
            'Legal victory',
            'Credit score improvement',
            'Recovery stoppage',
          ],
        },
      ],
    },
    {
      heading: '4. Professional Consultation Disclaimer',
      parts: [
        {
          text: 'Any consultation, suggestion, strategy, guidance, or opinion shared through:',
          list: ['Website', 'WhatsApp', 'Phone calls', 'Emails', 'Video meetings', 'Documents', 'Reports'],
          outro: 'is based on information provided by the customer and may change depending upon updated facts, additional documents, legal developments, or banking decisions. Customers are advised to seek independent legal or financial advice wherever necessary.',
        },
      ],
    },
    {
      heading: '5. Document Responsibility',
      parts: [
        {
          text: 'Customers are solely responsible for:',
          list: [
            'Accuracy of documents',
            'Authenticity of information',
            'Legality of uploaded records',
            'Truthfulness of statements',
          ],
        },
        {
          text: 'NPA Bazar shall not be liable for consequences arising from:',
          list: ['Fake documents', 'Incomplete information', 'Misrepresentation', 'Concealment of facts'],
        },
      ],
    },
    {
      heading: '6. Third-Party Services',
      parts: [
        {
          text: 'Our website may involve or integrate:',
          list: [
            'Payment gateways',
            'Communication platforms',
            'External professionals',
            'Technical providers',
            'Third-party links',
          ],
        },
        {
          text: 'NPA Bazar shall not be responsible for:',
          list: [
            'Third-party failures',
            'External website content',
            'Payment gateway downtime',
            'Third-party delays',
            'Independent professional advice',
          ],
        },
      ],
    },
    {
      heading: '7. Limitation of Liability',
      parts: [
        {
          text: 'To the maximum extent permitted under applicable law, NPA Bazar shall not be liable for:',
          list: [
            'Financial loss',
            'Business loss',
            'Loan rejection',
            'Property auction',
            'Tribunal decisions',
            'Banking actions',
            'Credit score impact',
            'Indirect damages',
            'Consequential damages',
            'Data loss',
            'Delays beyond reasonable control',
          ],
          outro: 'arising from use of this website or services.',
        },
      ],
    },
    {
      heading: '8. No Banking or NBFC Status',
      parts: [
        {
          text: 'NPA Bazar is NOT:',
          list: ['A bank', 'An NBFC', 'A financial institution', 'A government authority', 'A court', 'A tribunal'],
          outro:
            'unless separately disclosed. We do not directly issue loans or financial products unless specifically stated under applicable legal permissions.',
        },
      ],
    },
    {
      heading: '9. SARFAESI / DRT / NCLT Matters',
      parts: [
        {
          text: 'Information related to:',
          list: [
            'SARFAESI Act',
            'DRT / DRAT',
            'NCLT / NCLAT',
            'OTS',
            'Recovery laws',
            'Banking procedures',
          ],
          outro:
            'is general in nature and may vary based on jurisdiction, case facts, bank practices, and regulatory changes. Users should consult qualified professionals before acting upon such information.',
        },
      ],
    },
    {
      heading: '10. Cheque Bounce & Legal Notice Disclaimer',
      parts: [
        {
          text: 'Content relating to:',
          list: ['Section 138 of the Negotiable Instruments Act', 'Legal notices', 'Recovery actions'],
          outro: 'is informational only and should not be treated as a substitute for formal legal representation.',
        },
      ],
    },
    {
      heading: '11. Website Content Disclaimer',
      parts: [
        {
          text: 'While we attempt to keep website information updated and accurate, we make no warranties regarding:',
          list: ['Accuracy', 'Completeness', 'Reliability', 'Timeliness', 'Suitability'],
          outro: 'of any information or content published on the website.',
        },
      ],
    },
    {
      heading: '12. No Warranty',
      parts: [
        {
          text: 'All services and content are provided on an "AS IS" and "AS AVAILABLE" basis. NPA Bazar disclaims all warranties including:',
          list: ['Express warranties', 'Implied warranties', 'Merchantability', 'Fitness for particular purpose'],
          outro: 'to the extent permitted by law.',
        },
      ],
    },
    {
      heading: '13. User Responsibility',
      parts: [
        {
          text: 'Users are responsible for:',
          list: [
            'Independent decision-making',
            'Verifying information',
            'Seeking proper legal advice',
            'Maintaining confidentiality of login credentials',
          ],
          outro: 'Any action taken based on website information is strictly at the user’s own risk.',
        },
      ],
    },
    {
      heading: '14. Confidentiality Disclaimer',
      parts: [
        {
          text: 'Although reasonable care may be taken for handling customer information, electronic communication over:',
          list: ['Internet', 'Email', 'WhatsApp', 'Digital platforms'],
          outro: 'cannot be guaranteed as completely secure.',
        },
      ],
    },
    {
      heading: '15. Policy Changes',
      parts: [
        {
          text: 'NPA Bazar reserves the right to modify, update, or revise this Disclaimer at any time without prior notice. Updated versions become effective immediately upon publication on the website.',
        },
      ],
    },
    {
      heading: '16. Governing Law',
      parts: [
        {
          text: 'This Disclaimer shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from website usage or services shall be subject to the jurisdiction of competent courts as determined under applicable law.',
        },
      ],
    },
    {
      heading: '17. Contact Details',
      parts: [{ text: 'See the contact section at the bottom of this page for support channels.' }],
    },
    {
      heading: '18. Acceptance of Disclaimer',
      parts: [
        {
          text: 'By accessing this website, registering an account, uploading documents, making payments, or using any services of NPA Bazar, you acknowledge that:',
          list: ['You have read this Disclaimer', 'You understand its contents', 'You agree to be legally bound by its terms'],
        },
      ],
    },
  ],
}

/* ───────────── TERMS & CONDITIONS ───────────── */
export const termsConditions = {
  slug: 'terms-conditions',
  title: 'Terms & Conditions',
  tagline: 'The rules that govern your use of the NPA Bazar website and services.',
  intro:
    'These Terms & Conditions govern your access to and use of the NPA Bazar website, registration platform, consultation services, payment systems, customer dashboard, communication channels, and all services we provide. By accessing or using our website and services, you agree to comply with and be legally bound by these Terms & Conditions. If you do not agree, please discontinue use of the website and services immediately.',
  sections: [
    {
      heading: '1. Nature of Services',
      parts: [
        {
          text: 'NPA Bazar provides advisory, consultancy, documentation assistance, coordination support, and informational guidance related to:',
          list: [
            'SMA-1 / SMA-2 Matters',
            'SARFAESI Act Matters',
            'Section 13(2) & 13(4) Notices',
            'Bank Recovery Matters',
            'Bank Locked Property Cases',
            'DRT & DRAT Cases',
            'NCLT & NCLAT Matters',
            'One Time Settlement (OTS)',
            'Legal Notice Matters',
            'Cheque Bounce Cases',
            'Financial & Banking Resolution Guidance',
          ],
          outro: 'We do not guarantee any specific legal, financial, tribunal, banking, or settlement outcome.',
        },
      ],
    },
    {
      heading: '2. Eligibility',
      parts: [
        {
          text: 'By using our services, you confirm that:',
          list: [
            'You are legally competent to enter into agreements',
            'Information provided by you is accurate',
            'You are authorised to share submitted documents',
            'You shall use services only for lawful purposes',
          ],
        },
      ],
    },
    {
      heading: '3. User Registration',
      parts: [
        {
          text: 'Users may be required to:',
          list: ['Register online', 'Create login credentials', 'Submit KYC information', 'Upload documents'],
        },
        {
          text: 'You are responsible for:',
          list: [
            'Maintaining confidentiality of login credentials',
            'All activities under your account',
            'Immediately informing us of unauthorised access',
          ],
        },
      ],
    },
    {
      heading: '4. Information & Documents',
      parts: [
        {
          text: 'Users agree that:',
          list: [
            'All information submitted is true and accurate',
            'Uploaded documents are genuine',
            'No forged, fake, misleading, or illegal documents shall be uploaded',
          ],
        },
        {
          text: 'NPA Bazar reserves the right to:',
          list: ['Reject applications', 'Suspend accounts', 'Report suspicious activity'],
          outro: 'if false or fraudulent information is detected.',
        },
      ],
    },
    {
      heading: '5. Consultation & Advisory Services',
      parts: [
        {
          text: 'Any consultation provided through:',
          list: ['Phone calls', 'WhatsApp', 'Email', 'Video meetings', 'Website communication', 'Documents / reports'],
          outro: 'shall be considered advisory in nature only.',
        },
        {
          text: 'Final decisions remain subject to:',
          list: ['Bank policies', 'Legal procedures', 'Tribunal / court orders', 'Regulatory authorities'],
        },
      ],
    },
    {
      heading: '6. No Guarantee of Results',
      parts: [
        {
          text: 'NPA Bazar does NOT guarantee:',
          list: [
            'Loan approval',
            'OTS approval',
            'Case success',
            'Stay orders',
            'Property release',
            'Auction cancellation',
            'Credit score improvement',
            'Tribunal / court outcomes',
            'Banking decisions',
          ],
          outro: 'Every case depends upon facts, documents, laws, and applicable procedures.',
        },
      ],
    },
    {
      heading: '7. Payments',
      parts: [
        {
          text: 'Users may be charged for:',
          list: [
            'Registration',
            'Consultation',
            'Documentation review',
            'Processing',
            'Advisory support',
            'Professional services',
          ],
          outro: 'All payments are subject to our Payment & Refund Policy.',
        },
      ],
    },
    {
      heading: '8. Refund Policy',
      parts: [
        {
          text: 'Refunds shall be governed by the official Payment & Refund Policy. Users are advised to read the Refund Policy carefully before making any payment.',
        },
      ],
    },
    {
      heading: '9. Third-Party Services',
      parts: [
        {
          text: 'Our website may use:',
          list: ['Payment gateways', 'Technical vendors', 'External communication tools', 'Independent professionals'],
        },
        {
          text: 'NPA Bazar shall not be liable for:',
          list: ['Third-party failures', 'Banking server issues', 'Payment gateway downtime', 'Technical interruptions'],
        },
      ],
    },
    {
      heading: '10. Intellectual Property',
      parts: [
        {
          text: 'All website content including:',
          list: ['Text', 'Logos', 'Graphics', 'Articles', 'Designs', 'Layouts', 'Branding'],
          outro: 'belongs to NPA Bazar unless otherwise stated. Unauthorised copying, reproduction, or distribution is prohibited.',
        },
      ],
    },
    {
      heading: '11. Website Usage Restrictions',
      parts: [
        {
          text: 'Users shall NOT:',
          list: [
            'Upload illegal content',
            'Attempt hacking or unauthorised access',
            'Misuse website systems',
            'Upload malware',
            'Use abusive language',
            'Impersonate others',
          ],
        },
        {
          text: 'Violation may result in:',
          list: ['Account suspension', 'Legal action', 'Reporting to authorities'],
        },
      ],
    },
    {
      heading: '12. Confidentiality',
      parts: [
        {
          text: 'While reasonable efforts are made to maintain confidentiality, electronic communication cannot be guaranteed as completely secure. Users acknowledge risks associated with:',
          list: ['Internet communication', 'Email transmission', 'Digital uploads'],
        },
      ],
    },
    {
      heading: '13. Data & Privacy',
      parts: [
        {
          text: 'Collection and usage of personal information shall be governed by our Privacy Policy. By using our services, users consent to such collection and processing.',
        },
      ],
    },
    {
      heading: '14. Limitation of Liability',
      parts: [
        {
          text: 'To the maximum extent permitted by law, NPA Bazar shall not be liable for:',
          list: [
            'Financial loss',
            'Loan rejection',
            'Property auction',
            'Recovery proceedings',
            'Banking actions',
            'Tribunal / court decisions',
            'Business interruption',
            'Data loss',
            'Indirect damages',
            'Consequential damages',
          ],
          outro: 'arising from use of the website or services.',
        },
      ],
    },
    {
      heading: '15. Professional Relationship Disclaimer',
      parts: [
        {
          text: 'Use of the website or communication with our representatives does NOT automatically create:',
          list: ['Advocate-client relationship', 'Legal representation agreement', 'Financial fiduciary relationship'],
          outro: 'unless separately agreed in writing.',
        },
      ],
    },
    {
      heading: '16. Account Suspension & Termination',
      parts: [
        {
          text: 'NPA Bazar reserves the right to suspend accounts, reject applications, restrict access, or terminate services without prior notice in cases involving:',
          list: ['Fraud', 'Misrepresentation', 'Abuse', 'Illegal activity', 'Policy violations'],
        },
      ],
    },
    {
      heading: '17. Force Majeure',
      parts: [
        {
          text: 'NPA Bazar shall not be liable for delays or failures caused by:',
          list: [
            'Natural disasters',
            'Cyber attacks',
            'Government actions',
            'Internet failures',
            'Power outages',
            'Pandemic situations',
            'Technical breakdowns',
          ],
          outro: 'beyond reasonable control.',
        },
      ],
    },
    {
      heading: '18. Modification of Terms',
      parts: [
        {
          text: 'We reserve the right to modify, update, or revise these Terms & Conditions at any time. Updated terms become effective immediately upon publication on the website.',
        },
      ],
    },
    {
      heading: '19. Governing Law & Jurisdiction',
      parts: [
        {
          text: 'These Terms & Conditions shall be governed by the laws of India. Any disputes arising from use of the website or services shall be subject to the jurisdiction of competent courts as applicable under law.',
        },
      ],
    },
    {
      heading: '20. Indemnity',
      parts: [
        {
          text: 'Users agree to indemnify and hold harmless NPA Bazar, its management, employees, consultants, and affiliates from:',
          list: ['Claims', 'Damages', 'Liabilities', 'Legal expenses', 'Losses'],
        },
        {
          text: 'arising due to:',
          list: ['False information', 'Misuse of services', 'Violation of laws', 'Breach of these Terms'],
        },
      ],
    },
    {
      heading: '21. Communication Consent',
      parts: [
        {
          text: 'By registering or submitting information, users consent to receive:',
          list: ['Calls', 'SMS', 'WhatsApp messages', 'Emails', 'Notifications'],
          outro: 'related to services, updates, consultations, and support.',
        },
      ],
    },
    {
      heading: '22. Contact Details',
      parts: [{ text: 'See the contact section at the bottom of this page for support channels.' }],
    },
    {
      heading: '23. Acceptance of Terms',
      parts: [
        {
          text: 'By accessing the website, registering, uploading documents, making payments, or using any services of NPA Bazar, you confirm that:',
          list: ['You have read these Terms & Conditions', 'You understand them', 'You agree to be legally bound by them'],
        },
      ],
    },
  ],
}
