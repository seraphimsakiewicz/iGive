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

// Add NextAuth types
import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    role: 'donor' | 'hospital';
  }

  interface Session {
    user: User & {
      role: 'donor' | 'hospital';
    };
  }
} 