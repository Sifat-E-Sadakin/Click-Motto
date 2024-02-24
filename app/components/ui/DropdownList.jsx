const DropdownList = props => {
  return (
    <li className="text-gray text-[15px] py-[5px] pl-[12px] duration-500 cursor-pointer hover:bg-slate hover:text-white">
      {props.label}
    </li>
  );
};

export default DropdownList;
