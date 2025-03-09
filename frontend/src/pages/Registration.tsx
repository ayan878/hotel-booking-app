import { useForm } from "react-hook-form";

export type RegisiterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const Registration = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisiterFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-3xl font-bold">Create an Account</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "First Name is required" })}
            type="text"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            {...register("lastName", { required: "Last Name is required" })}
            className="border rounded w-full py-1 px-2 font-normal"
            type="text"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold ">
        Email
        <input
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Enter your email"
          className="border rounded w-full py-1 px-2 font-normal"
          type="email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold ">
        Password
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at atleast 6 characters long",
            },
          })}
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold ">
        Confirm Password
        <input
          {...register("confirmPassword", {
            required: "Password is required",
            validate: (value) => {
              if (!value) return "Password is required";
              else if (watch("password") !== value)
                return "Your Password do not match";
            },
          })}
          className="border rounded w-full py-1 px-2 font-normal"
          type="password"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};
export default Registration;
