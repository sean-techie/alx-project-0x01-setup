import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">
        {name} ({username})
      </h2>

      <p className="text-gray-600 mt-2">{email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>

      <p className="text-gray-600 mt-2">
        Address: {address.suite}, {address.street}, {address.city},{" "}
        {address.zipcode}
      </p>

      <p className="text-gray-600 mt-2">
        Company: {company.name} — {company.catchPhrase}
      </p>
    </div>
  );
};

export default UserCard;
