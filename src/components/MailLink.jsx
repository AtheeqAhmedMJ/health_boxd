import { gmail } from "../data/content";

export default function MailLink({ subject, className, children }) {
  return (
    <a className={className} href={gmail(subject)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}