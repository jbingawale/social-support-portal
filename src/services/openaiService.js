import axios from "axios";

export const generateText = async (prompt) => {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
      },
    },
  );

  return res.data.choices[0].message.content;
};
