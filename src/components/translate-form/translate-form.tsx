"use client";

import { useFormState } from "react-dom";
import { translate } from "../../app/_actions/translate";
import { Textarea } from "../ui/textarea";
import LanguageSelector from "./language-selector";
import SubmitButton from "./submit-button";

const initialState = {
  message: "",
};

export default function TranslateForm() {
  const [state, formAction] = useFormState(translate, initialState);

  return (
    <form action={formAction} className="flex flex-col space-y-3 w-[420px]">
      <LanguageSelector />
      <Textarea
        name="text"
        placeholder="Text to translate..."
        className="min-h-60"
      />
      <SubmitButton />
      {state.message && (
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Translation</p>
          <p>{state.message}</p>
        </div>
      )}
    </form>
  );
}
