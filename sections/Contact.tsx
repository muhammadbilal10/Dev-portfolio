import { ContactForm } from "@/components/Form";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-8 text-center">
        Contact
        <span className="text-primary"> Me!</span>
      </h1>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
