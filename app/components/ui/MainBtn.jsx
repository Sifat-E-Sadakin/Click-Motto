const MainBtn = props => {
  return (
    <button className="text-gray border border-gray rounded-[6px] bg-transparent py-[7px] px-[10px] font-medium duration-500 hover:bg-gray hover:text-white">
      {props.label}
    </button>
  );
};

export default MainBtn;
