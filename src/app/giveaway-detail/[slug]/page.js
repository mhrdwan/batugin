import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import PointKamu from "@/components/PointKamu/page";
import React from "react";

export default function Page() {
  return (
    <div className="bg-white">
      <NavbarComp />
      <NorifReward />
    </div>
  );
}
