type Props = {
  user: {
    email: string
    joined: string
  }
}

export default function ProfileInfo({ user }: Props) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
      <p>Email: {user.email}</p>
      <p>Member Since: {user.joined}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">Edit Info</button>
    </section>
  )
}
