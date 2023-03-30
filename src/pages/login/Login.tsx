import { setIsAuthenticated } from "@/app/authSlice";
import { useAppDispatch } from "@/app/store";

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsAuthenticated(true));
  };

  return (
    <div className="flex flex-col p-8 items-center justify-center min-h-screen">
      <form className="flex flex-col gap-4 max-w-[400px] w-full" onSubmit={handleLogin}>
        <h1 className="text-3xl font-bold text-gray-900 text-left w-full">Login</h1>
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="input input-bordered w-full max-w-xs"
            required
            autoComplete="current-password"
          />
        </div>
        <button className="btn btn-primary w-fit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
