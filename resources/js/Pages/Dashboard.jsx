import Heading from "@/Components/Heading";
import Wrapper from "@/Components/Wrapper";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <Wrapper>
                <Heading title="Dashboard" className="mb-6" level="h1">
                    Selamat datang di LMS ILMI.
                </Heading>
            </Wrapper>
        </AuthenticatedLayout>
    );
}
