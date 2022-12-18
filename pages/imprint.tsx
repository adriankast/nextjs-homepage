import LegalLayout from "../components/legal-layout";

export default function Imprint() {
  return (
    <LegalLayout>
      <main>
        <h1>Impressum</h1>
        <div>
          <ul>
            <li>Adrian Kast</li>
            <li>Luitpoldstraße 39</li>
            <li>82211 Herrsching</li>
            <li>
              <a href="mailto:info@adriankast.de">info@adriankast.de</a>
            </li>
            <li>
              <a href="tel:+4915678673195" title="Anrufen">
                +49 15678 673195
              </a>
            </li>
          </ul>
          <p>
            Die zuvor gemachten Plichtangaben in diesem Impressum dürfen nicht
            für kommerzielle Zwecke, insbesondere Werbemaßnahmen, genutzt
            werden.
          </p>
        </div>
      </main>
    </LegalLayout>
  );
}
