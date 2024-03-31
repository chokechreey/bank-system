import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CustomerDetail = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [allCustomer, setAllCustomer] = useState([]);
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    async function showCustomer() {
      const response = await fetch(
        `http://localhost:8000/customer/customer/${id}`
      );
      const data = await response.json();
      setCustomer(data);
    }
    showCustomer();
  });
  useEffect(() => {
    async function customerData() {
      const res = await fetch("http://localhost:8000/customer/allCustomer");
      const data = await res.json();
      setAllCustomer(data);
    }
    customerData();
  }, [input]);
  function handleChange(e) {
    setInput(e.target.value);
    const value = document.querySelector("#nameR").value;
    const list = document.querySelector("#list");
    if (value.length >= 1) {
      list.style.display = "block";
      list.innerHTML = "";
      allCustomer.forEach((i) => {
        const li = document.createElement("li");
        li.innerText = i.name;
        li.addEventListener("click", function () {
          setInput(li.innerHTML);
          list.style.display = "none";
        });
        list.appendChild(li);
      });
    } else {
      list.style.display = "none";
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/customer/transfer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: input,
        amount: amount,
        user: customer.name,
      }),
    });
    const data = await response.json();
    if (data.ok) {
      navigation("/");
    }
  }
  return (
    <section className="m-5">
      <h1 className="text-3xl">
        Name : <span className="font-bold">{customer.name}</span>
      </h1>
      <p className="text-3xl">Email : {customer.email}</p>
      <h3 className="text-3xl">
        {" "}
        Amount : <span className="font-bold">
          {" "}
          {customer.currentBalance}{" "}
        </span>{" "}
      </h3>
      <h1 className="text-3xl font-bold italic my-5">Transfer Amount</h1>
      <div>
        <form className="flex flex-col items-start" onSubmit={handleSubmit}>
          <input
            className="placeholder:font-bold my-2 p-2 placeholder:text-gray-600"
            type="text"
            name="nameR"
            id="nameR"
            placeholder="receiver name"
            value={input}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <ul id="list"></ul>
          <input
            className="placeholder:font-bold my-2 p-2 placeholder:text-gray-600"
            type="text"
            required
            name="amount"
            id="amount"
            placeholder="amount"
            autoComplete="off"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />{" "}
          <button
            type="submit"
            className="bg-fuchsia-700 text-white py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerDetail;
