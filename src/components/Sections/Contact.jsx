import SubHeading from "../SubHeading";
import { IconMessage } from "@tabler/icons-react";
import { useForm } from "@formspree/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzjzyje");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="space-y-5">
      <SubHeading text="Say Hello" icon={IconMessage} />
      <p className="text-neutral-400">
        Have a project in mind or just want to chat? I'd love to hear from you.
      </p>

      <form
        action="https://formspree.io/f/myzjzyje"
        onSubmit={handleSubmit}
        method="POST"
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
          className=""
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
          className=""
        />

        <Label className="sr-only" htmlFor="sub">
          Subject
        </Label>
        <Input
          type="text"
          name="sub"
          id="sub"
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
          cols={100}
          rows={30}
          placeholder="Your message"
          required
          className="h-[100px] sm:col-span-2"
        ></Textarea>
        <Button className="sm:w-fit" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
