import mongoose from 'mongoose'


type ConnectionObject={
    isConnected?:number
}

const connection:ConnectionObject = {}

export async function dbConnect():Promise<void> {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connection.readyState === 1) {
        return;
    }
    
    if (mongoose.connection.readyState === 2) {
        return;
    }
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("Environment variables are not set properly")
        }
        const db = await mongoose.connect(process.env.MONGODB_URI! || "")
        connection.isConnected = db.connections[0].readyState;
        console.log("db connect successfully");
        
        
    } catch (error) {
        console.error('dbConnect error:', error);
        throw error;
    } 
}