import { authSchema } from "../validation/validationSchema";
import axios from "../axios.config";
import { signIn } from "../context/features/authorize/authorizeSlice";
import { getErrorMessage } from "./getApiError";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

type loginArgs = {
    method: "register" | "login",
    formData: {
        email: string;
        password: string;
    },
    resetForm: () => void;
    dispatch: Dispatch<AnyAction>;
    toast: any;
    toastMessage: string;
    navigate: NavigateFunction
}

export async function login({ method, formData, resetForm, dispatch, toast, toastMessage, navigate }: loginArgs) {
    try {
        if (method === "register") {
            const validationPassed = authSchema.safeParse(formData);
            if (!validationPassed.success) {
                alert("Email or password is not valid");
                return;
            }
        }
        const res = await axios.post(`/auth/${method}`, formData);
        const { token } = res.data;
        dispatch(signIn(token));
        toast.success(toastMessage);
        resetForm();
        navigate('/open-deals')
    } catch (err) {
        const { message } = getErrorMessage(err)
        toast.error(message);
    }
}
