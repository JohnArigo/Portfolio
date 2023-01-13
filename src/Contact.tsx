import { useState, useRef } from "react";
import { Modal } from "@mantine/core";
import emailjs from "@emailjs/browser";
import { ports } from "./types";
import githubR from "./images/githubR.png";
import whiteGit from "./images/gitWhite.png";
import linkedIn from "./images/linkedIn.svg";

export default function Contact({
  portSize,
  setPortSize,
  scrollSize,
  setScrollSize,
  screenPercent,
  bgMode,
}: ports) {
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
    " w-screen h-screen flex flex-col flex-wrap justify-center items-center sticky top-0 bg-white text-slate-900 font-noto";
  const dark = () => {
    if (portSize.width > 600) {
      return "  w-screen h-screen flex flex-col flex-wrap justify-center items-center sticky top-0 bg-zinc-900 text-white font-noto";
    } else
      return "  w-screen h-screen flex flex-col flex-wrap justify-center items-center sticky top-0 bg-zinc-800 text-white font-noto";
  };

  const lightForm =
    "self-center rounded-2xl flex flex-col justify-start h-4/6 w-96  ml-1 mr-3 mb-5 text-white bg-zinc-800";
  const darkForm =
    "self-center rounded-2xl flex flex-col justify-start h-4/6 w-96 ml-1 mr-3 mb-5 text-slate-900  bg-gray-50";
  return (
    <body id="Contact" className={bgMode ? light : dark()}>
      {screenPercent > 2.97 ? (
        <aside
          onClick={() => window.scrollTo(0, 0)}
          className="cursor-pointer mb-3"
        >
          Back to the top
        </aside>
      ) : (
        <aside className="w-full text-center text-transparent mb-5">
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
      <form onSubmit={onSubmit} className={bgMode ? lightForm : darkForm}>
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
          className="mt-3 h-3/6 w-11/12 border-solid border-2 border-zinc-300 resize-none text-start self-center"
          name="message"
          rows={10}
          value={formData.message}
          placeholder="Message here, Thank you!"
          required
          onChange={(event) => handleChange(event)}
        />

        <button
          onClick={() => setModalState(true)}
          className=" mt-5 bg-stone-200 shadow-sm self-center text-black w-5/12 h-10 rounded-lg"
        >
          Submit
        </button>
      </form>
      <footer className="flex flex-row">
        {bgMode ? (
          <div className="mt-2 mr-8">
            <a href="https://github.com/johnarigo">
              <img className="w-16 h-16" src={githubR} />
            </a>
          </div>
        ) : (
          <div className="mt-2 mr-8 shadow-lg">
            <a href="https://github.com/johnarigo">
              <img className="w-16 h-16" src={whiteGit} />
            </a>
          </div>
        )}

        <div
          className={`flex justify-center items-center
          }`}
        >
          <a href="https://www.linkedin.com/in/john-arigo/">
            <img className="w-20 h-20" src={linkedIn} />
          </a>
        </div>
      </footer>
    </body>
  );
}
