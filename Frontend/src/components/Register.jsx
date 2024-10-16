import { useForm } from "react-hook-form"
import axios from 'axios'

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
      confirmpassword:data.confirmpassword
    }
    await axios.post("http://localhost:5000/user/register", userInfo).then((res) => {
      console.log(res.data);
      if(res.data){
        alert("Registered Successfully.")
      }
    }).catch((err)=>{
      console.log(err);
      alert("Error: "+ err);
    })
  };

  return (
    <>
      <div
        className="mt-20 h-[100vh] flex justify-center items-center bg-cover left-0 right-0"
        style={{ background: "url('../../public/BG-img.jpg')" }}
      >
        <div className="bg-violet-100 border-violet-600 border-2 rounded-md px-6 py-12 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-50 relative">
          <h1 className="font-bold text-violet-500 text-center text-4xl top-0 underline mb-4">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="relative my-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="block placeholder:text-black w-72 py-2 px-0 bg-transparent border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 peer"
                {...register("email", { required: true, unique: true})}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="my-2">
              <input
                type="password"
                placeholder="Enter your password"
                className="block placeholder:text-black w-72 py-2 px-0 bg-transparent border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 peer"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm your password"
                className="block placeholder:text-black w-72 py-2 px-0 bg-transparent border-b-2 border-0 border-violet-400 focus:outline-none focus:border-violet-700 peer"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
          </form>
          <div className="text-center mt-7 bg-violet-400 p-2 font-bold rounded-lg cursor-pointer duration-200 hover:bg-violet-500">
            <button type="submit">Register</button>
          </div>
          <div className="mt-2">
              <a href="/Login">
                Already a member?{" "}
                <span className="text-violet-500 underline font-bold">
                  Login
                </span>{" "}
              </a>
            </div>
        </div>
      </div>
    </>
  );
};
export default Register;