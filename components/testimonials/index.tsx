
import {CardFlow} from "./CardFlow"
type datatype = {
    name: string,
    contact:string,
    description:string,
    avatar: string
  }
  
const data: datatype[] = [
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        }
];

export default function Testimonial() {    
    return (
        <div ><CardFlow data={data}/></div>
    )
}
