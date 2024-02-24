const ColoredBtn = props => {
  return (
    <button className="text-white border border-orange rounded-[6px] bg-orange py-[7px] px-[10px] font-medium duration-500 hover:bg-white hover:text-orange">
      {props.label}
    </button>
  );
};

export default ColoredBtn;
