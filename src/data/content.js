export const MAIL = "healthboxd@gmail.com";

export const PATENT_PENDING = true;

export const mailto = (subject) => `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`;

export const journey = [
  { title: "Mechanical Engineering", note: "UVCE · Stepped away, wanting more" },
  { title: "Manipal Hospitals", note: "Formerly Columbia Asia" },
  { title: "Motherhood", note: "Healthcare career" },
  { title: "WeCare Hospitals", note: "Marketing & Pharmacy In-charge" },
  { title: "Meher Pharma & Medicals", note: "Proprietor" },
];
export const gmail = (subject) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${MAIL}&su=${encodeURIComponent(subject)}`;

export const steps = [
  { title: "Clinics publish", note: "Clinics and hospitals list open consultation sessions." },
  { title: "Doctors book", note: "Verified doctors find and book sessions that suit them." },
  { title: "Consult and earn", note: "Doctors consult at the clinic and are paid for the session." },
  { title: "Move on", note: "Doctors continue to their next booked session." },
];

export const benefits = [
  { kicker: "Doctors", title: "Flexibility", note: "Find sessions across facilities and shape your own schedule." },
  { kicker: "Clinics", title: "Coverage", note: "Fill open sessions with qualified, verified doctors." },
  { kicker: "Patients", title: "Access", note: "Better reach to available consultations and specialists." },
];

export const roles = ["Marketing Intern", "Tester"];
export const status = ["Engineering team", "Legal team", "Marketing team", "Funding stage", "Targeting Y Combinator"];
