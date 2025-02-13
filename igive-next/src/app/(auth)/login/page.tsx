"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { setLoading, setError } from '@/features/auth/authSlice';

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "donor";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading());

    try {
      const result = await signIn('credentials', {
        ...formData,
        role,
        redirect: false,
      });

      if (result?.error) {
        dispatch(setError(result.error));
      } else {
        router.push(`/${role}/dashboard`);
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch(setError('Failed to sign in'));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-red-500" />
          <span className="ml-2 text-2xl font-bold text-gray-900">iGive</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-bold sm:text-3xl">Sign in to your account</h3>
              <p className="">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="font-medium text-red-500 hover:text-red-400">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Signing in...' : `Sign in as ${role === "hospital" ? "Hospital" : "Donor"}`}
            </Button>
          </form>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 iGive Blood Donation. All rights reserved.</p>
      </footer>
    </div>
  );
} 