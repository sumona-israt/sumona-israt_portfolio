export interface MailtoParams {
  to: string;
  subject: string;
  body: string;
}

export function buildMailtoUrl({ to, subject, body }: MailtoParams): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
