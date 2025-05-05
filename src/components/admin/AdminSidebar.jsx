import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Books", path: "/admin/books" },
    { name: "Users", path: "/admin/users" },
    { name: "Announcements", path: "/admin/announcements" },
    { name: "Orders", path: "/admin/orders" },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen bg-white shadow-lg py-4 px-2 flex flex-col gap-1">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          end={item.path === "/admin"}
          className={({ isActive }) =>
            `group flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 px-3 rounded-lg transition-all duration-300 ${
              isActive
                ? "bg-[#E6E7FD] text-[#636AE8] font-semibold  border-[#636AE8]"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#636AE8]"
            }`
          }
        >
          <p className="md:block hidden">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
