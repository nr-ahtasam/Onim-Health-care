import { usePatientPortal } from "@/context/PatientPortalContext";
import { FiBell } from "react-icons/fi";

const Header = () => {
  const {patient} = usePatientPortal();
  const {
    display_name, 
    email, 
    acf_fields: { profile_picture_url } = {}
  } = patient || {};

  return (
    <div>
      <div className="flex justify-center lg:justify-between items-center mb-8">
        <div className="w-1/3">
        </div>
        <div className="flex items-center gap-4">
          <FiBell className="text-gray-400 text-xl hidden lg:visible" />
          <span className="text-gray-500 text-sm">{display_name || email}</span>
          <img
            src={profile_picture_url || "/images/avatar_m.png"}
            alt="User"
            className="w-6 h-6 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
