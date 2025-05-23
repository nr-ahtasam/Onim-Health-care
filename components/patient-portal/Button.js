"use client";

export default function Button({
  children,
  variant = "primary", // "primary", "success", "danger", "none", "upload"
  size = "sm", // "sm", "md", "lg"
  className = "",
  ...props
}) {
  // Color variants
  const colorVariants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    upload: "bg-sky-400 hover:bg-sky-500 text-white",
    none: "bg-sky-200 text-white cursor-not-allowed",
  };

  // Size variants
  const sizeVariants = {
    sm: "px-4 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        rounded font-medium transition
        ${colorVariants[variant] || colorVariants.primary}
        ${sizeVariants[size] || sizeVariants.sm}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
