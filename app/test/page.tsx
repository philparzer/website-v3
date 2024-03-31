import RiveAnimation from "@/components/rive-animation";

interface PageProps {

}

const Page = ({}: PageProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border">
            <RiveAnimation />
            </div>
        </div>
    );
}

export default Page;