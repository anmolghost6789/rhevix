// Contact handler for Rhevix briefing requests
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  const org = data?.organization || data?.organisation;
  if (!data?.name || !data?.email || !org || !data?.message) {
    return Response.json(
      { error: "Please enter your name, work email, organization, and details on how we can help." },
      { status: 400 }
    );
  }
  console.log("New Rhevix conversation request:", {
    name: data.name,
    email: data.email,
    organization: org,
    message: data.message,
    timestamp: new Date().toISOString(),
  });
  return Response.json({ ok: true, message: "Request received successfully" });
}

