"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"#"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our Cources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={"#"}> Generative AI </HoveredLink>
              <HoveredLink href={"#"}> Full-Stack Developer </HoveredLink>
              <HoveredLink href={"#"}> Block Chain </HoveredLink>
              <HoveredLink href={"#"}> Machine Learning </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact Us" ></MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
