import { formOptions, useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { loginApi } from "../api/loginApi";
import { useAppContext } from "../context/AppContext";

export type LoginFormData = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z.string().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

export const Login = () => {
  const formOpts = formOptions({
    defaultValues: {
      email: "",
      password: "",
    } as LoginFormData,
  });
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      mutation.mutate(value);
      console.log(value);
    },
    validators: { onChange: loginSchema },
  });

  const { showToast } = useAppContext();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      showToast({ message: "Sign In Successful", type: "SUCCESS" });
      queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate("/");
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  return (
    <form
      className="container flex flex-col space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h1 className="text-3xl font-bold">Sign In</h1>
      <form.Field name="email">
        {(field) => (
          <label className="text-gray-700 text-sm font-bold">
            Email
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              type="email"
              value={field.state.value}
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
              onBlur={field.handleBlur}
            />
            {field.state.meta.errors.map((error) => (
              <span key={error?.message} className="text-red-500">
                {error?.message}
              </span>
            ))}
          </label>
        )}
      </form.Field>
      <form.Field name="password">
        {(field) => (
          <label className="text-gray-700 text-sm font-bold">
            Password
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              type="password"
              value={field.state.value}
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
              onBlur={field.handleBlur}
            />
            {field.state.meta.errors.map((error) => (
              <span key={error?.message} className="text-red-500">
                {error?.message}
              </span>
            ))}
          </label>
        )}
      </form.Field>

      <form.Subscribe
        selector={(formState) => [formState.canSubmit, formState.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <span className="flex items-center justify-between">
            <span className="text:sm">
              Not Registered? {" "}
              <Link
                to="/registration"
                className="underline text-gray-700 cursor-pointer hover:text-gray-600"
              >
                Create an account here?
              </Link>
            </span>
            <button
              disabled={!canSubmit || isSubmitting}
              type="submit"
              className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
            >
              {isSubmitting ? "Sigining..." : "Sign In"}
            </button>
          </span>
        )}
      </form.Subscribe>
    </form>
  );
};
