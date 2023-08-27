import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <header className=" fixed z-[100] w-full p-5 bg-my-bg flex items-center justify-between drop-shadow-header-shadow">
      {/* Header Left */}
      <div className=" flex items-center ">
        <MenuIcon />
        <h1 className=" text-base font-bold ml-1">
          DC <span className="  text-purple-950">Creation</span>
        </h1>
        <div className=" flex ml-3 items-center bg-my-bg shadow-md pr-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className=" p-1 pl-3 bor rounded-2xl text-sm shadow-md"
          />
          <SearchIcon className=" ml-1"/>
        </div>
      </div>
      {/* Header Right */}
      <ShoppingCartIcon />
    </header>
  );
};

export default Header;
