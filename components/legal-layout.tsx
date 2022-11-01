export default function LegalLayout({ children }) {
  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 3fr 1fr" }}>
      <div />
      {children}
      <div />
    </div>
  );
}
