export default async () => {
  try {
    // We request an external service that returns the IP of the requester (us)
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();

    return new Response(JSON.stringify({
      message: "Outgoing IP Address confirmed",
      outgoing_ip: data.ip,
      note: "This is the IP address the external world sees this function using."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
