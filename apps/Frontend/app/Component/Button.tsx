// import { ReactElement } from "react";

// interface ButtonTypes {
//     text: string;
//     variant: "dark" | "bordered";
//     className?: string;
//     onClick?: () => void;
//     startIcon: ReactElement;
//     defaultStyles:string;
// }

// const variantStyles = {
//     "dark": "bg-[#1a1a1a] text-white",
//    "bordered": "border-2 border-[#1a1a1a] bg-transparent"
// }
// const defaultStyles = "flex items-center gap-2 p-8 rounded-lg text-[14px] font-semibold cursor-pointer"

// export default function Button(props: ButtonTypes) {
//     return <button className={`${defaultStyles} ${variantStyles[props.variant]} ${props.className}`}>
//            {props.startIcon}  
//             <span> {props.text} </span>
         
//     </button>

// }
"use client"
import {LinkIcon,PlusIcon} from "./Icons"

export function LightBtn({onClick}:{onClick:()=>any})
{
    return <button 
    onClick={onClick} 
    style={{
                display: "flex", alignItems: "center", gap: 7,
                border: "2px solid #1a1a1a", background: "transparent",
                padding: "8px 18px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                cursor: "pointer", transition: "transform 0.15s, background 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#f0ece4"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <LinkIcon /> Join room
              </button>
}

export function DarkBtn({onClick}:{onClick:()=>any})
{
    return <button
     onClick={onClick} 
     style={{
                display: "flex", alignItems: "center", gap: 7,
                background: "#1a1a1a", color: "white",
                padding: "9px 18px", borderRadius: 8, fontSize: 14, fontWeight: 600,
                border: "none", cursor: "pointer", transition: "transform 0.15s, background 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#333"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <PlusIcon /> Create room
              </button>
}