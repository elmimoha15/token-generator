// src/components/TokenForm.tsx
"use client";

import { useState } from "react";
import { RefreshCw, Copy } from "lucide-react";

export default function TokenForm() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [token, setToken] = useState("");

  const generateToken = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    let chars = "";
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) return;

    let result = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length);
      result += chars[index];
    }

    setToken(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(token);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-5">
      <h2 className="text-2xl font-bold">Generate Token</h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Configure your token settings below</p>

      <div>
        <label className="block font-medium mb-1">Length: {length}</label>
        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Character Types</label>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useUpper} onChange={() => setUseUpper(!useUpper)} />
            Uppercase (A-Z)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useLower} onChange={() => setUseLower(!useLower)} />
            Lowercase (a-z)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} />
            Numbers (0-9)
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} />
            Symbols (!@#$)
          </label>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Generated Token</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
            readOnly
            value={token || "Click generate to create a token"}
          />
          <button
            onClick={copyToClipboard}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <Copy size={16} />
          </button>
        </div>
      </div>

      <button
        onClick={generateToken}
        className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90"
      >
        <RefreshCw size={16} />
        Generate Token
      </button>
    </div>
  );
}
