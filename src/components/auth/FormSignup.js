import { useRef } from "react"

export default function FormSignup({ onFormSubmit }) {
    const firstnRef = useRef();
    const lastnRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repasswordRef = useRef();

    const onSubmitHandler = (e) => {
        const firstN = firstnRef.current.value;
        const lastN = lastnRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rePassword = repasswordRef.current.value;
     
        if (firstN.length < 3) {
           alert("First name should be at least 3 characters long");
          e.preventDefault();
          return
          }
          else if (firstN.length > 20) {
            alert("First name should not exceed 20 characters")
            e.preventDefault();  
 return; 
        }
          if (lastN.length < 1) {
              alert("Last name should be at least 3 characters long");
            e.preventDefault();
            return;
   
        }
            else if (lastN.length > 20) {
              alert("Last name should not exceed 20 characters")
              e.preventDefault();
              return;

            }
        


        e.preventDefault();
        onFormSubmit(email, password, firstN, lastN, rePassword);

    }



    return (
        <>
            <div className="formParent">

                <div>
                    <form onSubmit={onSubmitHandler}>

                        <div>
                            <div>
                                <input type="text" name="firstn" id="firstn" ref={firstnRef} required />
                            </div>
                            <br />
                            <div>
                                <input type="text" name="lastn" id="lastn" ref={lastnRef} required />
                            </div>
                            <br />
                            <div>
                                <input type="email" name="email" id="email" ref={emailRef} required />
                            </div>
                            <br />
                            <div>
                                <input type="password" name="password" id="password" ref={passwordRef} required />
                            </div>
                            <br />
                            <div>
                                <input type="password" name="repassword" id="repassword" ref={repasswordRef} required />
                            </div>
                            <br />
                        </div>
                        <div>
                            <button type="submit">Signup</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}