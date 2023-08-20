import Link from "next/link";
import { useRef } from "react";

export default function FormLogin({onFormSubmit}) {

    
    const emailRef =  useRef();
     const passwordRef =  useRef();

    
  
    const onSubmitHandler = (e) => {
 
  const email =  emailRef.current.value;
  const password = passwordRef.current.value;
  e.preventDefault();
  onFormSubmit(email, password);
  
    }
  



    return (
        <>
        <div className="loginForm">
        <div>
            <form onSubmit={onSubmitHandler}>
<div>
    <div>
    <input type="email" name="email" id="email" ref={emailRef} required/>
    </div> <br />
</div>
<div>
    <div>
    <input type="password" name="password" id="password" ref={passwordRef} />
    </div> 
</div> <br />
<div>
    <button type="submit">Login</button>
</div>
<div>
<Link href={"/auth/SignUp"}>"Dont have an account? SignUp"</Link>
</div>


            </form>
        </div>
        </div>
        
        </>
    )
}