import 'next-auth';
import { DefaultSession } from 'next-auth';
declare module 'next-auth' {
    interface User {
        _id?: string;
        fullName?: string;
        mobileNumber?: string;
        role?: string;
        email?: string;
        accountStatus?: string;
    }
    interface Session {
        user: {
            _id?: string;
            fullName?: string;
            mobileNumber?: string;
            role?: string;
            email?: string;
            accountStatus?: string;
        } & DefaultSession['user']
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        _id: string;
        email: string;
        accountStatus: string;
        fullName: string;
        mobileNumber: string;
        role: string;
    }
}