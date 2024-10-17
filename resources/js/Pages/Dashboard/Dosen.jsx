import Heading from "@/Components/Heading";
import Stat from "@/Components/Stat";
import Wrapper from "@/Components/Wrapper";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    BookOpenText,
    Exam,
    UserCheck,
    UserMinus,
    Users,
} from "@phosphor-icons/react";

export default function Dosen({ statistics }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <Wrapper>
                <Heading title="Dashboard" className="mb-6" level="h1">
                    Selamat datang di LMS ILMI.
                </Heading>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Stat
                        icon={<Users size={25} weight="bold" />}
                        value={statistics.total_mahasiswa}
                        title="Total Mahasiswa"
                        variant="success"
                    />
                    <Stat
                        icon={<BookOpenText size={25} weight="bold" />}
                        value={statistics.jumlah_materi}
                        title="Jumlah Materi"
                        variant="warning"
                    />
                    <Stat
                        icon={<Exam size={25} weight="bold" />}
                        value={statistics.jumlah_latihan_soal}
                        title="Jumlah Latihan Soal"
                        variant="danger"
                    />
                </div>
            </Wrapper>
        </AuthenticatedLayout>
    );
}
