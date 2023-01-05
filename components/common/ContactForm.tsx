'use client';

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const [isError, setIsError] = useState(false);

    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: null,
                email: null,
                message: null,
            });
        }
    }, [isSubmitSuccessful, reset]);

    function FormFieldErrors({ message }: { message: any }) {
        return <div className="mt-2 text-xs text-red-500">{message}</div>;
    }

    const encode = (data: any) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    async function submitContactHandler({ name, email, message }: { name: string, email: string, message: any }) {
        const payload = {
            name,
            email,
            message,
        };

        try {
            await axios({
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                url: "/",
                data: encode({ "form-name": "contact v1", ...payload }),
            });

            toast("Message sent. Thank you. Will revert ASAP.");
            router.push("/success");
        } catch (error) {
            setIsError(true);
        }
    }

    const ErrorMessage = () => {
        if (isError) {
            return (
                <div className="rounded-lg p-4 bg-red-500 text-white text-center mb-4">Whoops! Something went wrong when submitting your message</div>
            );
        }

        return null;
    }

    return (
        <>
            <form method="POST" data-netlify="true" className="w-full md:px-20">
                <ErrorMessage />
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <input type="hidden" name="form-name" value="contact v1" />
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            {...register("name", {
                                required: "Please enter your name",
                            })}
                            type="text"
                            id="name"
                            name="name"
                            className="h-8 rounded p-2 text-black"
                            placeholder="Please provide your name"
                        />
                        {errors.name && (
                            <FormFieldErrors message={errors.name.message} />
                        )}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email", {
                                required: "Please enter your email",
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                    message: "Please enter valid email",
                                },
                            })}
                            type="email"
                            id="email"
                            name="email"
                            className="h-8 rounded p-2 text-black"
                            placeholder="Please provide your valid email"
                        />
                        {errors.email && (
                            <FormFieldErrors message={errors.email.message} />
                        )}
                    </div>
                    <div className="mb-6 flex flex-col md:col-span-2">
                        <label htmlFor="message">Message</label>
                        <textarea
                            {...register("message", {
                                required: "Please enter your message",
                            })}
                            id="message"
                            name="message"
                            cols={30}
                            rows={5}
                            className="rounded p-2 text-black"
                            placeholder="Tell me your desire"
                        />
                        {errors.message && (
                            <FormFieldErrors message={errors.message.message} />
                        )}
                    </div>
                </div>
                <button type="submit" className="primary-button w-full">
                    Reach Out
                </button>
            </form>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{ top: 64 }}
            />
        </>
    );
}