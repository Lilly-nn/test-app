import { z } from 'zod';

export const authSchema = z
    .object({
        email: z.string().email(),
        password: z.string().min(6, 'Password must contain at least 6 characters')
    });

export type RegistrationSchemaType = z.infer<typeof authSchema>;