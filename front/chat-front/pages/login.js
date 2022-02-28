import { useForm } from 'react-hook-form';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();



  const onLogin = async (values) => {
    console.log(values)

  }
  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center ">
      <div className="bg-white flex rounded-lg">
        <div className="flex-1">
          <img className="bg-cover bg-center w-full h-full rounded-lg" src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-around p-6  ">
          <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-blue-800 to-yellow-300">
            ChatApp
          </p>
          <form className="flex flex-col gap-7 w-full items-center" onSubmit={handleSubmit(onLogin)}> 
            <div className="w-3/4 ">
              <p className="text-1xl font-medium"> user</p>
              <p className="text-1xl font-medium text-red-300 "> {errors?.user?.message}</p>

              <input
                {...register("user", {required: "user required"})}
                type="email"
                placeholder="some@gmail.com"
                className={`mt-1 text-1xl w-full border-b-2 ${errors.user ? "border-red-500 " : "border-b-gray-300"} appearance-none focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600`} />
            </div>


            <div className="w-3/4 ">
              <p className="text-1xl font-medium"> Password</p>
              <p className="text-1xl font-medium text-red-300 "> {errors?.password?.message}</p>

              <input
                {...register("password", {required: "Password required"})}
                type="password"
                placeholder="******"
                className={`mt-1 text-1xl w-full border-b-2 ${errors.password ? "border-red-500 " : "border-b-gray-300"} appearance-none focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600`} />
            </div>
            <div className="flex justify-around flex-col items-center gap-3 w-full">
              <button type='submit'  className="p-2 rounded-xl bg-yellow-300 text-lg w-2/4 ">
                Login
              </button>
              <div className='flex w-full items-center justify-center gap-3'>
                <div className='w-1/3 border-b-2 border-gray-300' />
                <p className='font-extralight'>or</p>
                <div className='w-1/3 border-b-2 border-gray-300' />

              </div>
              <button className="p-3  rounded-xl bg-blue-500  text-white text-sm ">
                Create new account
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}

export default Login;