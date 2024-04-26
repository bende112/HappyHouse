// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaBars} from "react-icons/fa";
import Logo from "../../assets/Logo.png";

const Menu = [
  {
    id: 1,
    name: "Senegalese",
    link: "#"
  },
  {
    id: 2,
    name: "Cameroonias",
    link: "/#",
  },
  {
    id: 3,
    name: "Shawamama",
    link: "/#",
  },
  {
    id: 4,
    name: "Fast Food",
    link: "/#",
  },
  {
    id: 5,
    name: "Drinks",
    link: "/#",
  },
]
export default function Navbar () {
  const [open, setOpen] = React.useState( false);

  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <>
    <div className="bg-lightBlue">
      <div className="container py-2">
        <div className=" flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="w-36" />
            </a>
          </div>

          {/* Link section */}
          <div className="hidden lg:flex justify-between items-center gap-4">
            <ul className="hidden lg:flex justify-between items-center gap-4">
              {
                Menu.map((menu)=>(
                  <li key={menu.id}>
                  <a href={menu.link}
                  className="inline-block text-xl p-4">{menu.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* Responsive Menu for mobile */}
          <div className="lg:hidden">
            <button onClick={handleOpen}>
              <FaBars className="text-3xl" />
            </button>

            {/* Dropdown Menu */}
            {
              open &&
                <ul className="bg-white space-x-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50">
                  {Menu.map((menu)=> (
                    <li key={menu.id}>
                      <a href={menu.link} className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md"
                      > {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

