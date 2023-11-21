"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
  
export default function Faq() {   
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

       return (
        <div className="mx-auto text-white border-2 border-red-500 w-[1180px] h-[824px]">
            <div className="flex flex-col">
                <div className="h-[200px] text-5xl border-2 border-red-500 flex justify-center items-center">Frequently asked questions</div>
                <div className="border-2 border-red-500 pt-4 pl-4 mx-36 flex flex-col"> 
                    <Accordion>
                        <AccordionItem key="1" aria-label="What is Viralyst?"  title="What is Viralyst?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="How does viralyst work?" title="How does viralyst work?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Is viralyst available worldwide?" title="Is viralyst available worldwide?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="How do i get started?" title="How do i get started?">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>                    
                </div>
            </div>
        </div>
    )
}
