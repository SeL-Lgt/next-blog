import React from "react";

type NavBarType = {
  isHome: boolean;
};

export default function NavBar(props: React.PropsWithChildren<NavBarType>) {
  const { isHome } = props;
  return (
    <div className={isHome ? "absolute" : "sticky"}>
      <a href="/blog">Blog</a>
    </div>
  );
}
