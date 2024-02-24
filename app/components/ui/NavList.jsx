const NavList = props => {
  return (
    <li
      className={`text-[15px] ${
        props.active ? "text-black" : "text-gray"
      }  hover:text-black duration-300 cursor-pointer lg:ml-[23px] px-[10px] py-[5px] lg:p-0 font-medium`}>
      {props.label}
    </li>
  );
};

export default NavList;
