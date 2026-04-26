// "use client"

import axios from "axios";
import { HTTP_URL } from "@repo/backend-common/config";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Signup = {
    email: string;
    name: string;
    password: string
}
type Signin = {
    email: string;
    password: string
}


type Props = { FormName: "signin"; userDetails: Signin;router:AppRouterInstance } | { FormName: "signup"; userDetails: Signup;router:AppRouterInstance };


export async function handleSubmit({ FormName, userDetails,router }: Props) {


    if (FormName === "signin") {
        const data: Signin = userDetails;
        console.log(HTTP_URL);
       const res =  await axios.post(`${HTTP_URL}/signin`, userDetails);
       console.log("token=>"+res.data.token);
       localStorage.setItem("token", res.data.token);
       
       if(res.status === 200)
        {
          router.push("/dashboard");
        }
    }
    if (FormName === "signup") {
        const data: Signup = userDetails;
      const res =   await axios.post(`${HTTP_URL}/signup`, userDetails);
      if(res.status === 200)
      {
        router.push("/signin");
      }
    //   console.log(res.status);
    //   console.log(res.data);
    }
}