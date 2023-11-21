import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
interface carditem{
    name: string,
    contact:string,
    description:string,
    avatar: string
  }
  interface Props {
      data:carditem[];
  }

export const CardFlow : React.FC < Props > =  ({data})=> {    
    return (
        <div>
            {data.map((item, index)=>(
            <Card className="max-w-[340px]  p-8" key={index}>
                <CardBody className="px-3 py-0 text-xl text-gray-900">
                <p>
                  {item.description}
                </p>                
              </CardBody>
              <CardHeader className="justify-between mt-8">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-gray-1000"> {item.name}</h4>
                    <h5 className="text-small tracking-tight text-gray-600"> {item.contact}</h5>
                  </div>
                </div>                
              </CardHeader>             
            </Card>            
            ))}
        </div>
        
    )
}
