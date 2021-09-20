import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prima = new PrismaClient();

async function main() {

    await prima.user.create({
        data: {
            email: 'testemail@gmail.com',
            role: 'ADMIN'
        }
    });

    await prima.link.createMany({
        data: links,
    });
}

main()
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async() => {
    await prima.$disconnect();
})
