export default function Container({ children }) {
  return <div className="container mx-auto px-5" style={{maxWidth: "100vw"}}>{children}</div>
}
