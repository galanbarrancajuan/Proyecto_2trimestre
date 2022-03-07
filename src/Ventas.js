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
        ],
            
            fecha_de_venta: new Date("2016-08-04"),
            particular:false,
            cliente:{
                nombre:"Jose",
                dni:"12345678A"
            },
            vendedor:"Adolfo"
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
            ],
                
                fecha_de_venta: new Date("2018-12-16"),
                particular:true,
                cliente:{
                    nombre:"Juan",
                    dni:"12345678B"
                },
                vendedor:"Ruperta"
                
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
                ],
                    
                    fecha_de_venta: new Date("2006-12-16"),
                    particular:false,
                    cliente:{
                        nombre:"Pepe",
                        dni:"12345678C"
                    },
                    vendedor:"Adolfo"
                    
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
                    ],
                        
                        fecha_de_venta: new Date("2021-09-15"),
                        particular:false,
                        cliente:{
                            nombre:"Maricarmen",
                            dni:"12345678D"
                        },
                        vendedor:"Juan"
                        
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
                        ],
                            
                            fecha_de_venta: new Date("2021-09-15"),
                            particular:true,
                            cliente:{
                                nombre:"Maricarmen",
                                dni:"12345678E"
                            },
                            vendedor:"Juan"
                            
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
                        ],
                            
                            fecha_de_venta: new Date("2021-09-15"),
                            particular:false,
                            cliente:{
                                nombre:"Maricarmen",
                                dni:"12345678F"
                            },
                            vendedor:"Ruperta"
                            
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
                        ],
                            fecha_de_venta: new Date("2020-10-05"),
                            particular:true,
                            cliente:{
                                nombre:"David",
                                dni:"12345678T"
                            },
                            vendedor:"Juan"
                            
                        },

                
        

    ])