"use client";

import { useState } from "react";
import { RefreshCw, Clipboard } from "lucide-react";

export default function Home() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [token, setToken] = useState("");

  const generateToken = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          length,
          upper: uppercase,
          lower: lowercase,
          numbers,
          symbols,
        }),
      });
      

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
      } else {
        setToken("Error generating token.");
        console.error("API error:", data);
      }
    } catch (error) {
      setToken("Server error.");
      console.error("Request failed:", error);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(token);
  };

  return (
    <div className="w-full max-w-3xl bg-gray-200 rounded-2xl shadow-md p-8 space-y-6 border border-gray-600">
      <h2 className="text-2xl font-semibold text-black">Generate Token</h2>
      <p className="text-xl text-gray-500">CONFIGURE YOUR TOKEN SETTINGS</p>

      <div className="space-y-2">
        <label className="font-medium text-black">Length: {length}</label>
        <input
          type="range"
          min="4"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
          Uppercase (A-Z)
        </label>
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
          Lowercase (a-z)
        </label>
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
          Numbers (0-9)
        </label>
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
          Symbols (!@#$)
        </label>
      </div>

      <div className="space-y-2 ">
        <label className="font-medium text-black">Generated Token</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={token}
            placeholder="Click generate to create a token"
            className="w-full border border-gray-600 rounded px-3 py-2 text-sm bg-gray-100"
          />
          <button onClick={copyToClipboard}>
            <Clipboard className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>

      <button
        onClick={generateToken}
        className="w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition"
      >
        <RefreshCw className="w-4 h-4" />
        Generate Token
      </button>
    </div>
  );
}
