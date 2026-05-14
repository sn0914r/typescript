import z from "zod";

export const schema = z.object({
  username: z.string().min(3, "Username must be atleast 3 characters"),
  password: z
    .string()
    .min(6, "Password should contain atleast 6 Characters")
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Password should contains alphabets and numbers",
    }),
});
