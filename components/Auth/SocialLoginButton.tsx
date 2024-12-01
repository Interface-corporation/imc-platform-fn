import React from "react";

type SocialLoginButtonProps = {
  provider: "Google" | "Facebook";
};

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider }) => {
  const getProviderStyles = (provider: string) => {
    switch (provider) {
      case "Google":
        return "bg-red-500 text-white hover:bg-red-600";
      case "Facebook":
        return "bg-blue-700 text-white hover:bg-blue-800";
      default:
        return "";
    }
  };

  return (
    <button
      className={`w-full py-2 rounded-md ${getProviderStyles(provider)}`}
    >
      Continue with {provider}
    </button>
  );
};

export default SocialLoginButton;