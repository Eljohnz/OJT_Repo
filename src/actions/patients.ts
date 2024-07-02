"use server";

import { db } from "@/lib/db";

export async function verifyPatient() {
    const firstName = "Benedick";
    const lastName = "Mercado";
    const birthdate = "09-10-2011"

    const patients = await db.patient.findMany({
        where: {
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate,
        }
    })

    return patients
}

export async function getPatients() {
    const patients = await db.patient.findMany({
        include: {
            extensionName:{
                select: {
                    extensionName:true
                }
            },
            bloodType: {
                select: {
                    bloodType:true
                }
            }
        }
    })
    return patients
}

export async function addPatient() {
    await db.patient.create({
        data: {
            bloodType:{
                create: {
                    bloodType: "C"
                }
            },
            extensionName:{
                create: {
                    extensionName: "wow"
                }
            },
            firstName: "Benedick",
            lastName: "Mercado",
            middleName: "Gitna",
            birthdate: "09-10-2011", 
            gender: "india",
            patientAge: 39
        }
    })
}