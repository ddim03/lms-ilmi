import Heading from "@/Components/Heading";
import Wrapper from "@/Components/Wrapper";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <AuthenticatedLayout>
            <Head title="Latihan Soal" />
            <Wrapper>
                <Heading title="Latihan Soal" className="mb-6" level="h1">
                    Halaman untuk mengelola latihan soal.
                </Heading>
            </Wrapper>
        </AuthenticatedLayout>
    );
}
