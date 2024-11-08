import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Firebase sozlamalarini import qilish
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formData, setFormData] = useState({
    profileImg: null,
    firstName: "",
    lastName: "",
    birthDate: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImg: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    console.log("Submit ishladi")
    e.preventDefault();
    try {
      await addDoc(collection(db, "usersData"), {
        id: uuidv4(),
        ...formData,
        createdAt: new Date(), // Qo'shimcha yaratilgan vaqti
      });
      alert("User added successfully!");
      setFormData({
        profileImg: null,
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
      });
      document.getElementById("add_user").close(); // Modalni yopish
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };
  return (
    <>
      <section className="bg-sky-100">
        <button
          onClick={() => document.getElementById("add_user").showModal()}
          className="w-[200px] px-1 py-1 m-4 bg-sky-500 text-white hover:text-sky-500 hover:bg-white font-semibold transition-all duration-200 rounded-lg"
        >
          <i className="bi bi-node-plus-fill"></i> &nbsp; Add User
        </button>
      </section>

      <section className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="m-2 grid grid-cols-4 border-sky-200 border p-3 rounded-lg text-sky-500">
            <img
              src="https://picsum.photos/300/400"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />

            <div className="col-span-3">
              <p>
                <span className="font-bold">First name: </span>{" "}
                <span>Shahboz</span>
              </p>
              <p>
                <span className="font-bold">Last name: </span>{" "}
                <span>Shirinboyev</span>
              </p>
              <p>
                <span className="font-bold">Birth date: </span>{" "}
                <span>12.03.1999</span>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>{" "}
                <span>+998 93 009 11 66</span>
              </p>
            </div>
          </div>
          <div className="m-2 grid grid-cols-4 border-sky-200 border p-3 rounded-lg text-sky-500">
            <img
              src="https://picsum.photos/300/400"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />

            <div className="col-span-3">
              <p>
                <span className="font-bold">First name: </span>{" "}
                <span>Shahboz</span>
              </p>
              <p>
                <span className="font-bold">Last name: </span>{" "}
                <span>Shirinboyev</span>
              </p>
              <p>
                <span className="font-bold">Birth date: </span>{" "}
                <span>12.03.1999</span>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>{" "}
                <span>+998 93 009 11 66</span>
              </p>
            </div>
          </div>
          <div className="m-2 grid grid-cols-4 border-sky-200 border p-3 rounded-lg text-sky-500">
            <img
              src="https://picsum.photos/300/400"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />

            <div className="col-span-3">
              <p>
                <span className="font-bold">First name: </span>{" "}
                <span>Shahboz</span>
              </p>
              <p>
                <span className="font-bold">Last name: </span>{" "}
                <span>Shirinboyev</span>
              </p>
              <p>
                <span className="font-bold">Birth date: </span>{" "}
                <span>12.03.1999</span>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>{" "}
                <span>+998 93 009 11 66</span>
              </p>
            </div>
          </div>
          <div className="m-2 grid grid-cols-4 border-sky-200 border p-3 rounded-lg text-sky-500">
            <img
              src="https://picsum.photos/300/400"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />

            <div className="col-span-3">
              <p>
                <span className="font-bold">First name: </span>{" "}
                <span>Shahboz</span>
              </p>
              <p>
                <span className="font-bold">Last name: </span>{" "}
                <span>Shirinboyev</span>
              </p>
              <p>
                <span className="font-bold">Birth date: </span>{" "}
                <span>12.03.1999</span>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>{" "}
                <span>+998 93 009 11 66</span>
              </p>
            </div>
          </div>
          <div className="m-2 grid grid-cols-4 border-sky-200 border p-3 rounded-lg text-sky-500">
            <img
              src="https://picsum.photos/300/400"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />

            <div className="col-span-3">
              <p>
                <span className="font-bold">First name: </span>{" "}
                <span>Shahboz</span>
              </p>
              <p>
                <span className="font-bold">Last name: </span>{" "}
                <span>Shirinboyev</span>
              </p>
              <p>
                <span className="font-bold">Birth date: </span>{" "}
                <span>12.03.1999</span>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>{" "}
                <span>+998 93 009 11 66</span>
              </p>
            </div>
          </div>
          <div className="m-2 grid grid-cols-4 border-sky-200 border p-3 rounded-lg text-sky-500">
            <img
              src="https://picsum.photos/300/400"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />

            <div className="col-span-3">
              <p>
                <span className="font-bold">First name: </span>{" "}
                <span>Shahboz</span>
              </p>
              <p>
                <span className="font-bold">Last name: </span>{" "}
                <span>Shirinboyev</span>
              </p>
              <p>
                <span className="font-bold">Birth date: </span>{" "}
                <span>12.03.1999</span>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>{" "}
                <span>+998 93 009 11 66</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <dialog id="add_user" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <form method="dialog" className="grid grid-cols-2 text-sky-500">
            <p className="flex justify-start items-center">Add User</p>
            {/* if there is a button in form, it will close the modal */}
            <div className="flex justify-end items-center">
              <button className="btn btn-sm btn-circle btn-ghost hover:bg-sky-100">
                ✕
              </button>
            </div>
          </form>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 pt-4">
            <label htmlFor="" className="grid grid-cols-1">
              <span>Profile IMG:</span>
              <input
                type="file"
                name="profileImg"
                onChange={handleFileChange}
                className="border rounded-md px-2 py-1"
              />
            </label>
            <label htmlFor="" className="grid grid-cols-1">
              <span>First Name:</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1"
              />
            </label>
            <label htmlFor="" className="grid grid-cols-1">
              <span>Last Name:</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1"
              />
            </label>
            <label htmlFor="" className="grid grid-cols-1">
              <span>Birh Date:</span>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1"
              />
            </label>
            <label htmlFor="" className="grid grid-cols-1">
              <span>Phone Number:</span>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1"
              />
            </label>
            <button type="submit" className="rounded-md bg-sky-100 px-2 py-2 text-sky-500 font-bold hover:bg-sky-500 hover:text-white transition-all duration-200">
              Submit
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default App;
