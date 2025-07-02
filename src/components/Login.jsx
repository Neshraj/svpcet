import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  return (
    <>
      <div className="font-mono box-border">
        {/* <!-- Head Tag --> */}
        <div className="container mx-auto shadow-sm flex flex-row justify-center py-2">
          <img className="" src="/assets/tag.png" alt="svpcet lable" />
        </div>

        {/* <!-- Tittle --> */}
        <div className="container mx-auto mt-5 text-2xl">
          <p className="text-blue-300 text-center font-mono font-thin antialiased text-shadow-md">
            Welcome to SVPCET
          </p>
        </div>

        {/* <!-- Container --> */}
        <div className="container mx-auto flex flex-col justify-center items-center md:flex-row">
          {/* <!-- Logo --> */}
          <div className="w-1/2">
            <img
              className="mx-auto md:h-100"
              src="/assets/animations/an2.gif"
              alt="svpcet background logo"
            />
          </div>

          {/* <!-- Login Form --> */}
          <div className="container mx-auto w-1/2">
            <form className="flex flex-col justify-center items-center gap-3">
              <input
                className="w-80 bg-blue-50 mt-2 pl-2 py-3 outline-0 rounded-lg shadow-sm"
                type="text"
                placeholder="User Id"
              />
              <input
                className="w-80 bg-blue-50 mt-2 pl-2 py-3 outline-0 rounded-lg shadow-sm"
                type="password"
                placeholder="password"
              />
              <a className="underline mr-45 font-light text-sm cursor-pointer">
                ForgotPassword
              </a>
              <button type='button' className="w-80 bg-blue-400 mt-2 py-2 rounded-lg text-white shadow-md cursor-pointer" onClick={()=>navigate('/studentdashboard')}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;