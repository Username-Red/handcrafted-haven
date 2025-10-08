import ProfileHeader from '../[user]/ProfileHeader'
import ProfileInfo from '../[user]/ProfileInfo'
import MyListings from '../[user]/MyListings'
import AccountSettings from '../[user]/AccountSettings'
import LogoutButton from '../[user]/LogoutButton'

export default async function ProfilePage() {
  // Example: Fetch current user data (Next.js server component)
  const user = {
    name: "Jared Greeff",
    email: "jared@example.com",
    role: "Seller",
    joined: "March 2025",
    avatar: "/images/avatar-placeholder.png"
  }

  // You could fetch listings here too
  const listings = [
    { id: 1, title: "Handcrafted Wooden Bowl", price: 35.00, image: "/images/bowl.jpg" },
    { id: 2, title: "Ceramic Mug Set", price: 48.00, image: "/images/mug.jpg" }
  ]

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <ProfileHeader user={user} />
      <ProfileInfo user={user} />
      {user.role === "Seller" && <MyListings listings={listings} />}
      <AccountSettings />
      <LogoutButton />
    </main>
  )
}
