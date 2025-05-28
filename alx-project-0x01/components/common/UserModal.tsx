import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle nested fields
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value,
          },
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="address.street"
            placeholder="Street"
            value={user.address.street}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.suite"
            placeholder="Suite"
            value={user.address.suite}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="address.zipcode"
            placeholder="Zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="geo.lat"
            placeholder="Geo Latitude"
            value={user.address.geo.lat}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="geo.lng"
            placeholder="Geo Longitude"
            value={user.address.geo.lng}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="company.bs"
            placeholder="BS"
            value={user.company.bs}
            onChange={handleChange}
            className="input"
          />

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
