import FooterLinks from "../FooterLinks";

const Footer = () => {
  return (
    <footer className="text-sm flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-2 border-t pt-5">
      <p>© 2025 Chetan Yadav. All rights reserved.</p>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
