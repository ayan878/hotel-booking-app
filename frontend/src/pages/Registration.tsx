// import { useForm } from "react-hook-form";

// export type RegisiterFormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };
// const Registration = () => {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<RegisiterFormData>();

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//   });
//   return (
//     <form className="flex flex-col gap-5" onSubmit={onSubmit}>
//       <h1 className="text-3xl font-bold">Create an Account</h1>
//       <div className="flex flex-col md:flex-row gap-5">
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           First Name
//           <input
//             className="border rounded w-full py-1 px-2 font-normal"
//             {...register("firstName", { required: "First Name is required" })}
//             type="text"
//           />
//           {errors.firstName && (
//             <span className="text-red-500">{errors.firstName.message}</span>
//           )}
//         </label>
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           Last Name
//           <input
//             {...register("lastName", { required: "Last Name is required" })}
//             className="border rounded w-full py-1 px-2 font-normal"
//             type="text"
//           />
//           {errors.lastName && (
//             <span className="text-red-500">{errors.lastName.message}</span>
//           )}
//         </label>
//       </div>
//       <label className="text-gray-700 text-sm font-bold ">
//         Email
//         <input
//           {...register("email", {
//             required: "Email is required",
//           })}
//           placeholder="Enter your email"
//           className="border rounded w-full py-1 px-2 font-normal"
//           type="email"
//         />
//         {errors.email && (
//           <span className="text-red-500">{errors.email.message}</span>
//         )}
//       </label>
//       <label className="text-gray-700 text-sm font-bold ">
//         Password
//         <input
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at atleast 6 characters long",
//             },
//           })}
//           className="border rounded w-full py-1 px-2 font-normal"
//           type="password"
//         />
//         {errors.password && (
//           <span className="text-red-500">{errors.password.message}</span>
//         )}
//       </label>
//       <label className="text-gray-700 text-sm font-bold ">
//         Confirm Password
//         <input
//           {...register("confirmPassword", {
//             required: "Password is required",
//             validate: (value) => {
//               if (!value) return "Password is required";
//               else if (watch("password") !== value)
//                 return "Your Password do not match";
//             },
//           })}
//           className="border rounded w-full py-1 px-2 font-normal"
//           type="password"
//         />
//         {errors.confirmPassword && (
//           <span className="text-red-500">{errors.confirmPassword.message}</span>
//         )}
//       </label>
//       <span>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
//         >
//           Create Account
//         </button>
//       </span>
//     </form>
//   );
// };
// export default Registration;// import { useForm } from "react-hook-form";

// export type RegisiterFormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };
// const Registration = () => {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<RegisiterFormData>();

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//   });
//   return (
//     <form className="flex flex-col gap-5" onSubmit={onSubmit}>
//       <h1 className="text-3xl font-bold">Create an Account</h1>
//       <div className="flex flex-col md:flex-row gap-5">
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           First Name
//           <input
//             className="border rounded w-full py-1 px-2 font-normal"
//             {...register("firstName", { required: "First Name is required" })}
//             type="text"
//           />
//           {errors.firstName && (
//             <span className="text-red-500">{errors.firstName.message}</span>
//           )}
//         </label>
//         <label className="text-gray-700 text-sm font-bold flex-1">
//           Last Name
//           <input
//             {...register("lastName", { required: "Last Name is required" })}
//             className="border rounded w-full py-1 px-2 font-normal"
//             type="text"
//           />
//           {errors.lastName && (
//             <span className="text-red-500">{errors.lastName.message}</span>
//           )}
//         </label>
//       </div>
//       <label className="text-gray-700 text-sm font-bold ">
//         Email
//         <input
//           {...register("email", {
//             required: "Email is required",
//           })}
//           placeholder="Enter your email"
//           className="border rounded w-full py-1 px-2 font-normal"
//           type="email"
//         />
//         {errors.email && (
//           <span className="text-red-500">{errors.email.message}</span>
//         )}
//       </label>
//       <label className="text-gray-700 text-sm font-bold ">
//         Password
//         <input
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at atleast 6 characters long",
//             },
//           })}
//           className="border rounded w-full py-1 px-2 font-normal"
//           type="password"
//         />
//         {errors.password && (
//           <span className="text-red-500">{errors.password.message}</span>
//         )}
//       </label>
//       <label className="text-gray-700 text-sm font-bold ">
//         Confirm Password
//         <input
//           {...register("confirmPassword", {
//             required: "Password is required",
//             validate: (value) => {
//               if (!value) return "Password is required";
//               else if (watch("password") !== value)
//                 return "Your Password do not match";
//             },
//           })}
//           className="border rounded w-full py-1 px-2 font-normal"
//           type="password"
//         />
//         {errors.confirmPassword && (
//           <span className="text-red-500">{errors.confirmPassword.message}</span>
//         )}
//       </label>
//       <span>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
//         >
//           Create Account
//         </button>
//       </span>
//     </form>
//   );
// };
// export default Registration;

// import { formOptions, useForm } from "@tanstack/react-form";
// import { z } from "zod";

// // Define the form data type
// export type RegisterFormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

// const Registration = () => {
//   // Define form options with default values
//   const formOpts = formOptions({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     } as RegisterFormData,
//   });

//   // Initialize the form
//   const form = useForm({
//     ...formOpts,
//     onSubmit: async ({ value }) => {
//       // Do something with form data
//       console.log(value);
//     },
//     validators: {
//       onChange: z.object({
//         firstName: z
//           .string()
//           .min(3, "First name must be at least 3 characters long"),
//         lastName: z
//           .string()
//           .min(3, "Last name must be at least 3 characters long"),
//         email:z.string().email("Invalid email format")
//       }),
//     },
//   });

//   return (
//     <form
//       className="flex flex-col gap-5"
//       onSubmit={(e) => {
//         e.preventDefault();
//         form.handleSubmit();
//       }}
//     >
//       <h1 className="text-3xl font-bold">Create an Account</h1>

//       <div className="flex flex-col md:flex-row gap-5">
//         {/* First Name Field */}
//         <form.Field
//           name="firstName"
//           validators={{
//             onChange: ({ value }) =>
//               value.length < 3
//                 ? "First name must be at least 3 characters long"
//                 : "",
//           }}
//           children={(field) => (
//             <label className="text-gray-700 text-sm font-bold flex-1">
//               First Name
//               <input
//                 className="border rounded w-full py-1 px-2 font-normal"
//                 type="text"
//                 value={field.state.value}
//                 onChange={(e) => field.handleChange(e.target.value)}
//                 onBlur={field.handleBlur}
//               />
//               {field.state.meta.errors && (
//                 <span className="text-red-500">{field.state.meta.errors}</span>
//               )}
//             </label>
//           )}
//         />

//         {/* Last Name Field */}
//         <form.Field
//           name="lastName"
//           validators={{
//             onChange: ({ value }) =>
//               value.length < 3
//                 ? "Last name must be at least 3 characters long"
//                 : "",
//           }}
//           children={(field) => (
//             <label className="text-gray-700 text-sm font-bold flex-1">
//               Last Name
//               <input
//                 className="border rounded w-full py-1 px-2 font-normal"
//                 type="text"
//                 value={field.state.value}
//                 onChange={(e) => field.handleChange(e.target.value)}
//                 onBlur={field.handleBlur}
//               />
//               {field.state.meta.errors && (
//                 <span className="text-red-500">{field.state.meta.errors}</span>
//               )}
//             </label>
//           )}
//         />
//       </div>

//       {/* Email Field */}
//       <form.Field
//         name="email"
//         children={(field) => (
//           <label className="text-gray-700 text-sm font-bold">
//             Email
//             <input
//               className="border rounded w-full py-1 px-2 font-normal"
//               type="email"
//               value={field.state.value}
//               onChange={(e) => field.handleChange(e.target.value)}
//               onBlur={field.handleBlur}
//             />
//             {field.state.meta.errors && (
//               <span className="text-red-500">{field.state.meta.errors}</span>
//             )}
//           </label>
//         )}
//       />

//       {/* Password Field */}
//       <form.Field
//         name="password"
//         children={(field) => (
//           <label className="text-gray-700 text-sm font-bold">
//             Password
//             <input
//               className="border rounded w-full py-1 px-2 font-normal"
//               type="password"
//               value={field.state.value}
//               onChange={(e) => field.handleChange(e.target.value)}
//               onBlur={field.handleBlur}
//             />
//           </label>
//         )}
//       />

//       {/* Confirm Password Field */}
//       <form.Field
//         name="confirmPassword"
//         children={(field) => (
//           <label className="text-gray-700 text-sm font-bold">
//             Confirm Password
//             <input
//               className="border rounded w-full py-1 px-2 font-normal"
//               type="password"
//               value={field.state.value}
//               onChange={(e) => field.handleChange(e.target.value)}
//               onBlur={field.handleBlur}
//             />
//           </label>
//         )}
//       />

//       {/* Submit Button */}
//       <span>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
//         >
//           Create Account
//         </button>
//       </span>
//     </form>
//   );
// };

// export default Registration;

import { formOptions, useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { register } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// Define the form data type
export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// Zod validation schema for form fields
const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(3, "First name must be at least 3 characters long"),
    lastName: z.string().min(3, "Last name must be at least 3 characters long"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Registration = () => {
  const { showToast } = useAppContext();

  // Define form options with default values and Zod validation
  const formOpts = formOptions({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as RegisterFormData,
  });

  // Initialize the form
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      // Trigger mutation to submit the data to the backend
      mutation.mutate(value); // Pass the form data to the mutation
    },
    validators: { onChange: registerFormSchema },
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Use the mutation hook for user registration
  const mutation = useMutation({
    mutationFn: register, // Call the register function
    onSuccess: () => {
      showToast({ message: "Registration Success", type: "SUCCESS" });
      // After successful registration, you can invalidate queries or redirect
      queryClient.invalidateQueries(["user"]);
      navigate("/registration-success");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h1 className="text-3xl font-bold">Create an Account</h1>

      <div className="flex flex-col md:flex-row gap-5">
        {/* First Name Field */}
        <form.Field name="firstName">
          {(field) => (
            <label className="text-gray-700 text-sm font-bold flex-1">
              First Name
              <input
                className="border rounded w-full py-1 px-2 font-normal"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
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

        {/* Last Name Field */}
        <form.Field name="lastName">
          {(field) => (
            <label className="text-gray-700 text-sm font-bold flex-1">
              Last Name
              <input
                className="border rounded w-full py-1 px-2 font-normal"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
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
      </div>

      {/* Email Field */}
      <form.Field name="email">
        {(field) => (
          <label className="text-gray-700 text-sm font-bold">
            Email
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
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

      {/* Password Field */}
      <form.Field name="password">
        {(field) => (
          <label className="text-gray-700 text-sm font-bold">
            Password
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              type="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
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

      {/* Confirm Password Field */}
      <form.Field name="confirmPassword">
        {(field) => (
          <label className="text-gray-700 text-sm font-bold">
            Confirm Password
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              type="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
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

      {/* Submit Button */}
      <form.Subscribe
        selector={(formState) => [formState.canSubmit, formState.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <span>
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Create Account"}
            </button>
          </span>
        )}
      </form.Subscribe>
    </form>
  );
};

export default Registration;
