const sendData = async (formData) => {
  try {
    // Define the API endpoint URLs
    const createContactApiUrl = "http://localhost:8000/api/sender/";
    const createMessageApiUrl = "http://localhost:8000/api/message/";
    const sendEmailApiUrl = "http://localhost:8000/api/send-email"; // Why dont I need the trailing slash here?

    const senderRequestBody = {
      message: formData.message,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      date: formData.date,
    };

    // Perform the fetch request for sender endpoint which creates a sender record
    const senderResponse = await fetch(createContactApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(senderRequestBody),
    });

    // Perform the fetch request for message endpoint which creates a message record
    const messageResponse = await fetch(createMessageApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(senderRequestBody),
    });

    // Perform the fetch request for sending reply email endpoint
    const emailResponse = await fetch(sendEmailApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(senderRequestBody),
    });

    // Check if all requests were successful (status code 2xx)
    if (senderResponse.ok && messageResponse.ok && emailResponse.ok) {
      const senderData = await senderResponse.json();
      const messageData = await messageResponse.json();
      const emailData = await emailResponse.json();

      // console.log("Contact form details saved successfully:", senderData);
      // console.log("Message details saved successfully:", messageData);
      // console.log("Reply email sent successfully:", emailData);

      return { senderData, messageData, emailData };
    } else {
      throw new Error("Failed to save sender and/or message details");
    }
  } catch (error) {
    // console.error("Error submitting data:", error.message);
    throw error;
  }
};

export default sendData;
