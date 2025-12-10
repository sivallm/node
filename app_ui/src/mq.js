import amqp from "amqplib";

export async function connectMq() {
    const conn = await amqp.connect(process.env.RABBITMQ_URL);
    const ch = await conn.createChannel();
    await ch.assertQueue("test_queue");
    return ch;
}
