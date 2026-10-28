let count = 0;

export async function GET() {
  count++;
  // Giả lập API chậm 5 giây
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return Response.json({
    count,
    time: new Date().toISOString(),
    random: Math.random(),
  });
}
