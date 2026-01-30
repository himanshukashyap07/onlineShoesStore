import { NextResponse } from "next/server";

class ApiError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

export const handleApiError = (statusCode: number, message: string, error?: unknown) => {
    if (error instanceof ApiError) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || message,
                data: null,
            },
            { status: error.statusCode }
        );
    }

    // if it's a normal Error object
    if (error instanceof Error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || message,
                data: null,
            },
            { status: statusCode }
        );
    }

    // fallback for unexpected values
    return NextResponse.json(
        {
            success: false,
            message: message || "Internal Server Error",
            data: null,
        },
        { status: statusCode || 500 }
    );
};


export default ApiError;
