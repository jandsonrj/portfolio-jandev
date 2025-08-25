import { GoogleGenerativeAI } from '@google/generative-ai';

const MODEL = 'gemini-2.5-flash';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const { question, language, knowledgeBase } = req.body || {};
    if (!question) {
      res.status(400).json({ error: 'question is required' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'API key missing' });
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL });

    const langInstruction = language === 'pt' ? 'Responda em Português.' : 'Answer in English.';
    const systemInstruction =
      `Você é um assistente do portfólio de Jandson Vitorino. ` +
      `Use SOMENTE as informações abaixo. Se não tiver no texto, diga que não sabe. ${langInstruction}`;

    const prompt =
      `${systemInstruction}\n\n` +
      `INFORMAÇÕES DO PORTFÓLIO:\n${knowledgeBase}\n\n` +
      `PERGUNTA DO USUÁRIO:\n${question}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed_to_generate' });
  }
}