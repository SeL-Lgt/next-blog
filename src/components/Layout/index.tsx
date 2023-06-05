import { useRouter } from "next/router";
import React from "react";

import NavBar from "@/components/NavBar";

export default function Layout(props: React.PropsWithChildren) {
  const { children } = props;
  const router = useRouter();

  const isHome = router.route === "/";

  return (
    <div>
      <NavBar isHome={isHome} />
      <main>{children}</main>
    </div>
  );
}
