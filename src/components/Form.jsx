import Intro from "@/components/Intro";

function Form() {
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <>
      <Intro />
      <form className="flex flex-col gap-1">
        {/* Input */}
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@company.com"
          className="border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 bg-zinc-50 p-2 placeholder-slate-700 md:bg-lime-400"
          required
        />

        <p className="my-5 text-zinc-800">How can we help?</p>

        {/* Checkbox */}
        <section className="grid grid-cols-2 gap-1 md:max-w-96">
          {services.map((service, idx) => {
            return (
              <label key={service + idx} className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name={service} className="size-6 cursor-pointer" />
                {service}
              </label>
            );
          })}
        </section>
        <button className="bg-zinc-50 p-2 rounded-lg md:bg-lime-400">Submit</button>
      </form>
    </>
  );
}

export default Form;