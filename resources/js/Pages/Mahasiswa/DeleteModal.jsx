import React from "react";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { useForm } from "@inertiajs/react";

export default function DeleteModal({
    show,
    mahasiswa,
    setShowModal,
    handleSuccess,
}) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = () => {
        destroy(route("mahasiswa.destroy", mahasiswa.id), {
            onSuccess: () => {
                setShowModal(false);
                handleSuccess();
            },
        });
    };

    return (
        <Modal show={show} maxWidth="sm">
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    Hapus Mahasiswa
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Apakah anda yakin menghapus mahasiswa?
                </p>
                <div className="mt-6 flex justify-end space-x-3">
                    <SecondaryButton
                        onClick={() => setShowModal(false)}
                        disabled={processing}
                    >
                        Batal
                    </SecondaryButton>
                    <DangerButton
                        onClick={handleDelete}
                        disabled={processing}
                        className="!rounded"
                    >
                        Ya, Hapus
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
}
