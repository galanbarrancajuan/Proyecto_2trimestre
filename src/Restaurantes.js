db.restaurantes.drop()
db.restaurantes.insertMany([

{
   codigo:["01"],
    nombre:"Beef Burguer",
    detalles:{
        ingredientes:
            ["Carne de ternera","Cebolla","tomate","pepinillo","lechuga","mostaza"],
        preparacion:10,
        salsas:["Ketchup","Mayonesa","Alioli","BBQ","Gaucha"],
        calidad:false,
        complementos:"Patatas fritas"
    },
    precio:[5,6],
},

{
    codigo:"02",
     nombre:"Cheese Burguer",
     detalles:{
         ingredientes:
             ["Carne de ternera","Queso","tomate","pepinillo","lechuga"],
         preparacion:20,
         salsas:["Ketchup","Mayonesa"],
         calidad:true,
         complementos:["Patatas fritas","Aros de cebolla"]
     },
     precio:[6,6.5],
 },
 
{
    codigo:["0003"],
     nombre:"Creamy Mushroom",
     detalles:{
         ingredientes:
             ["Carne de ternera","Cebolla","tomate","pepinillo","champiñones","mayonesa"],
         preparacion:18,
         salsas:["Ketchup"],
         calidad:true,
         complementos:"Patatas fritas"
     },
     precio:[7],
 },
 
{
    codigo:["0004"],
     nombre:"Spicy Buffalo",
     detalles:{
         ingredientes:
             ["Pollo","Cebolla","pepinillo","Chili picante"],
         preparacion:14,
         salsas:["BBQ","Gaucha"],
         calidad:true,
         complementos:"Patatas fritas"
     },
     precio:[8,8.5,9],
     
 },
 
{
    codigo:["0005"],
     nombre:"Barbeque Burguer",
     detalles:{
         ingredientes:
             ["Carne de ternera","tomate","pepinillo","lechuga","BBQ sauce"],
         preparacion:13,
         salsas:["BBQ"],
         calidad:true,
         complementos:"Patatas fritas"
     },
     precio:[9, 9.5]
 },
 {
    codigo:["0006"],
     nombre:"Hawaiian Burguer",
     detalles:{
         ingredientes:
             ["piña","cebolla","tomate","pepinillo"],
         preparacion:8,
         salsas:["mayonesa","Alioli"],
         calidad:false,
         complementos:"Aros de cebolla"
     },
     precio:10,
     
 },
 {
    codigo:["0007"],
     nombre:"Fish Burguer",
     detalles:{
         ingredientes:
             ["Queso","Tomate","Pescado","Cebolla","Mayonesa"],
         preparacion:13,
         salsas:["Mayonesa","Yogur"],
         calidad:false,
         complementos:"Patatas Deluxe"
     },
     precio:[9,9.5]
 },
 {
    codigo:["0008"],
     nombre:"Big Burguer",
     detalles:{
         ingredientes:
             ["Carne de ternera","tomate","huevo","lechuga","Queso","Lechuga"],
         preparacion:13,
         salsas:["BBQ","Mayonesa","Alioli","Cheddar","Gaucha"],
         calidad:true,
         complementos:"Patatas fritas"
     },
     precio:[10,11]
 },
 {
    codigo:["0009"],
     nombre:"Veggie Burguer",
     detalles:{
         ingredientes:
             ["Tofu","tomate","pepinillo","lechuga"],
         preparacion:13,
         salsas:["Sin salsa"],
         calidad:true,
         complementos:"Patatas fritas"
     },
     precio:[9,9.5]
 },
 {
    codigo:["0010"],
     nombre:"Burguer Tarnished",
     detalles:{
         ingredientes:
             ["Pollo empanado","Tomate","Pepinillo","Lechuga","Queso"],
         preparacion:16,
         salsas:["BBQ"],
         calidad:true,
         complementos:"Patatas fritas"
     },
     precio:9
 },

])

db.ventas.drop()
db.ventas.insertMany([

    {
        id:01,
        objeto:[
            {
                nombre:"Cheese Burguer",
                precio:6,
                costo_preparación:2,
                vendidos:2,
                detalles:{
                    peso:40,
                    tipo:"Lacteo"
                }
            },
            {
                nombre:"Beef Burguer",
                precio:6,
                costo_preparación:4,
                vendidos:1,
                detalles:{
                    peso:67,
                    tipo:"Carnico"
                }
            },
            {
            fecha_de_venta: new Date("2016-08-04"),
            particular:false,
            cliente:{
                nombre:"Jose",
                dni:"12345678A"
            },
            vendedor:"Adolfo"
            }]
        },
        {
            id:02,
            objeto:[
                {
                    nombre:"Hawaiian Burguer",
                    precio:10,
                    costo_preparación:7,
                    vendidos:1,
                    detalles:{
                        peso:70,
                        tipo:"Fruit"
                    }
                },
                {
                    nombre:"Beef Burguer",
                    precio:6,
                    costo_preparación:4,
                    vendidos:1,
                    detalles:{
                        peso:67,
                        tipo:"Carnico"
                    }
                },
                {
                fecha_de_venta: new Date("2018-12-16"),
                particular:true,
                cliente:{
                    nombre:"Juan",
                    dni:"12345678B"
                },
                vendedor:"Ruperta"
                }]
            },
            {
                id:03,
                objeto:[
                    {
                        nombre:"Cheese Burguer",
                        precio:6,
                        costo_preparación:2,
                        vendidos:1,
                        detalles:{
                            peso:40,
                            tipo:"Lacteo"
                        }
                    },
                    {
                        nombre:"Beef Burguer",
                        precio:6,
                        costo_preparación:4,
                        vendidos:2,
                        detalles:{
                            peso:67,
                            tipo:"Carnico"
                        }
                    },
                    {
                        nombre:"Fish Burguer",
                        precio:8,
                        costo_preparación:4,
                        vendidos:3,
                        detalles:{
                            peso:67,
                            tipo:"Omni"
                        }
                    },
                    {
                    fecha_de_venta: new Date("2006-12-16"),
                    particular:false,
                    cliente:{
                        nombre:"Pepe",
                        dni:"12345678C"
                    },
                    vendedor:"Adolfo"
                    }]
                },
                {
                    id:04,
                    objeto:[
                        {
                            nombre:"Creamy Mushroom",
                            precio:7,
                            costo_preparación:8.5,
                            vendidos:1,
                            detalles:{
                                peso:40,
                                tipo:"Bayas"
                            }
                        },
                        {
                        fecha_de_venta: new Date("2021-09-15"),
                        particular:false,
                        cliente:{
                            nombre:"Maricarmen",
                            dni:"12345678D"
                        },
                        vendedor:"Juan"
                        }]
                    },
                    {
                        id:05,
                        objeto:[
                            {
                                nombre:"Spicy Burguer",
                                precio:8,
                                costo_preparación:8,
                                vendidos:2,
                                detalles:{
                                    peso:40,
                                    tipo:"Picante"
                                }
                            },
                            {
                                nombre:"Buffalo Burguer",
                                precio:10,
                                costo_preparación:15,
                                vendidos:2,
                                detalles:{
                                    peso:125,
                                    tipo:"Picante"
                                }
                            },
                            {
                            fecha_de_venta: new Date("2021-09-15"),
                            particular:true,
                            cliente:{
                                nombre:"Maricarmen",
                                dni:"12345678E"
                            },
                            vendedor:"Juan"
                            }]
                        },
                        {
                        id:06,
                        objeto:[
                            {
                                nombre:"Cheese Burguer",
                                precio:6,
                                costo_preparación:2,
                                vendidos:2,
                                detalles:{
                                    peso:40,
                                    tipo:"Picante"
                                }
                            },
                            {
                                nombre:"Buffalo Burguer",
                                precio:10,
                                costo_preparación:15,
                                vendidos:2,
                                detalles:{
                                    peso:125,
                                    tipo:"Picante"
                                }
                            },
                            {
                            fecha_de_venta: new Date("2021-09-15"),
                            particular:false,
                            cliente:{
                                nombre:"Maricarmen",
                                dni:"12345678F"
                            },
                            vendedor:"Ruperta"
                            }]
                        },
                        {
                        id:07,
                        objeto:[
                            {
                                nombre:"Hawaiian Burguer",
                                precio:10,
                                costo_preparación:7,
                                vendidos:1,
                                detalles:{
                                    peso:40,
                                    tipo:"Fruits"
                                }
                            },
                            {
                                nombre:"Buffalo Burguer",
                                precio:10,
                                costo_preparación:15,
                                vendidos:1,
                                detalles:{
                                    peso:125,
                                    tipo:"Carnica"
                                }
                            },
                            {
                            fecha_de_venta: new Date("2020-10-05"),
                            particular:true,
                            cliente:{
                                nombre:"David",
                                dni:"12345678T"
                            },
                            vendedor:"Juan"
                            }]
                        },

                
        

    ])