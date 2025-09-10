// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
//   return await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
// `;
// }

// export async function GET() {
//   try {
//     const invoices = await listInvoices();
//     return Response.json(invoices.rows);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
