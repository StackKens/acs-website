import LegalPage, { type LegalSection } from "@/components/acs/LegalPage";

/* Text below is the current ACS privacy copy, unchanged. Edit wording here, not in the layout. */
const SECTIONS: LegalSection[] = [
  {
    id: "information-collected",
    title: "Information held in the platform",
    paras: [
      "ACS holds the information a school records against its own workspace. Depending on what the school uses, that includes pupil details such as admission numbers, names, date of birth, class and stream allocation, emergency contacts and linked guardian contacts; attendance recorded for each pupil in each session; assessment marks, results, positions and remarks; fee structures, payments, balances and receipts; staff records, teaching allocations and contact details; and the announcements, notices and support tickets a school creates.",
      "Parent and guardian information is entered by the school, including the phone number a parent uses to sign in to the parent portal.",
    ],
  },
  {
    id: "why",
    title: "Why the information is held",
    paras: [
      "The information is held so that the school can run its own operations: to record attendance, to compile results, to collect and account for fees, to produce reports, and to communicate with parents. It is held to provide the service the school signed up for, and for no other purpose.",
    ],
  },
  {
    id: "access",
    title: "Who can see it",
    paras: [
      "Each school operates in its own isolated workspace. A school’s data is not visible to any other school.",
      "Within a school, access depends on role. Administrators and head teachers have the widest access. Teachers see the pupils, classes and subjects assigned to them. Finance officers own fee collection and can see the directories in read-only form. Parents and guardians see the children linked to them, their attendance, their released results, their fee balance and the announcements addressed to them.",
      "Results and report cards are not visible to parents until the school releases them. The ACS platform team operates schools, billing and support from a separate area of the service that school accounts do not have access to.",
    ],
  },
  {
    id: "audit",
    title: "Changes and accountability",
    paras: [
      "Sensitive actions are recorded in an audit trail and activity feed. Administrators can review who changed what, and when. Released results and published report cards cannot be edited after release; corrections are made through new records. Issued receipts and invoices are permanent records, and a correction is made with an audited reversal rather than by editing history.",
      "Deleting a wrong attendance day is an audited action. Deactivating a staff account is an audited action.",
    ],
  },
  {
    id: "security",
    title: "How it is protected",
    paras: [
      "Access to the platform is by account, and accounts are created by the school. Sensitive actions are permissioned by role rather than granted universally. School data is kept in a cloud environment with automated backups, so that a school’s records are not dependent on a single device or a paper file.",
      "The platform is designed to work on ordinary connections, including low-bandwidth environments.",
    ],
  },
  {
    id: "retention",
    title: "How long information is kept",
    paras: [
      "The school’s data is preserved. When a trial expires, the school is marked Suspended, its subscription becomes Expired, and school users are blocked from accessing the app; existing records remain intact. For other expired, suspended or cancelled subscriptions, feature access is denied while the data stays in the database, and access is restored if the subscription is reactivated.",
    ],
  },
  {
    id: "rights",
    title: "Your rights and how to ask",
    paras: [
      "If you are a parent or guardian and want to know what the school holds about your child, or you want something corrected or removed, the fastest route is to ask the school, because the school is the party that records the information and decides what it keeps.",
      "If you want to raise a question with the ACS team itself, contact us and we will point you to the right person. Contact details are on the contact page.",
    ],
  },
  {
    id: "website",
    title: "What this website collects",
    paras: [
      "The contact form on this site asks for a name, school name, email address, an optional phone number, an enquiry topic and a message. That information is sent to the ACS team so the enquiry can be answered. It is not used for anything else.",
      "The pricing, features, guide and about pages set no cookies and run no analytics or advertising trackers. The site does not embed third-party advertising or social media content.",
    ],
  },
  {
    id: "contact",
    title: "Contacting us about privacy",
    paras: [
      "Questions about privacy can be sent through the contact page, or by email to stackkens@gmail.com, or by phone to +256 755 038 100. If your school has signed in, a support ticket raised from the Support section is also a direct route to the team.",
    ],
  },
];

export default function AcsPrivacy() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="How ACS handles information."
      intro="This page describes how the information a school records in ACS is held, who can see it, and what happens to an enquiry sent through this website."
      tocTitle="Privacy policy draft"
      sections={SECTIONS}
    />
  );
}