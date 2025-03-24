export default function Page() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "User" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-primary-lighten" : "bg-white"
                } hover:bg-primary-lighten transition-all`}
            >
              <td className="px-6 py-4 text-gray-900 text-sm">{item.name}</td>
              <td className="px-6 py-4 text-gray-700 text-sm">{item.email}</td>
              <td className="px-6 py-4 text-gray-600 text-sm">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}