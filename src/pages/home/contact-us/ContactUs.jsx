import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();

    const submitHandler = (data) => {
        console.log(data);

        toast.success("Get your data successfully")

        resetField("user_name")
        resetField("user_email")
        resetField("message")
    }

    return (
        <section className='  py-12'>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                data-aos-delay="50"
            >
                <div className='text-center text-primary'>
                    <h4 className='text-3xl font-bold'><em>CONTACT ME</em></h4>
                    <p className='text-xl text-gray-400 my-2'>Question not answer yet? I am here to help!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit(submitHandler)} className="form-control mx-2 md:mx-0 w-full md:w-2/3 py-8">
                        <label className="mb-2">
                            <input {...register("user_name", { required: "your name is required" })} type="text" name='user_name' placeholder="Enter your Name" className="input  border-primary w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" defaultValue="" />
                            {
                                errors?.user_name &&
                                <p className='text-red-500 mx-4'>{errors?.user_name?.message}</p>
                            }
                        </label>
                        <label className="mb-2">
                            <input {...register("user_email", { required: "your email is required" })} type="text" name='user_email' placeholder="Enter your Email" className="input input-bordered border-primary w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" defaultValue="" />
                            {
                                errors?.user_email &&
                                <p className='text-red-500 mx-4'>{errors?.user_email?.message}</p>
                            }
                        </label>
                        <label className="mb-2">
                            <input {...register("message", { required: "your message is required" })} type="text" name='message' placeholder="Enter your Message" className="input input-bordered border-primary w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" />
                            {
                                errors?.message &&
                                <p className='text-red-500 mx-4'>{errors?.message?.message}</p>
                            }
                        </label>
                        <label className="mb-2">
                            <input type="submit" value="Email" className='mt-4 input input-bordered  w-full rounded-md btn btn-md bg-primary text-white border-2 hover:text-white' />
                        </label>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;