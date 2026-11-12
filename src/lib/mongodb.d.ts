import type mongoose from "mongoose";

export default function connectDB(): Promise<typeof mongoose>;
