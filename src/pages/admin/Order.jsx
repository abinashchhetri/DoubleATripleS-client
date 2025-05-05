import React, { useState } from 'react';

const dummyOrders = [
  {
    id: 'ORD12345',
    member: 'Jane Doe',
    email: 'jane@example.com',
    books: ['The Alchemist', 'Atomic Habits'],
    total: 4999,
    status: 'Pending',
    placedOn: '2025-05-01',
  },
  {
    id: 'ORD12346',
    member: 'John Smith',
    email: 'john@example.com',
    books: ['Clean Code'],
    total: 2550,
    status: 'Completed',
    placedOn: '2025-05-02',
  },
];

const statusOptions = ['Pending', 'Completed'];

const Order = () => {
  const [orders, setOrders] = useState(dummyOrders);
  const [editingId, setEditingId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});

  const handleStatusChange = (orderId, newStatus) => {
    const updated = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  const handleCancelOrder = (orderId) => {
    const updated = orders.filter((order) => order.id !== orderId);
    setOrders(updated);
  };

  const handleEditOrder = (order) => {
    setEditingId(order.id);
    setEditedOrder({ ...order, books: order.books.join(', ') });
  };

  const handleSaveOrder = () => {
    const updated = orders.map((order) =>
      order.id === editingId
        ? {
            ...editedOrder,
            books: editedOrder.books.split(',').map((b) => b.trim()),
            total: Number(editedOrder.total),
          }
        : order
    );
    setOrders(updated);
    setEditingId(null);
    setEditedOrder({});
  };

  return (
    <div className="p-8 max-w-full">
      <h2 className="text-3xl font-bold mb-6 text-[#636AE8]">Order Management</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white text-sm">
          <thead className="bg-[#636AE8] text-white">
            <tr>
              <th className="p-4 w-36">Order ID</th>
              <th className="p-4 w-36">Member</th>
              <th className="p-4 w-48">Email</th>
              <th className="p-4 w-64">Books</th>
              <th className="p-4 w-36">Total (NPR)</th>
              <th className="p-4 w-36">Status</th>
              <th className="p-4 w-36">Placed On</th>
              <th className="p-4 w-48 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium truncate">{order.id}</td>
                <td className="p-4">
                  {editingId === order.id ? (
                    <input
                      className="border px-2 py-1 w-full rounded"
                      value={editedOrder.member}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, member: e.target.value })
                      }
                    />
                  ) : (
                    order.member
                  )}
                </td>
                <td className="p-4 truncate">
                  {editingId === order.id ? (
                    <input
                      className="border px-2 py-1 w-full rounded"
                      value={editedOrder.email}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, email: e.target.value })
                      }
                    />
                  ) : (
                    order.email
                  )}
                </td>
                <td className="p-4">
                  {editingId === order.id ? (
                    <input
                      className="border px-2 py-1 w-full rounded"
                      value={editedOrder.books}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, books: e.target.value })
                      }
                    />
                  ) : (
                    <ul className="list-disc ml-5">
                      {order.books.map((book, idx) => (
                        <li key={idx}>{book}</li>
                      ))}
                    </ul>
                  )}
                </td>
                <td className="p-4">
                  {editingId === order.id ? (
                    <input
                      type="number"
                      className="border px-2 py-1 w-full rounded"
                      value={editedOrder.total}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, total: e.target.value })
                      }
                    />
                  ) : (
                    `₨ ${order.total.toLocaleString()}`
                  )}
                </td>
                <td className="p-4">
                  {editingId === order.id ? (
                    <select
                      className="border px-2 py-1 w-full rounded"
                      value={editedOrder.status}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, status: e.target.value })
                      }
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  ) : (
                    order.status
                  )}
                </td>
                <td className="p-4">{order.placedOn}</td>
                <td className="p-4 text-center space-x-2">
                  {editingId === order.id ? (
                    <button
                      onClick={handleSaveOrder}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditOrder(order)}
                        className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center p-6 text-gray-500">
                  No orders available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
