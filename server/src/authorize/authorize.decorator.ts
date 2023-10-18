import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function RegisterDecorator() {
    return applyDecorators(
        ApiOperation({ summary: "register a user" }),
        ApiResponse({ status: 200, description: "Successfully registered" }),
        ApiResponse({ status: 400, description: "User with such email already exists" }),
        ApiResponse({ status: 500, description: "Server error" })
    );
}

export function LoginDecorator() {
    return applyDecorators(
        ApiOperation({ summary: "log in a user" }),
        ApiResponse({ status: 200, description: "Logged in", type: "token" }),
        ApiResponse({ status: 401, description: "Invalid credentials" }),
        ApiResponse({ status: 500, description: "Server error" })
    );
}