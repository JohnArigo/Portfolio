import { useState, useRef } from "react";
import { Modal } from "@mantine/core";
import emailjs from "@emailjs/browser";
import { contactTypes } from "./types";

export default function Contact({
  scrollSize,
  setScrollSize,
  screenPercent,
  bgMode,
}: contactTypes) {
  type formDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: number;
    message: string;
  };

  const [formData, setFormData] = useState<formDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: 8888888888,
    message: "",
  });
  const [modalState, setModalState] = useState<boolean>(false);
  const [response, setResponse] = useState<string>(
    "Unsuccesful, please fill out required fields"
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData?.((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        "service_y0qtnsm",
        "template_i6m577b",
        formData,
        "CYy8c6jKVFoxlEgCU"
      )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        setResponse("Your feedback was succesfully sent!");
      })
      .catch((error) => {
        console.log("Error Sending the message", error);
        setResponse("Error!, please try again" + error);
      });
  };
  const light =
    "mt-5 w-screen h-screen flex flex-row flex-wrap justify-center items-center sticky top-0 bg-white text-slate-900 ";
  const dark =
    "mt-5 w-screen h-screen flex flex-row flex-wrap justify-center items-center sticky top-0 dark:bg-slate-800 dark:text-white";
  return (
    <body id="Contact" className={bgMode ? light : dark}>
      {screenPercent > 2.97 ? (
        <aside
          onClick={() => window.scrollTo(0, 0)}
          className="w-full text-center"
        >
          Arrow Here
        </aside>
      ) : (
        <aside className="w-full text-center text-transparent">
          This is a Place holder
        </aside>
      )}
      <Modal
        className="text-center"
        opened={modalState}
        onClose={() => setModalState(false)}
        title="Thank you!"
      >
        {response}
      </Modal>
      <form
        onSubmit={onSubmit}
        className="rounded-2xl flex flex-col justify-start h-4/5 w-96 dark:bg-gray-50 ml-3 mr-3 text-white dark:text-slate-900 bg-slate-500"
      >
        <h1 className="self-center mb-10">Contact me!</h1>
        <label className="ml-2">First Name</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2"
          type="text"
          value={formData.firstName}
          name="firstName"
          placeholder="First Name Here"
          required
          onChange={(event) => handleChange(event)}
        />
        <label className="ml-2">Last Name</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2"
          type="text"
          value={formData.lastName}
          name="lastName"
          placeholder="Last Name here"
          required
          onChange={(event) => handleChange(event)}
        />
        <label className="ml-2">E-mail Address</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2"
          type="email"
          value={formData.email}
          name="email"
          placeholder="Email Address Here"
          required
          onChange={(event) => handleChange(event)}
        />
        <label className="ml-2">Phone Number (Optional)</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2 mb-2"
          type="tel"
          value={formData.phone}
          name="phone"
          onChange={(event) => handleChange(event)}
          pattern="[0-9]*"
          maxLength={10}
          placeholder="888 888 8888"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <textarea
          className="h-3/6 w-11/12 border-solid border-2 border-zinc-300 resize-none text-start self-center"
          name="message"
          rows={10}
          value={formData.message}
          placeholder="Message here, Thank you!"
          required
          onChange={(event) => handleChange(event)}
        />

        <button
          onClick={() => setModalState(true)}
          className=" mt-5 bg-stone-200 shadow-sm self-center text-black w-5/12 h-10 rounded-lg mb-3"
        >
          Submit
        </button>
      </form>
    </body>
  );
}
