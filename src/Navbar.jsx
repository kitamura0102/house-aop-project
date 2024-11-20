import React from "react";

export default function Navbar() {
  return (
    <nav className="h-20 bg-white flex items-center justify-center">
      <ul className="flex gap-8 font-normal text-lg">
        <li className="">Buy</li>
        <li>Rent</li>
        <li>Sell</li>
        <li>Home Loans</li>
        <li>Find an Agent</li>
        <img src="./src/assets/z-logo-default-visual-refresh.svg" alt="" className="mx-24 w-30"/>
        <li>Manage Rentals</li>
        <li>Advertise</li>
        <li>Help</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
}
