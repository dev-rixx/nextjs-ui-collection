"use client";

// Framework-> Nextjs/Reactjs , TypeScript, Tailwind

import { useState } from "react";
import {
  Home,
  BarChart3,
  CheckSquare,
  AlertTriangle,
  Users,
  HelpCircle,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  LayoutDashboard,
  PieChart,
  FolderKanban,
} from "lucide-react";
import Image from "next/image";

interface SubItem {
  name: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);

  const subItems: SubItem[] = [
    { name: "Overview", icon: <LayoutDashboard size={18} /> },
    { name: "Analytics", icon: <PieChart size={18} /> },
    { name: "Projects", icon: <FolderKanban size={18} /> },
  ];

  return (
    <div className="flex">
      <div
        className={`h-screen bg-[#1B211A] text-gray-300 flex flex-col justify-between transition-all duration-500 ease-in-out ${
          collapsed ? "w-22.5" : "w-70"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-10">
            <div
              className={`flex items-center gap-3 transition-all duration-300 ${
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-5 bg-white rotate-45"></div>
                <div className="w-2.5 h-5 bg-white rotate-45 opacity-70"></div>
              </div>
              <span className="text-white text-sm font-medium tracking-[0.25em]">
                RIXX.DEV
              </span>
            </div>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {collapsed ? (
                <ChevronRight size={22} />
              ) : (
                <ChevronLeft size={22} />
              )}
            </button>
          </div>

          {!collapsed && (
            <p className="text-xs text-gray-500 mb-4 tracking-widest">MENU</p>
          )}

          <SidebarItem
            icon={<Home size={20} />}
            label="Home"
            collapsed={collapsed}
          />

          {/* Activity */}
          <div
            className="mt-2"
            onMouseEnter={() => setActivityOpen(true)}
            onMouseLeave={() => setActivityOpen(false)}
          >
            <button
              onClick={() => setActivityOpen(!activityOpen)}
              className="flex items-center justify-between w-full bg-[#1a1d23] px-4 py-3 rounded-xl transition-colors hover:bg-[#22262e]"
            >
              <div className="flex items-center gap-3">
                <BarChart3 size={20} />
                {!collapsed && <span>Activity</span>}
              </div>

              {!collapsed && (
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    activityOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activityOpen && !collapsed
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-8 mt-4 space-y-3">
                {subItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 text-sm hover:text-white cursor-pointer transition-colors"
                  >
                    <span className="text-gray-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other menu */}
          <div className="mt-6 space-y-2">
            <SidebarItem
              icon={<CheckSquare size={20} />}
              label="Tasks"
              collapsed={collapsed}
            />
            <SidebarItem
              icon={<AlertTriangle size={20} />}
              label="Reporting"
              collapsed={collapsed}
            />

            <div className="flex items-center justify-between px-4 py-3 hover:bg-[#1a1d23] rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <Users size={20} />
                {!collapsed && "Users"}
              </div>
              {!collapsed && (
                <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              )}
            </div>
          </div>

          {!collapsed && (
            <>
              <p className="text-xs text-gray-500 mt-10 mb-4 tracking-widest">
                OTHER
              </p>

              <SidebarItem
                icon={<HelpCircle size={20} />}
                label="Help"
                collapsed={collapsed}
              />
              <SidebarItem
                icon={<Settings size={20} />}
                label="Settings"
                collapsed={collapsed}
              />
            </>
          )}
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-[#1f232b]">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-[#1a1d23] transition-colors">
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/sidebar/bg.png"
          alt="background"
          className="w-full h-full"
          width={500}
          height={500}
        />
        <div className="text-white absolute bottom-60 right-30 text-4xl font-medium text-right hidden lg:block">
          <h1>Build Faster.</h1>
          <h2>Control Everything.</h2>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1d23] rounded-xl cursor-pointer transition-all duration-200">
      {icon}
      <span
        className={`transition-all duration-300 ${
          collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
