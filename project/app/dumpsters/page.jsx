import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
    return (
        <div className="h-[80%]">
            <div className="h-[50%] flex items-center justify-center">
                <Link href={"/dumpsters/degradable"}>
                    <Button className="scale-125" size="lg">
                        Bio-degradable <ArrowRight className="ms-1 scale-75" />
                    </Button>
                </Link>
            </div>
            <Separator />
            <div className="h-[50%] flex items-center justify-center">
                <Link href={"/dumpsters/nondegradable"}>
                    <Button
                        variant="destructive"
                        className="scale-125"
                        size="lg"
                    >
                        Non Bio-degradable{" "}
                        <ArrowRight className="ms-1 scale-75" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default page;
