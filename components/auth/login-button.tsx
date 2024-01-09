"use client";
import * as React from "react";
import { Box } from "@mantine/core";
import { useRouter } from "next/navigation";

const LoginButton: React.FC<
  React.PropsWithChildren<{ mode?: "modal" | "redirect"; asChild?: boolean }>
> = ({ asChild, children, mode = "redirect" }) => {
  const router = useRouter();

  if (mode === "modal") {
    return <span>TODO</span>;
  }

  const onClick = () => {
    router.push("/auth/login");
  };

  return (
    <Box component="span" onClick={onClick} style={{ cursor: "pointer" }}>
      {children}
    </Box>
  );
};

export default LoginButton;
