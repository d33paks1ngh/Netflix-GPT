import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
  // This is the default and can be omitted
});

export default client;
