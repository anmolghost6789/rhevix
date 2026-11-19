import type { Block } from "./insights";
/**
 * Legal pages. These are starting templates written in plain language.
 * Have them reviewed by your legal adviser before launch.
 */
export const legalPages: { slug: string; title: string; updated: string; body: Block[] }[] = [
  { slug: "terms", title: "Terms of use", updated: "2026-10-01", body: [
    { p: "These terms govern your use of this website. By using the site you agree to them." },
    { h: "Use of the site" },
    { p: "You may use this site for lawful purposes only. You must not attempt to gain unauthorised access to the site or interfere with its operation." },
    { h: "Content" },
    { p: "Content on this site is provided for general information. It is not professional advice, and you should not rely on it without taking advice specific to your situation." },
    { h: "Intellectual property" },
    { p: "Unless stated otherwise, the content, design and trademarks on this site belong to Rhevix. You may not reproduce them without permission." },
    { h: "Liability" },
    { p: "To the extent permitted by law, Rhevix is not liable for any loss arising from your use of this site." },
    { h: "Changes" },
    { p: "We may update these terms from time to time. The date at the top of this page shows when they last changed." },
  ]},
  { slug: "privacy", title: "Privacy statement", updated: "2026-10-01", body: [
    { p: "This statement explains how Rhevix collects and uses personal information through this website." },
    { h: "What we collect" },
    { ul: ["Information you submit through our forms, such as your name, work email, company and message", "Basic technical information needed to deliver the site, such as your browser type"] },
    { h: "How we use it" },
    { p: "We use the information you submit only to respond to your enquiry or application. We do not sell personal information." },
    { h: "How long we keep it" },
    { p: "We keep enquiry information for as long as needed to respond and for reasonable record-keeping afterwards, then delete it." },
    { h: "Your rights" },
    { p: "Depending on where you live, you may have rights to access, correct or delete your information. Contact us to exercise them." },
    { h: "Contact" },
    { p: "For privacy questions, contact us through the contact page." },
  ]},
  { slug: "cookies", title: "Cookie statement", updated: "2026-10-01", body: [
    { p: "This website does not use advertising or tracking cookies." },
    { h: "Essential storage" },
    { p: "The site may use essential browser storage that is necessary for it to function. This does not track you across other websites." },
    { h: "Analytics" },
    { p: "If we add analytics in future, we will update this statement and ask for consent where required." },
  ]},
  { slug: "accessibility", title: "Accessibility statement", updated: "2026-10-01", body: [
    { p: "We want everyone to be able to use this website. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA." },
    { h: "What we have done" },
    { ul: ["Keyboard access to all navigation and controls", "Visible focus indicators", "Text alternatives and labels for interactive elements", "Respect for reduced-motion settings", "Sufficient colour contrast for text"] },
    { h: "Feedback" },
    { p: "If you find something difficult to use, please tell us through the contact page and we will work to fix it." },
  ]},
];
export const getLegal = (slug: string) => legalPages.find((l) => l.slug === slug);
