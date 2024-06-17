const NavItem = ({ href, children }) => {
  return (
    <li className="pt-10 font-bold">
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavItem;
