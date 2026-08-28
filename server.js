import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 4173);
const recipients = ['hmlife0831@gmail.com', 'jk486730@hanmail.net'];

app.use(express.json({ limit: '20kb' }));

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const createTransporter = () => {
  const { MAIL_USER, MAIL_APP_PASSWORD } = process.env;

  if (!MAIL_USER || !MAIL_APP_PASSWORD) {
    throw new Error('MAIL_USER 또는 MAIL_APP_PASSWORD 환경변수가 설정되지 않았습니다.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MAIL_USER,
      pass: MAIL_APP_PASSWORD,
    },
  });
};

app.post('/api/send-lead-email', async (req, res) => {
  const companyName = req.body?.companyName?.trim();
  const phoneNumber = req.body?.phoneNumber?.trim();

  if (!companyName || !phoneNumber) {
    return res.status(400).json({ message: '업체명과 연락처를 입력해 주세요.' });
  }

  try {
    const transporter = createTransporter();
    const sentAt = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    await transporter.sendMail({
      from: `"아이당뇨 도입 문의" <${process.env.MAIL_USER}>`,
      to: recipients,
      subject: '[아이당뇨] 도입 문의가 접수되었습니다',
      html: `
        <h2>아이당뇨 도입 문의</h2>
        <p><strong>업체명:</strong> ${escapeHtml(companyName)}</p>
        <p><strong>연락처:</strong> ${escapeHtml(phoneNumber)}</p>
        <p><strong>접수 시간:</strong> ${escapeHtml(sentAt)}</p>
      `,
      text: [
        '아이당뇨 도입 문의',
        `업체명: ${companyName}`,
        `연락처: ${phoneNumber}`,
        `접수 시간: ${sentAt}`,
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('메일 발송 실패:', error);
    return res.status(500).json({ message: '메일 발송에 실패했습니다. 서버 설정을 확인해 주세요.' });
  }
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});
