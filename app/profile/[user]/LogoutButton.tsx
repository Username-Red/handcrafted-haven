'use client'

export default function LogoutButton() {
  const handleLogout = () => {
    // logic to log out
    console.log("Logging out...")
  }

  return (
    <button
      onClick={handleLogout}
      className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
    >
      Log Out
    </button>
  )
}
