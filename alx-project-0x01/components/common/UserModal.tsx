import React, { useState } from "react";
import { UserData, UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const [, key] = name.split(".");
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [key]: value,
        },
      });
    } 
    else if (name.includes("company.")) {
      const [, key] = name.split(".");
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [key]: value,
        },
      });
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitUser = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        {/* Basic Info */}
        <input className="input" placeholder="Name" name="name" onChange={handleChange} />
        <input className="input" placeholder="Username" name="username" onChange={handleChange} />
        <input className="input" placeholder="Email" name="email" onChange={handleChange} />

        {/* Address */}
        <h3 className="font-semibold mt-4">Address</h3>
        <input className="input" placeholder="Street" name="address.street" onChange={handleChange} />
        <input className="input" placeholder="Suite" name="address.suite" onChange={handleChange} />
        <input className="input" placeholder="City" name="address.city" onChange={handleChange} />
        <input className="input" placeholder="Zipcode" name="address.zipcode" onChange={handleChange} />

        {/* Geo */}
        <h3 className="font-semibold mt-4">Geo</h3>
        <input className="input" placeholder="Latitude" name="address.geo.lat" onChange={handleChange} />
        <input className="input" placeholder="Longitude" name="address.geo.lng" onChange={handleChange} />

        {/* Contact */}
        <h3 className="font-semibold mt-4">Contact</h3>
        <input className="input" placeholder="Phone" name="phone" onChange={handleChange} />
        <input className="input" placeholder="Website" name="website" onChange={handleChange} />

        {/* Company */}
        <h3 className="font-semibold mt-4">Company</h3>
        <input className="input" placeholder="Company Name" name="company.name" onChange={handleChange} />
        <input className="input" placeholder="Catch Phrase" name="company.catchPhrase" onChange={handleChange} />
        <input className="input" placeholder="BS" name="company.bs" onChange={handleChange} />

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button className="bg-gray-400 px-3 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-3 py-2 rounded" onClick={submitUser}>
            Add User
          </button>
        </div>
      </div>

      {/* Tailwind helper class */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 8px;
          margin-top: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default UserModal;
