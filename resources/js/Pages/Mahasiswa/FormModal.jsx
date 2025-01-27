import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function FormModal({
    show,
    setShowModal,
    mahasiswaToEdit = null,
    handleSuccess,
}) {
    const { data, setData, post, processing, errors, clearErrors, reset } =
        useForm({
            name: "",
            email: "",
            password: "",
            address: "",
        });

    useEffect(() => {
        if (show) {
            if (mahasiswaToEdit) {
                setData({
                    name: mahasiswaToEdit.name,
                    email: mahasiswaToEdit.email,
                    address: mahasiswaToEdit.address,
                    password: "",
                    _method: "put",
                });
            } else {
                reset();
            }
        } else {
            reset();
            clearErrors();
        }
    }, [mahasiswaToEdit, show]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mahasiswaToEdit) {
            post(route("mahasiswa.update", mahasiswaToEdit.id), {
                onSuccess: () => {
                    setShowModal(false);
                    handleSuccess();
                },
            });
        } else {
            post(route("mahasiswa.store"), {
                onSuccess: () => {
                    setShowModal(false);
                    handleSuccess();
                    reset();
                },
            });
        }
    };

    const handleClose = () => {
        setShowModal(false);
        reset();
        clearErrors();
    };

    return (
        <Modal show={show} maxWidth="lg" onClose={handleClose}>
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    {mahasiswaToEdit ? "Edit Mahasiswa" : "Tambah mahasiswa"}
                </h2>
                <hr className="my-3 text-gray-700" />
                <form onSubmit={handleSubmit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors?.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="address" value="Address" />
                        <TextInput
                            id="address"
                            type="text"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("address", e.target.value)}
                        />
                        <InputError
                            message={errors?.address}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 mt-4">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors?.email}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors?.password}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-2 justify-end mt-4">
                        <SecondaryButton onClick={() => setShowModal(false)}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton className="!px-7" disabled={processing}>
                            {mahasiswaToEdit ? "Update" : "Save"}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
