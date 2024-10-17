import { CheckCircle } from "@phosphor-icons/react";

export default function Toast({ message }) {
    return (
        <div
            className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded shadow top-20 right-5"
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded text-green-500 bg-green-100">
                <CheckCircle size={20} weight="bold" />
            </div>
            <div className="ms-3 text-sm font-normal">{message}</div>
        </div>
    );
}
