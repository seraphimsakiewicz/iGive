// 1) Basic Donor & Hospital interfaces
export interface Donor {
  id: number;
  name: string;
  email: string;
  role: 'donor';
  bloodType?: string;
}

export interface Hospital {
  id: number;
  name: string;
  email: string;
  role: 'hospital';
  address: string;
  licenseNumber: string;
}

// 2) Role type
export type Role = 'donor' | 'hospital';

// 3) Extend NextAuth’s built-in types
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    id: number;
    email: string | null | undefined;
    name: string | null | undefined;
    role: Role;
  }

  // By default, session.user extends User from above
  interface Session {
    user: User;
  }
}

// 4) Extend JWT
declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    role: Role;
    email: string | null | undefined;
    name: string | null | undefined;
  }
}
