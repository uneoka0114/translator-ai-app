"use client";

import { languages } from "@/lib/constants";
import { ArrowRightLeft } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import LanguageSelector from "./language-dropdown";

export default function FormHeader() {
  const [startingLanguage, setStartingLanguage] = useState("English");
  const [endLanguage, setEndLanguage] = useState("Spanish");

  const startingLanguageOptions = languages.filter(
    (language) => language !== endLanguage
  );

  const endLanguageOptions = languages.filter(
    (language) => language !== startingLanguage
  );

  const handleSwitch = useCallback(() => {
    const temp = startingLanguage;
    setStartingLanguage(endLanguage);
    setEndLanguage(temp);
  }, [startingLanguage, endLanguage]);

  return (
    <div className="flex justify-between space-x-3">
      <LanguageSelector
        key={startingLanguage}
        value={startingLanguage}
        onValueChange={setStartingLanguage}
        options={startingLanguageOptions}
      />
      <Button
        type="button"
        variant="outline"
        onClick={handleSwitch}
        size="icon"
      >
        <ArrowRightLeft size={18} />
      </Button>
      <LanguageSelector
        key={endLanguage}
        value={endLanguage}
        onValueChange={setEndLanguage}
        options={endLanguageOptions}
      />
      <input
        type="text"
        name="startingLanguage"
        placeholder="Starting Language"
        className="hidden"
        value={startingLanguage}
      />
      <input
        type="text"
        name="endLanguage"
        placeholder="End Language"
        className="hidden"
        value={endLanguage}
      />
    </div>
  );
}
