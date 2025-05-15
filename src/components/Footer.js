function Footer(props) {
  return (
    <footer>
      <div className="container footer-content">
        {props.links.map((item, index) => (
          <span key={index} className="footer-link">
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;