import axios from "axios";

export const generateText = async (prompt) => {
  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );

  return res.data.choices[0].message.content;
};
