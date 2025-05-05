import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Books", path: "/admin/books" },

    {
      name: "Users",
      path: "/admin/users",
      //   icon: assets.person_tick_icon,
    },
    {
      name: "Announcements",
      path: "/admin/announcements",
      //   icon: assets.person_tick_icon,
    },
    {
        name: "Orders",
        path: "/admin/orders",
        //   icon: assets.person_tick_icon,
      },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col">
      {menuItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/educator"}
            className={({ isActive }) =>
              `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${
                isActive
                  ? "bg-indigo-50 border-r-[6px] border-indigo-500/90"
                  : "hover:bg-gray-100/90 border-r-[6px] border-white hover:border-gray-100/90 hover:transition-all duration-300"
              }  `
            }
          >
            {/* <img src={item.icon} className="w-6 h-6" /> */}
            <p className="md:block hidden text-center">{item.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
