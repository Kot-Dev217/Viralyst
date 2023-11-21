
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
            description: "1Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "2Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "3Release facebook responsive web design business model canvas seed money monetization.",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "4Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "5Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "6Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        },
        {
            name: "Albus Dumbledore",
            contact:"Manager @ Howarts",
            description: "7Buyer buzz partner network disruptive non-disclosure agreement business",
            avatar: ""
        }
];

export default function Testimonial() {    
    return (
        <div ><CardFlow data={data}/></div>
    )
}
