'use client'
import Todo from "@/modules/Todo/";
import { selectUser } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return <p>Loading...</p>;
  }
  return <Todo />;
}