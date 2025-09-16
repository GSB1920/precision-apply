import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/analyze", async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an ATS resume analyzer." },
        { role: "user", content: `Resume: ${resume}\nJob Description: ${jobDescription}` }
      ]
    });

    res.json({ analysis: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));