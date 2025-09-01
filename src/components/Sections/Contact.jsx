import SubHeading from "../SubHeading";
import { IconMessage } from "@tabler/icons-react";
import { useForm } from "@formspree/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import toast from "../Toast";
import { IconLoader2 } from "@tabler/icons-react";
import { useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzjzyje");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }

    if (state.errors) {
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
      });
    }
  }, [state.succeeded, state.errors]);

  return (
    <div className="space-y-5">
      <SubHeading text="Say Hello" icon={IconMessage} />
      <p className="dark:text-neutral-400">
        Have a project in mind or just want to chat? I'd love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-4 max-w-[650px]"
      >
        <Label className="sr-only" htmlFor="name">
          Name
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />

        <Label className="sr-only" htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
        />

        <Label className="sr-only" htmlFor="subject">
          Subject
        </Label>
        <Input
          type="text"
          name="subject"
          id="subject"
          placeholder="What's this about"
          required
          className="sm:col-span-2"
        />

        <Label className="sr-only" htmlFor="message">
          Message
        </Label>
        <Textarea
          name="message"
          id="message"
          placeholder="Your message"
          required
          className="h-[100px] sm:col-span-2"
        ></Textarea>
        <Button disabled={state.submitting} className="sm:w-fit" type="submit">
          {state.submitting && <IconLoader2 className="animate-spin" />}
          {state.submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
