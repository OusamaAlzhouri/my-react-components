function Nav(props) {
  return (
    <nav>
      <ul className="flex">
        {props.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

