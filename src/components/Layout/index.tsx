import { useRouter } from "next/router";
import React, { useEffect } from "react";

import NavBar from "@/components/NavBar";
import Observer from "@/utils/observer";
import utils from "@/utils/utils";

export default function Layout(props: React.PropsWithChildren) {
  const { children } = props;
  const router = useRouter();

  const isHome = router.route === "/";

  useEffect(() => {
    Observer.on<ThemeType>("changeTheme", "changeTheme", utils.changeTheme);
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <NavBar isHome={isHome} />
      <main>{children}</main>
    </div>
  );
}
