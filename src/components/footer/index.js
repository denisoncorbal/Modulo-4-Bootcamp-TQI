import Translator from "../i18n/translator";

export default function Footer() {
  return (
    <footer>
      <a href="https://www.flaticon.com/" title="Ícones">
        <Translator path="footer.icon" />
      </a>
    </footer>
  );
}