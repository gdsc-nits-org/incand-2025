"use client";

import { useState, useEffect } from "react";
import { env } from "~/env";
import UserDashboard from "../../../components/User_Dashboard/user";
import AdminDashboard from "../../../components/Admin_Dasboard/admin";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { auth } from "~/app/utils/firebase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loader from "../loading";

export const runtime = "edge";

interface UserResponse {
  name: string;
  email: string;
  pic: string;
  id: string;
  letters: string;
  level: number;
  flag: Date;
  role: string;
}

interface ApiResponse {
  status: number;
  msg: UserResponse;
}

const Dashboard = () => {
  const [_user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (_user) {
        try {
          const token = await _user.getIdToken();
          const userResponse = await axios.get<ApiResponse>(
            `${env.NEXT_PUBLIC_API_URL}/api/user/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setIsAdmin(userResponse.data.msg.role === "MODERATOR");
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to fetch user data.");
        } finally {
          setIsAuthChecked(true);
        }
      } else {
        setIsAuthChecked(true);
      }
    };

    if (!loading) {
      void fetchUserData();
    }
  }, [_user, loading]);

  useEffect(() => {
    if (!loading && !_user) {
      toast.warning("Please Login!");
      router.push("/");
    }
  }, [_user, loading, router]);

  if (loading || !isAuthChecked) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <>{isAdmin ? <AdminDashboard /> : <UserDashboard />}</>;
};

export default Dashboard;
