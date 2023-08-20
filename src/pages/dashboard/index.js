import { getAll } from "@/services/dashboard";
import Image from "next/image";
import { useRef } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard({ blogs,signin }) {
 
    const { data: session } = useSession()
    const text1Ref = useRef();
    const text2Ref = useRef();
    const onSubmit = async (title, content, author) => {
        try {
            const response = await fetch("/api/dashboard", {
                method: "POST", 
                body: JSON.stringify({ title, content, author }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                alert("The blog added to dashboard");
            }
            else {
                alert("already exist")
            }

        }
        catch (err) {
            console.error(err);
        }
    }

    const onInputSubmit = (e) => {
        const author = session.user.email;
        const placeholder = text1Ref.current.value;
        const post = text2Ref.current.value;
        e.preventDefault();
        onSubmit(placeholder, post, author);
    }


    return (
        <>
            <div className="dashBoard"><b>Dashboard</b></div>
            <form onSubmit={onInputSubmit}>
                <div className="dashParent">
                    <div className="dashInput1">
                        <input type="text" id="text" placeholder="Placeholder" ref={text1Ref} /> <br />
                    </div>
                    <div className="dashInput2">
                        <input type="text" id="text" placeholder="What is in your mind" ref={text2Ref} /> <br />
                        <button type="submit">PublishBlog</button>
                    </div>
                </div>
            </form>
            <div className="dashBlog">


                {blogs.filter((item) => item.author === session?.user?.email).map((blog) => (
  
                    <div className="blog1" key={blog.id} >
                        <Image className="img1" src={"/licensed-image.jpeg"} width={55} height={52} />
                        <div className="blogHeading1">
                            <h3>{blog.title}</h3>
                            <p> {blog.author} - August 16th, 2023</p>
                        </div>
                        <div className="blogPara1">
                            <p>{blog.content}</p>
                        </div>


                    </div>
                ))}
            </div>
        </>
    )


}


export async function getStaticProps() {
    const data = getAll();
    console.log(data);
    return {
        props: {
            blogs: data
        }
    };

}



// import { getAll } from "@/services/dashboard";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import { useSession } from "next-auth/react";

// export default function Dashboard({ initialDashboard }) {
//   const { data: session } = useSession();
//   const text1Ref = useRef();
//   const text2Ref = useRef();
//   const [dashboard, setDashboard] = useState(initialDashboard); // Initialize the state

//   const onSubmit = async (title, content, author) => {
//     try {
//       const response = await fetch("/api/dashboard", {
//         method: "POST",
//         body: JSON.stringify({ title, content, author }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (response.ok) {
//         // If the blog is added successfully, update the state with the new data
//         const newBlog = { title, content, author };
//         setDashboard([...dashboard, newBlog]);
//         alert("The blog added to dashboard");
//       } else {
//         alert("Already exists");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const onInputSubmit = (e) => {
//     const author = session.user.email;
//     const placeholder = text1Ref.current.value;
//     const post = text2Ref.current.value;
//     e.preventDefault();
//     onSubmit(placeholder, post, author);
//   };

//   return (
//     <>
//       <div className="dashBoard">
//         <b>Dashboard</b>
//       </div>
//       <form onSubmit={onInputSubmit}>
//         <div className="dashParent">
//           <div className="dashInput1">
//             <input
//               type="text"
//               id="text"
//               placeholder="Placeholder"
//               ref={text1Ref}
//             />{" "}
//             <br />
//           </div>
//           <div className="dashInput2">
//             <input
//               type="text"
//               id="text"
//               placeholder="What is in your mind"
//               ref={text2Ref}
//             />{" "}
//             <br />
//             <button type="submit">Publish Blog</button>
//           </div>
//         </div>
//       </form>
//       <div className="dashBlog">
//         {dashboard
//           .filter((item) => item.author === session?.user?.email)
//           .map((blog, index) => (
//             <div className="blog1" key={index}>
//               <Image className="img1" src={"/licensed-image.jpeg"} width={55} height={52} />
//               <div className="blogHeading1">
//                 <h3>{blog.title}</h3>
//                 <p> {blog.author} - August 16th, 2023</p>
//               </div>
//               <div className="blogPara1">
//                 <p>{blog.content}</p>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const data = getAll();
//   console.log(data);
//   return {
//     props: {
//       initialDashboard: data,
//     },
//   };
// }
