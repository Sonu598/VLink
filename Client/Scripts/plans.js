const btn1 = document.getElementById("free-plan");
const btn2 = document.getElementById("lite-plan");
const btn3 = document.getElementById("pro-plan");
const btn4 = document.getElementById("premium-plan");
btn1.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

btn2.addEventListener("click", async () => {
  //   localStorage.setItem("amount", "9");
  //   localStorage.setItem("plan", "LITE");
  //   window.location.href = "payment.html";
  const amount = 9;
  const plan = "LITE";
  initiatePayment(amount, plan);
});

btn3.addEventListener("click", () => {
  //   localStorage.setItem("amount", "19");
  //   localStorage.setItem("plan", "PRO");
  //   window.location.href = "payment.html";
  const amount = 19;
  const plan = "PRO";
  initiatePayment(amount, plan);
});

btn4.addEventListener("click", () => {
  //   localStorage.setItem("amount", "29");
  //   localStorage.setItem("plan", "PRIMIUM");
  //   window.location.href = "payment.html";
  const amount = 29;
  const plan = "PREMIUM";
  initiatePayment(amount, plan);
});

async function initiatePayment(amount, plan) {
  const response = await fetch(
    "https://vlink-auth-server.onrender.com/create-order",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }), // Amount in INR
    }
  );

  const order = await response.json();

  const options = {
    key: "rzp_live_WOA59PH7MdDNtN",
    amount: order.amount,
    currency: "INR",
    name: "VLink",
    description: `This is the payment for ${plan} plan`,
    image: "https://vlinkapp.netlify.app/Images/logo.jpg",
    order_id: order.id,
    handler: async function (response) {
      const verifyResponse = await fetch(
        "https://vlink-auth-server.onrender.com/verify-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        }
      );
      const verificationResult = await verifyResponse.json();
      alert(verificationResult.message);
      window.location.href = "../dashboard.html";
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
