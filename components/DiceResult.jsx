export default function DiceResult({ d1, d2 }) {
  const won = d1 === 6 && d2 === 6;
  return (
    <div style={{padding:20}}>
      <div style={{fontSize:28, fontWeight:600}}>{won ? "You Won" : "You Lose"}</div>
      <div style={{marginTop:10}}>Sonuç: {d1}-{d2}</div>
    </div>
  );
}
