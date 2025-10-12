'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  const username = session?.user?.name || 'guest';

  return (
    <div className="navbar bg-base-100/70 shadow-sm sticky top-0 z-500 backdrop-blur-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">Handcrafted Haven</Link>
      </div>
      <div className="flex-none">
        {/* ... your existing cart and avatar dropdown code ... */}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile avatar"
                src={session?.user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link href={`/users/${username}`} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
