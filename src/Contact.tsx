import { useState } from "react";
import { Modal } from "@mantine/core";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
  const [response, setResponse] = useState<string>();

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
  console.log(formData);
  return (
    <body className="mt-5 w-screen h-screen flex flex-row justify-center items-center sticky top-0 bg-rose-900">
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
        className="flex flex-col justify-start h-4/5 w-96 bg-white"
      >
        <h1 className="self-center mb-10">Contact me!</h1>
        <label>First Name</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2"
          type="text"
          value={formData.firstName}
          name="firstName"
          placeholder="First Name Here"
          required
          onChange={(event) => handleChange(event)}
        />
        <label>Last Name</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2"
          type="text"
          value={formData.lastName}
          name="lastName"
          placeholder="Last Name here"
          required
          onChange={(event) => handleChange(event)}
        />
        <label>E-mail Address</label>
        <input
          className="h-10 shadow-xl w-5/6 self-center border-gray-100 border-2"
          type="email"
          value={formData.email}
          name="email"
          placeholder="Email Address Here"
          required
          onChange={(event) => handleChange(event)}
        />
        <label>Phone Number (Optional)</label>
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

{
  /*
import { Modal } from '@mantine/core'
import { useState } from 'react'
import { send } from 'emailjs-com'

export default function Feedback() {
    const [formContent, setFormContent] = useState({
        name: '',
        description: '',
    })
    const [modalState, setModalState] = useState(false)
    const [response, setResponse] = useState()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormContent((prevContent) => {
            return {
                ...prevContent,
                [name]: value,
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        send(
            'service_y0qtnsm',
            'template_wivb8og',
            formContent,
            'CYy8c6jKVFoxlEgCU'
        )
            .then((response) => {
                console.log('Success!', response.status, response.text)
                setResponse('Your feedback was succesfully sent!')
            })
            .catch((error) => {
                console.log('Error Sending the message', error)
                setResponse('Error!, please try again' + error)
            })
    }

    return (
        <main className="w-screen h-screen flex items-center justify-center">
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
                className="w-2/3 h-5/6 flex flex-col items-center justify-center"
            >
                <h1 className="h-1/6">Thank you for your Feedback!</h1>
                <input
                    className="h-1/6 w-full border-solid border-2 border-zinc-300 mb-2"
                    name="name"
                    type="text"
                    value={formContent.name}
                    placeholder="Project Name/Page Name"
                    onChange={handleChange}
                />
                <textarea
                    className="h-3/6 w-full border-solid border-2 border-zinc-300 resize-none text-start"
                    name="description"
                    value={formContent.description}
                    type="text"
                    rows="10"
                    placeholder="Feedback here, Thank you!"
                    onChange={handleChange}
                />
                <div className="h-1/6 w-full flex justify-center mt-3">
                    <button
                        onClick={() => setModalState(true)}
                        className="bg-stone-200 shadow-sm text-black w-2/6 h-4/6"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    )
}*/
}
