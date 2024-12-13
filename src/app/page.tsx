"use client"
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login, selectUser } from "../store/features/authSlice";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { useEffect } from "react";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
        router.push("/route");
    }
}, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      dispatch(login({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }))
      router.push("/route");

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login-container">
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default page;
