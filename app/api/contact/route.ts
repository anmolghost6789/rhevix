// Placeholder handler. Connect to your email provider or CRM before launch.
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data?.name || !data?.email || !data?.organisation || !data?.message) {
    return Response.json({ error: "Complete your name, work email, organisation and a brief description." }, { status: 400 });
  }
  console.log("New briefing request", data);
  return Response.json({ ok: true });
}
