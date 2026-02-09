import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding orders...');

    const ordersData = [
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Mouse Gamer RGB',
                    price: 199.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Teclado Mecânico Gamer',
                    price: 349.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Headset Gamer Estéreo',
                    price: 249.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Mouse Pad XL',
                    price: 79.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Cadeira Gamer Pro',
                    price: 899.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Volante de Corrida',
                    price: 599.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Placa de Vídeo RTX 4080',
                    price: 7499.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Monitor Gamer 144Hz',
                    price: 1299.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Suporte de Monitor',
                    price: 199.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'SSD NVMe 1TB',
                    price: 499.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Memória RAM 32GB DDR5',
                    price: 899.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Teclado Gamer Compacto',
                    price: 299.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Mouse Gamer Sem Fio',
                    price: 249.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Cadeira Gamer Reclinável',
                    price: 999.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Fone Gamer Surround',
                    price: 349.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Mouse Pad Gamer Speed',
                    price: 69.99,
                    quantity: 1,
                },
            ],
        },
        {
            id: uuid(),
            items: [
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Volante e Pedais Racing',
                    price: 799.99,
                    quantity: 1,
                },
                {
                    id: uuid(),
                    productId: uuid(),
                    name: 'Suporte para Volante',
                    price: 149.99,
                    quantity: 1,
                },
            ],
        },
    ];

    for (const order of ordersData) {
        await prisma.order.create({
            data: {
                id: order.id,
                items: {
                    create: order.items,
                },
            },
        });
    }

    console.log('Seeding finished!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
