const getPasswordStrength = (password: string) => {
  if (password.length < 6) {
    return { label: "Weak", color: "text-red-500" };
  }
  if (password.length < 8) {
    return { label: "Moderate", color: "text-yellow-500" };
  }
  return { label: "Strong", color: "text-green-500" };
};

const PasswordStrength: React.FC<{ password: string }> = ({ password }) => {
  const strength = getPasswordStrength(password);

  return (
    <div className="text-sm text-gray-700">
      Password Strength:{" "}
      <span className={`font-semibold ${strength.color}`}>
        {strength.label}
      </span>
    </div>
  );
};

export default PasswordStrength;
