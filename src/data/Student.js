const data = [{
        "id": 1,
        "code": "20230001",
        "paternal": "González",
        "maternal": "Martínez",
        "names": "Juan Carlos",
        "EP": 15,
        "EC": 14,
        "EF": 16
    },
    {
        "id": 2,
        "code": "20230002",
        "paternal": "Rodríguez",
        "maternal": "López",
        "names" : "Isabel Fernanda",
        "EP": 17,
        "EC": 18,
        "EF": 19
    },
    {
        "id": 3,
        "code": "20230003",
        "paternal": "Fernández",
        "maternal": "Pérez",
        "names": "José Antonio",
        "EP": 13,
        "EC": 12,
        "EF": 14
    },
    {
        "id": 4,
        "code": "20230004",
        "paternal": "Hernández",
        "maternal": "García",
        "names":"Ana Isabel",
        "EP": 19,
        "EC": 20,
        "EF": 18
    },
    {
        "id": 5,
        "code": "20230005",
        "paternal": "Ramírez",
        "maternal": "Sánchez",
        "names" : "Luis Alberto",
        "EP": 16,
        "EC": 15,
        "EF": 17
    },
    {
        "id": 6,
        "code": "20230006",
        "paternal": "Torres",
        "maternal": "Romero",
        "names": "Carmen Lucía",
        "EP": 18,
        "EC": 17,
        "EF": 19
    },
    {
        "id": 7,
        "code": "20230007",
        "paternal": "Flores",
        "maternal": "Jiménez",
        "names": "Ricardo Andrés",
        "EP": 14,
        "EC": 13,
        "EF": 15
    },
    {
        "id": 8,
        "code": "20230008",
        "paternal": "Vega",
        "maternal": "Ruiz",
        "names": "Valeria Sofía",
        "EP": 20,
        "EC": 19,
        "EF": 18
    },
    {
        "id": 9,
        "code": "20230009",
        "paternal": "Castro",
        "maternal": "Mendoza",
        "names" : "Javier Esteban",
        "EP": 15,
        "EC": 14,
        "EF": 16
    },
    {
        "id": 10,
        "code": "20230010",
        "paternal": "Díaz",
        "maternal": "Gómez",
        "names": "Natalia Andrea",
        "EP": 18,
        "EC": 17,
        "EF": 19
    },
    {
        "id": 11,
        "code": "20230011",
        "paternal": "Morales",
        "maternal": "Vargas",
        "names": "Andrés Felipe",
        "EP": 14,
        "EC": 13,
        "EF": 15
    },
    {
        "id": 12,
        "code": "20230012",
        "paternal": "Reyes",
        "maternal": "Chávez",
        "names": "Daniela Paola",
        "EP": 20,
        "EC": 19,
        "EF": 18
    },
    {
        "id": 13,
        "code": "20230013",
        "paternal": "Ríos",
        "maternal": "Ortiz",
        "names": "Miguel Ángel",
        "EP": 15,
        "EC": 14,
        "EF": 16
    },
    {
        "id": 14,
        "code": "20230014",
        "paternal": "Núñez",
        "maternal": "Hernández",
        "names": "Sofía Isabel",
        "EP": 17,
        "EC": 18,
        "EF": 19
    },
    {
        "id": 15,
        "code": "20230015",
        "paternal": "Ortega",
        "maternal": "Ramos",
        "names": "Sebastián Alejandro",
        "EP": 13,
        "EC": 12,
        "EF": 14
    },
    {
        "id": 16,
        "code": "20230016",
        "paternal": "Paredes",
        "maternal": "Gutiérrez",
        "names": "Valentina Marisol",
        "EP": 19,
        "EC": 20,
        "EF": 18
    },
    {
        "id": 17,
        "code": "20230017",
        "paternal": "Rosas",
        "maternal": "Pineda",
        "names": "Emilio José",
        "EP": 16,
        "EC": 15,
        "EF": 17
    },
    {
        "id": 18,
        "code": "20230018",
        "paternal": "Serrano",
        "maternal": "Aguilar",
        "names": "Andrea Pilar",
        "EP": 18,
        "EC": 17,
        "EF": 19
    },
    {
        "id": 19,
        "code": "20230019",
        "paternal": "Valdez",
        "maternal": "Cruz",
        "names": "Gabriel Antonio",
        "EP": 14,
        "EC": 13,
        "EF": 15
    },
    {
        "id": 20,
        "code": "20230020",
        "paternal": "Zapata",
        "maternal": "Navarro",
        "names": "Laura Catalina",
        "EP": 20,
        "EC": 19,
        "EF": 18
    }
]

export const getStudents = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}
