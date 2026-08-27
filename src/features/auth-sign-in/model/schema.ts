import { userSchema } from 'better-auth';
import { z } from 'zod';

export const signInSchema = userSchema.pick({ email: true }).extend({
  email: z.email('Введите корректный адрес электронной почты').toLowerCase(),
  password: z
    .string()
    .min(8, 'Минимум 8 символов')
    .max(128, 'Не более 128 символов'),
});

export type SignInValues = z.infer<typeof signInSchema>;
