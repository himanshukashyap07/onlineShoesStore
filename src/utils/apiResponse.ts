import { NextResponse } from "next/server";

class ApiResponse<T> {
    data: T;
    statusCode: number;
    message: string;
    constructor(statusCode: number = 200, message: string, data: T) {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
    }

}
export const handleApiResponse = <T>(statusCode: number, message: string, data: T) => {
    const response = new ApiResponse<T>(statusCode, message, data);

    return NextResponse.json(
        {
            success: statusCode >= 200 && statusCode < 300,
            message: response.message,
            data: response.data,
        },
        { status: response.statusCode }
    );
};


export default ApiResponse;