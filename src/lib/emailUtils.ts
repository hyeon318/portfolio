/**
 * Gmail Compose URL을 생성하는 함수
 */
export function buildGmailComposeUrl(
  email: string,
  subject?: string,
  body?: string
) {
  const base = "https://mail.google.com/mail/?view=cm&fs=1";
  const qs = new URLSearchParams({
    to: email,
    ...(subject ? { su: subject } : {}),
    ...(body ? { body } : {}),
  });
  return `${base}&${qs.toString()}`;
}

/**
 * 이메일 링크를 처리하는 함수
 * mailto 시도 후 실패 시 Gmail로 대체
 */
export function handleEmailClick(
  email: string,
  subject: string = "포트폴리오 문의",
  body: string = "안녕하세요! 포트폴리오를 보고 연락드립니다."
) {
  console.log("이메일 버튼 클릭됨:", email);

  // mailto 시도
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  try {
    window.location.href = mailtoUrl;
    // 1초 후 Gmail로 대체
    setTimeout(() => {
      const gmailUrl = buildGmailComposeUrl(email, subject, body);
      window.open(gmailUrl, "_blank");
    }, 1000);
  } catch (error) {
    // 실패 시 바로 Gmail로
    const gmailUrl = buildGmailComposeUrl(email, subject, body);
    window.open(gmailUrl, "_blank");
  }
}

/**
 * 기본 이메일 설정
 */
export const DEFAULT_EMAIL_CONFIG = {
  subject: "포트폴리오 문의",
  body: "안녕하세요! 포트폴리오를 보고 연락드립니다.",
} as const;
