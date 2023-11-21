import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";

interface carditem{
  query:string;answer:string;
}
interface Props {
    data:carditem[];
}

export const Card : React.FC < Props > = ({data}) => {
    return (
            {data.map((item)=>(              
              <Card className="max-w-[340px]">
                <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                  Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                </p>
                <span className="pt-2">
                  #FrontendWithZoey 
                  <span className="py-2" aria-label="computer" role="img">
                    💻
                  </span>
                </span>
              </CardBody>
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                    <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                  </div>
                </div>
                
              </CardHeader>
              
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">4</p>
                  <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">97.1K</p>
                  <p className="text-default-400 text-small">Followers</p>
                </div>
              </CardFooter>
            </Card>
            ))}       
    )
}