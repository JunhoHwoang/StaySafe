import { useState } from "react";

export const Sidebar = () => {
  return (
    <div className="h-full pt-10 w-56 bg-neutral-500 text-white">
      <section className="flex justify-between">
        <p className="py-3 text-lg">Filter</p>
      </section>
      <div className="sidebar-content">
        <ul className="cursor-pointer list-none"></ul>
      </div>
    </div>
  );
};
