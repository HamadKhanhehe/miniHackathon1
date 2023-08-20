import FormSignup from "@/components/auth/FormSignup";

export default function Signup() {

    const onSubmit = async (email, password) => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                alert("YOU ARE SUCCESSFULLY SIGNED UP");
            }
            else {
                alert("already exist")
            }

        }
        catch (err) {
            console.error(err);
        }
    }

    


    return(
         <>
     <div className="signupHeader"><b>Signup</b></div> 
        <FormSignup signin={false} onFormSubmit={onSubmit}/>
        
        </>
        
        
        )
    }