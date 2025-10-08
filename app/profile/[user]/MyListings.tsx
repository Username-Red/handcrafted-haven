type Listing = {
  id: number
  title: string
  price: number
  image: string
}

type Props = {
  listings: Listing[]
}

export default function MyListings({ listings }: Props) {
  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">My Listings</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">Add New Product</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {listings.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="font-medium">{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="mt-2 flex gap-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
