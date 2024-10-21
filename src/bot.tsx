import TelegramBot from "node-telegram-bot-api";

const token =  process.env.TELEGRAM_BOT_TOKEN as string || '8121865773:AAGM_tZZSQiGiff5C3ueFYvneb9iW9rwozI';
export const bot = new TelegramBot(token, { polling: true });  
