import Heading from "@/Components/Heading";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SearchInput from "@/Components/SearchInput";
import Wrapper from "@/Components/Wrapper";
import { useDebounce } from "@/Hooks/useDebounce";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Table from "@/Components/Table";
import { calculateTableStartNumber } from "@/Utils/calculateTableStartNumber";
import SecondaryButton from "@/Components/SecondaryButton";
import { PencilSimple, Trash } from "@phosphor-icons/react";
import Toast from "@/Components/Toast";
import FormModal from "./FormModal";
import DeleteModal from "./DeleteModal";

export default function Index({ mahasiswa, queryParams, success }) {
    const [searchParams, setSearchParams] = useState(queryParams?.q || "");
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowToast, setIsShowToast] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [dataToDelete, setDataToDelete] = useState(null);
    const debouncedSearchParams = useDebounce(searchParams, 800);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (debouncedSearchParams !== queryParams?.q) {
            setIsLoading(true);
            router.get(
                route("mahasiswa.index"),
                { q: debouncedSearchParams },
                {
                    preserveState: true,
                    preserveScroll: true,
                    only: ["mahasiswa"],
                    onFinish: () => setIsLoading(false),
                }
            );
        }
    }, [debouncedSearchParams, queryParams?.q]);

    const startNumber = calculateTableStartNumber(
        mahasiswa.meta.current_page,
        mahasiswa.meta.per_page
    );

    const handleAdd = () => {
        setDataToEdit(null);
        setIsShowModal(true);
    };

    const handleEdit = (item) => {
        setIsShowModal(true);
        setDataToEdit(item);
    };

    const handleDelete = (item) => {
        setIsShowDeleteModal(true);
        setDataToDelete(item);
    };

    const handleSuccess = () => {
        setIsShowToast(true);
        let timeout = setTimeout(() => {
            setIsShowToast(false);
        }, 2000);
        return () => clearTimeout(timeout);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Mahasiswa" />
            <Wrapper>
                <Heading title="Mahasiswa" className="mb-6" level="h1">
                    Halaman untuk mengelola data mahasiswa.
                </Heading>
                <div className="mt-4">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-2 mb-4">
                        <SearchInput
                            className="w-full lg:w-2/5 !rounded"
                            onChange={(e) => setSearchParams(e.target.value)}
                            value={searchParams}
                            isLoading={isLoading}
                            placeholder="Cari mahasiswa..."
                        />
                        <PrimaryButton
                            className="justify-center py-3 lg:py-0"
                            onClick={handleAdd}
                        >
                            Tambah Mahasiswa
                        </PrimaryButton>
                    </div>
                    <Table header={["no", "nama", "email", "alamat", "aksi"]}>
                        {mahasiswa.data.map((item, index) => {
                            return (
                                <Table.Tr key={index}>
                                    <Table.Td item={startNumber + index} />
                                    <Table.Td item={item.name} />
                                    <Table.Td item={item.email} />
                                    <Table.Td item={item.address} />
                                    <Table.TdAction>
                                        <SecondaryButton
                                            onClick={() => handleEdit(item)}
                                        >
                                            <PencilSimple
                                                size={16}
                                                weight="bold"
                                                className="text-yellow-400"
                                            />
                                        </SecondaryButton>
                                        <SecondaryButton
                                            onClick={() => handleDelete(item)}
                                        >
                                            <Trash
                                                size={16}
                                                weight="bold"
                                                className="text-red-600"
                                            />
                                        </SecondaryButton>
                                    </Table.TdAction>
                                </Table.Tr>
                            );
                        })}
                    </Table>
                    {mahasiswa.data.length > 0 && (
                        <Pagination meta={mahasiswa.meta} noScroll={true} />
                    )}
                </div>
            </Wrapper>
            <FormModal
                show={isShowModal}
                setShowModal={setIsShowModal}
                mahasiswaToEdit={dataToEdit}
                handleSuccess={handleSuccess}
            />
            <DeleteModal
                show={isShowDeleteModal}
                setShowModal={setIsShowDeleteModal}
                mahasiswa={dataToDelete}
                handleSuccess={handleSuccess}
            />

            {isShowToast && <Toast message={success} />}
        </AuthenticatedLayout>
    );
}
