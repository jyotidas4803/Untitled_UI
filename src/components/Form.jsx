import { TbFlareFilled } from "react-icons/tb";
import Intro from "@/components/Intro";
import {useForm } from "react-hook-form"
// import { useState } from "react";
import Utils from "@/lib/Utils";
console.log(Utils);

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];
function Form() {
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   email: "",
  //   message: "",
  //   services: [],
  // });



  // const handleSubmit = (e) => {
  //   console.log(formData);
  //   e.preventDefault();
  // };

  // const handleChange = (value, property) => {
  //   setFormData({ ...formData, [property]: value });
  // };

  // const handleCheckbox = (value, checked) => {
  //   if (checked) {
  //     console.log(`Theek hai mein ${value} ko add kar dunga`);
  //     return;
  //   }

  //   console.log(`Theek hai mein ${value} ko remove kar dunga`);
  // };

  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <Intro />
      <form className="flex flex-col gap-1" onSubmit={handleSubmit((data)=>{
        console.log(data)
      })}>
        {/* Input */}
        <input
          type="text"
          {...register("fullname",{
            required:"tell me your name",
          })}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.fullname&&(<p className="text-red-500">{errors.fullname.message}</p>)}

        <input
          type="email"
           {...register("email",{
            required:"tell me your mail please",
            pattern:{
              value:/[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/g,
              message:"please enter a valid email address"
            }
          })}
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
        />
        {errors.fullname&&(<p className="text-red-500">{errors.email.message}</p>)}

        <input
          type="text"
          {...register("message",{
            required:"please tell us a bit about your project",
            minLength:{
              value:10,
              message:"please enter atleast 10 characters"
            },
            maxLength:{
              value:100,
              message:"dont go over 100 characters"
            }
          })}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"

        />
          {errors.fullname&&(<p className="text-red-500">{errors.message.message}</p>)}
       

        <p className="my-5 text-zinc-800">How can we help?</p>

        {/* Checkbox*/}
        <section className="mb-12 grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, idx) => {
            return (
              <label
                key={service + idx}
                className="flex cursor-pointer items-center gap-1"
              >
                <input
                  type="checkbox"
                  {...register("services",{
                    required:"please select a service",
                  })}
                  className="size-6"
                  />
                 
                {service}
                  {errors.fullname&&(<p className="text-red-500">{errors.services.message}</p>)}
              </label>
            );
          })}
        </section>
        <button
          type="submit"
          className="flex justify-center gap-2 rounded-lg bg-stone-950 p-2 text-white"
        >
          Let's get started
          <TbFlareFilled size={20} className="text-lime-500" />
        </button>
      </form>
    </>
  );
}

export default Form;