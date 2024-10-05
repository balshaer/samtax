import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
// import { useToast } from "@/components/hooks/use-toast"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setErr(true);
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully");

    setName("");
    setEmail("");
    setMessage("");
    setErr(false);
  };

  return (
    <section id="contact" className="section mx-auto max-w-3xl text-center">
      <h3 className="section-title pb-0">Get in Touch</h3>
      <p className="description pb-6">
        Ready to elevate your financial strategy or need expert translation?
        Let's connect!
      </p>

      <form onSubmit={handleSubmit} className="space-y-2 bg-transparent">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name Or Your Company Name"
            value={name}
            className={err && !name ? "border-red-500" : ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            className={err && !email ? "border-red-500" : ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            className={err && !message ? "border-red-500" : "h-36"}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
