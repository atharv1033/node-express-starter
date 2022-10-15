import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    // await prisma.sys_module.createMany({
    //     data: [
    //         {
    //             module_id: 1,
    //             module_key: 'user',
    //             module_name: 'User',
    //         },
    //         {
    //             module_id: 2,
    //             module_key: 'home',
    //             module_name: 'Home',
    //         },
    //     ]
    // });

    // await prisma.u_role.createMany({
    //     data: [
    //         {
    //             role_id: 1,
    //             role_key: 'admin',
    //             role_name: 'Admin'
    //         },
    //         {
    //             role_id: 2,
    //             role_key: 'customer',
    //             role_name: 'Customer'
    //         }
    //     ]
    // });

    // await prisma.module_role_map.createMany({
    //     data: [
    //         {
    //             mrm_module_id: 1,
    //             mrm_role_id: 1,
    //             mrm_access: "WRITE"
    //         },
    //         {
    //             mrm_module_id: 2,
    //             mrm_role_id: 1,
    //             mrm_access: "WRITE"
    //         },
    //         {
    //             mrm_module_id: 2,
    //             mrm_role_id: 1,
    //             mrm_access: "READ"
    //         },
    //     ]
    // });

    const admin = await prisma.u_user.create({
        data: {
            user_id: 1,
            user_email: 'admin@enpointe.io',
            user_mobile: 919807654321,
            user_password: '21232f297a57a5a743894a0e4a801fc3',
            user_first_name: 'Enpinte',
            user_last_name: 'Admin',
            user_role_id: 1,
        },
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })