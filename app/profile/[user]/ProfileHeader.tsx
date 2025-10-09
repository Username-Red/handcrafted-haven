type Props = {
  user: {
    name: string
    role: string
    avatar: string
  }
}

export default function ProfileHeader({ user }: Props) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={user.avatar}
        alt={`${user.name} avatar`}
        className="w-20 h-20 rounded-full object-cover border"
      />
      <div>
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <p className="text-gray-600">{user.role}</p>
      </div>
    </div>
  )
}
