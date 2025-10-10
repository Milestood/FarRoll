import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<number | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);

  async function rollDice() {
    const wallet = "demo-wallet"; // TODO: gerçek cüzdan adresini bağla
    const res = await fetch(`/api/roll?wallet=${wallet}`);
    const data = await res.json();
    if (data.result) {
      setResult(data.result);
      setRemaining(data.remaining);
    } else {
      alert(data.error);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Farroll</h1>
      <button onClick={rollDice}>Zar At</button>
      {result && <h2>Sonuç: {result}</h2>}
      {remaining !== null && <p>Kalan hak: {remaining}</p>}
    </div>
  );
}
