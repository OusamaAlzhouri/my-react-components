function Nav(props) {
  return (
    <nav>
      <ul className="flex nav-list">
        {props.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;


