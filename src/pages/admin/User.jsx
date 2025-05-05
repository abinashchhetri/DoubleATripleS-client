import React, { useState } from 'react';

const dummyUsers = [
  {
    id: 'USR12345',
    username: 'JaneDoe',
    email: 'jane.doe@example.com',
    membershipId: 'M12345',
    totalOrders: 30,
    discountEarned: 15,
    status: 'Active',
  },
  {
    id: 'USR12346',
    username: 'JohnSmith',
    email: 'john.smith@example.com',
    membershipId: 'M12346',
    totalOrders: 12,
    discountEarned: 5,
    status: 'Active',
  },
  {
    id: 'USR12347',
    username: 'AliceBrown',
    email: 'alice.brown@example.com',
    membershipId: 'M12347',
    totalOrders: 50,
    discountEarned: 25,
    status: 'Inactive',
  },
  {
    id: 'USR12348',
    username: 'BobWhite',
    email: 'bob.white@example.com',
    membershipId: 'M12348',
    totalOrders: 15,
    discountEarned: 10,
    status: 'Active',
  },
  {
    id: 'USR12349',
    username: 'CharlieGreen',
    email: 'charlie.green@example.com',
    membershipId: 'M12349',
    totalOrders: 60,
    discountEarned: 30,
    status: 'Inactive',
  },
];

const statusOptions = ['Active', 'Inactive'];

const User = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [editingId, setEditingId] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleStatusChange = (userId, newStatus) => {
    const updated = users.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updated);
  };

  const handleEditUser = (user) => {
    setEditingId(user.id);
    setEditedUser({ ...user });
  };

  const handleSaveUser = () => {
    const updated = users.map((user) =>
      user.id === editingId ? { ...editedUser } : user
    );
    setUsers(updated);
    setEditingId(null);
    setEditedUser({});
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedUser({});
  };

  return (
    <div className="p-8 max-w-full">
      <h2 className="text-3xl font-bold mb-6 text-[#636AE8]">User Management</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white text-sm">
          <thead className="bg-[#636AE8] text-white">
            <tr>
              <th className="p-4 w-36">User ID</th>
              <th className="p-4 w-36">Username</th>
              <th className="p-4 w-48">Email</th>
              <th className="p-4 w-36">Membership ID</th>
              <th className="p-4 w-36">Total Orders</th>
              <th className="p-4 w-36">Discount</th>
              <th className="p-4 w-36">Status</th>
              <th className="p-4 w-48 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium truncate">{user.id}</td>
                <td className="p-4">
                  {editingId === user.id ? (
                    <input
                      className="border px-2 py-1 w-full rounded"
                      value={editedUser.username}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, username: e.target.value })
                      }
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td className="p-4 truncate">
                  {editingId === user.id ? (
                    <input
                      className="border px-2 py-1 w-full rounded"
                      value={editedUser.email}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, email: e.target.value })
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="p-4">{user.membershipId}</td>
                <td className="p-4">{user.totalOrders}</td>
                <td className="p-4">{user.discountEarned}%</td>
                <td className="p-4">
                  {editingId === user.id ? (
                    <select
                      className="border px-2 py-1 w-full rounded"
                      value={editedUser.status}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, status: e.target.value })
                      }
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  ) : (
                    user.status
                  )}
                </td>
                <td className="p-4 text-center space-x-2">
                  {editingId === user.id ? (
                    <>
                      <button
                        onClick={handleSaveUser}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 text-sm"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center p-6 text-gray-500">
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
