"use server";

import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const parser = new StringOutputParser();
const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
});

export async function translate(_: any, formData: FormData) {
  const language = formData.get("language");
  const text = formData.get("text");

  const systemTemplate = "Translate the following into {language}:";
  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ]);

  const chain = promptTemplate.pipe(model).pipe(parser);
  const result = await chain.invoke({
    language,
    text,
  });

  return {
    message: result,
  };
}
