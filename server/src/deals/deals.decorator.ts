import { applyDecorators } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Deal } from "./deals.model";

export function DealPostDecorator() {
    return applyDecorators(
        ApiOperation({ summary: "Post a deal" }),
        ApiBearerAuth('Authorization'),
        ApiResponse({ status: 200, type: Deal }),
        ApiResponse({ status: 401, description: "User is not authorized" })
    );
}

export function DealsGetDecorator() {
    return applyDecorators(
        ApiOperation({ summary: "Get all deals" }),
        ApiBearerAuth('Authorization'),
        ApiResponse({ status: 200, type: [Deal] }),
        ApiResponse({ status: 401, description: "User is not authorized" })
    );
}