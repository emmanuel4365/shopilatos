import { VscCode } from "react-icons/vsc";
import { Button } from "../ui/button";
import Link from "next/link";

function logo() {
    return (
        <Button size="icon" asChild>
            <Link href="/">
                <VscCode className="w-6 h-6" />
            </Link>
        </Button>
    );
}
export default logo;