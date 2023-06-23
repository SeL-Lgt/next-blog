import React from "react";

import ThemeSwitch from "@/components/ThemeSwitch";

type NavBarType = {
  isHome: boolean;
};

export default function NavBar(props: React.PropsWithChildren<NavBarType>) {
  const { isHome } = props;
  const navList = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "About",
      url: "/about",
    },
  ];

  return (
    <div className="relative z-10">
      <div
        className={`${
          isHome && "absolute"
        } flex items-center justify-end py-10 gap-3 w-full`}
      >
        {navList.map(item => (
          <a
            key={item.url}
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            href={item.url}
          >
            {item.title}
          </a>
        ))}
        <ThemeSwitch />
      </div>
    </div>
  );
}
