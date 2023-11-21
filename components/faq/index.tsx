"use client"

import {Viralfaq} from "../common/Viralfaq"
type faqtype = {
    query: string;
    answer: string;
  }
  
const faqdata: faqtype[] = [
{
    query: "What is Viralyst?",
    answer: "Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand  "
},
{
    query: "How does viralyst work?",
    answer: "Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand  "
},
{
    query: "Is viralyst available worldwide?",
    answer: "Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand  "
},
{
    query: "How do i get started?",
    answer: "Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand  "
}
];
  
export default function Faq() {   
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

       return (
        <div className="mx-auto text-white w-[1180px] h-fit mb-[50px]">
            <div className="flex flex-col">
                <div className="h-[200px] text-5xl flex justify-center items-center">Frequently asked questions</div>
                <div className=" pt-4 pl-4 mx-36 flex flex-col"> 
                 <Viralfaq data={faqdata}/>
                                   
                </div>
            </div>
        </div>
    )
}
