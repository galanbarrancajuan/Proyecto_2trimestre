//Lista con el numero de articulos comprados por los diferentes clientes ordenada de mayor a menor

db.ventas.aggregate([
    {
        $unwind:{
            path:"$objeto"
        }
    },
    {
        $group:{
            _id:"$cliente",
            soldUnits:{
                $sum:"$objeto.vendidos"
            }
        }
    },
    {
        $sort:{
            soldUnits:-1
        }
    }
])
// Lista de todos los articulos del restaurante y de sus vendedores
db.restaurantes.aggregate([
    {
        $lookup:{
            from:'ventas',
            localField:'codigo',
            foreignField:'id',
            as:'articulos'
        }
    }
]).pretty()

db.ventas.aggregate([
    {
        $unwind:"$vendedor",
        $group: {
            _id: "$id",
            numVentas: {$sum: 1}
        }
    }
])

// Queremos los codigo de cada venta con su vendedor

db.ventas.aggregate(
    [
        {
            $project: {
                id: 1,
                vendedor:1
            }
        }
    ]
).pretty()

// Queremos saber cuantas ventas han hecho cada vendedor

db.ventas.aggregate([
    {
      $group: {
        _id: "$vendedor",
        numberOfSale: {
          $sum:1,
        }
      }
    },
    {
        $sort:{
            numberOfSale:-1
        }
    }
  ])


//Media de dinero generado por cada vendedor


  db.ventas.aggregate([
    {
      $unwind: {
        path: "$objeto",
      },
    },
    {
      $group: {
        _id: "$vendedor",
        averageSeller: {
          $avg: {
            $multiply: ["$objeto.vendidos", "$objeto.precio"],
          },
        },
      },
    },
  ])

  //  Queremos separar de nuestra estructura, el id de cada venta y a que vendedor pertenece

  db.ventas.aggregate([
    {
        $project: {
            id: 1,
            vendedor: 1,
        }
    },

    { 
      $out: { 
        db: "test", 
        coll: "vendedores" 
      } 
  }
  ])

//Añadimos  un nuevo campo a vendedor llamado venta
  db.ventas.aggregate([
  {   
    $addFields: {
        vendedor: {
            $arrayElemAt: [ 
                '$venta',
                   0]
        }
   }
}
]).pretty()
