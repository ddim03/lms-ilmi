import { BookOpenUser } from "@phosphor-icons/react";

export default function ApplicationLogo(props) {
    return (
        <div className="flex gap-2 items-center text-gray-800" {...props}>
            <BookOpenUser size={32} />
            <span className="text-lg font-bold">LMS ILMI</span>
        </div>
    );
}
