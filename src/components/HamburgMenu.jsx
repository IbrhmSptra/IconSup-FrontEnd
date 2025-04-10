// import { useDispatch, useSelector } from "react-redux";
// import { toggleSidebar } from "../../redux/slice/webContent";

const HamburgMenu = () => {
  //   const isSidebarOpen = useSelector((state) => state.webcontent.sidebar);
  //   const dispatch = useDispatch();
  return (
    <div className="flex gap-x-8 sm:hidden">
      <div
        className="w-10 h-8 rounded-sm cursor-pointer relative"
        // onClick={() => {
        //   dispatch(toggleSidebar());
        // }}
      >
        <div
          className={`bg-black h-1 w-full absolute rounded-md transition-all duration-300 
           `}
        ></div>
        <div
          className={`bg-black h-1 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md transition-all duration-300 `}
        ></div>
        <div
          className={`bg-black h-1 w-full absolute bottom-0 rounded-md transition-all duration-300 `}
        ></div>
      </div>
    </div>
  );
};

export default HamburgMenu;
