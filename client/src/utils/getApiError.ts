import { AxiosError } from "axios";

export function getErrorMessage(error: unknown) {
    let message;
    let status;
    if (error instanceof AxiosError) {
        message = (error.response && error.response.data.message) || error.message;
        status = (error.response && error.response.status) || error.status
    } else if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error && typeof error.message !== "object") {
        message = error.message;
    }
    else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong"
    }

    return { message, status };
}