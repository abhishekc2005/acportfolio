import FooterLinks from "../FooterLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-border pt-6 pb-2">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Abhishek Choudhary. All rights reserved.
      </p>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
