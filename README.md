<h1>APi </h1>
__**~~El header debes mandarlo con todo tipo Json~~**__
<h2>Loggin:</h2>
    <h4>post: <h6>/SessionStart</h6></h4>
      {
      	"user": "pedro.gonzalez@alumno.uttehuacan.edu.mx",
      	"password" : "123",
      	"Coordinate":{
      		"Latitud": "18.4466967",
      		"Longitud": "-97.4135775",
      		"Estado": "Puebla",
      		"Ciudad": "Tehuacan"
      	}
      }
      

        
        {"token":"eyJ0eXAiOiJKV1QiLCJhbGckcm8u"}
   <h4>Desencriptar:</h4>
        <h6>/decrypt</h6>
        {"token: "klasdk"}
        
        {
            "success": true,
            "info": {
                "success": true,
                "description": "Datos del Usuario",
                "result": [
                    {
                        "id_User": "9",
                        "Nombre": "Kristhel",
                        "Apellido_Pa": "Gonzalez",
                        "Apellido_Ma": "Hernandez",
                        "Correo": "kristel@k.com",
                        "ValidacionCorreo": "0",
                        "Status": "1",
                        "BootV": "0",
                        "RFC": "RFC",
                        "Descripcion": "Publico",
                        "Image": "Opcional"
                    }
                ]
            }
        }
        
<h2>Category:</h2> 
    <h4>put: <h6>/category</h6></h4>
        {
        	"NombreC": "Prueba2",
        	"id": "5"
        }
     <hr>
     <h4>/categoryImag</h4>
        {
        	"url": "https://talleractual.com/images/contenido/negocios-y-autopartes/mercado-local/mercado-de-posventa/2019/04/2019-04-26-talleres-mecanicos-como-evitar-multas-y-clausuras-1-01.jpg",
        	"idCategory": 1,
        	"Estado": "Puebla",
        	"Ciudad": "Tehuacán"
        }
        
        {"success":true,"description":"Imagen insertada y ?? Agregado"}    
         
   <h4>post: <h6>/category</h6></h4>
            {
              	"NombreC": "Prueba2",
              	"id": "5"
            }
      <hr>
   
   <h6>/categorys</h6>         
   <hr>
   
   
   {	
   	"Estado": "Puebla",
   	"Ciudad": "Tehuacan"
   }
   
     
       {
           "success": true,
           "description": "Detalles de las Categorias",
           "result": [
               {
                   "id_Category": "3",
                   "NombreC": "Mecanico",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fmechanic.jpg?alt=media&token=7823f484-5571-4f48-8d47-3a42aaadcd5a",
                   "identificador": "1",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "5",
                   "NombreC": "Eléctrico",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FLed.jpg?alt=media&token=5a04fe1f-9bf8-4453-941d-5ec4b254e586",
                   "identificador": "2",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "8",
                   "NombreC": "Hojalateía y Pintura",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fpriting.jpg?alt=media&token=0d452e77-16ac-4058-887d-c12d2f9e23e2",
                   "identificador": "3",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "17",
                   "NombreC": "Seguros",
                   "image": "https://img.autocosmos.com/noticias/fotosprinc/NAZ_8410233b1f60493981638dec5018cd65.jpg",
                   "identificador": "4",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "13",
                   "NombreC": "Cerrajero Automotriz",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fkeys.jpg?alt=media&token=b0919957-6dba-4ad1-8705-454d1514fd44",
                   "identificador": "5",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "11",
                   "NombreC": "Rectificadoras",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FRectificadora.jpg?alt=media&token=adf87098-1087-43b7-bc2f-f7cf9710a9b0",
                   "identificador": "6",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "10",
                   "NombreC": "Radiadores y Aire acondicionado",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fair.jpg?alt=media&token=3416ff0d-6cab-47fb-86ee-8fae6b6196b9",
                   "identificador": "7",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "9",
                   "NombreC": "Servicio Pesado ",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fheavy.jpg?alt=media&token=e90d2d9e-f270-4c89-8f1f-9f5905f1fbb5",
                   "identificador": "8",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "1",
                   "NombreC": "Servicios Especiales",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fforklift.jpg?alt=media&token=3661a9ad-1cf1-4baa-b34b-6c56b26f5d0b",
                   "identificador": "9",
                   "Images": {
                       "success": true,
                       "description": "Detalles de las Imagenes",
                       "result": [
                           {
                               "Descripcion": "https://talleractual.com/images/contenido/negocios-y-autopartes/mercado-local/mercado-de-posventa/2019/04/2019-04-26-talleres-mecanicos-como-evitar-multas-y-clausuras-1-01.jpg",
                               "id_Image": "51"
                           }
                       ]
                   }
               },
               {
                   "id_Category": "6",
                   "NombreC": "Transmisión",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FStandard_transmission.jpg?alt=media&token=294bd827-d7d3-4803-b333-f226c04842f6",
                   "identificador": "10",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "14",
                   "NombreC": "Suspención y Muelles",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fmuelle.jpg?alt=media&token=9a18f05d-e1df-4737-a020-619fbd946538",
                   "identificador": "11",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "15",
                   "NombreC": "Motos",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fmechanic.jpg?alt=media&token=7823f484-5571-4f48-8d47-3a42aaadcd5a",
                   "identificador": "12",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "16",
                   "NombreC": "Compra y Venta ",
                   "image": "https://rotativo.com.mx/assets//2018/03/compra-venta-de-autos-usados-696x522.jpg",
                   "identificador": "13",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               },
               {
                   "id_Category": "18",
                   "NombreC": "Grúas",
                   "image": "http://estaticos.qdq.com/swdata/home_photos/669/669148291/a2d27b20813b41d0aa0e0b42ea48404d.jpg",
                   "identificador": "14",
                   "Images": {
                       "success": true,
                       "description": "Detalles de las Imagenes",
                       "result": [
                           {
                               "Descripcion": "https://www.eloccidental.com.mx/local/inapq8-gruas-para-autos-coches-y-vehiculos-en-leon-gto.jpg/ALTERNATES/LANDSCAPE_400/gruas-para-autos-coches-y-vehiculos-en-leon-gto.jpg",
                               "id_Image": "50"
                           }
                       ]
                   }
               },
               {
                   "id_Category": "12",
                   "NombreC": "Autolavados",
                   "image": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2Fcarwash.jpg?alt=media&token=9b13a53b-6551-4352-b47a-1b4c4deb71c8",
                   "identificador": "15",
                   "Images": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Imagenes"
                   }
               }
           ]
       }
    
   <hr>         
      
   <h6>/categoria/{id}</h6>
       {
       	"Latitud": "18.4386108",
       	"Longitud": "-97.41339",
       	"idUser": 1
       }
      <hr>
     
               {
                   "1k": [],
                   "5k": [
                       {
                            "id_User": "3",
                                       "id_Workshop": "2",
                                       "NumberWhatsapp": "",
                                       "EncargadoNombre": "Jose Miguel",
                                       "EncargadoApellidoPA": "Carrera",
                                       "EncargadoApellidoMA": "Pacheco",
                                       "HoraApertura": "10:28:00",
                                       "HoraCierre": "23:44:28",
                                       "NombreC": "Mecanico",
                                       "NombreTaller": "Taller Mecánico Zárate",
                                       "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                       "Latitud": "18.4709522",
                                       "Longitud": "-97.3983035",
                                       "Estado": "Veracurz",
                                       "Ciudad": "Mendoza",
                                       "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                                       "Favourite": "0",
                                       "EstadoLocal": "Abierto",
                           "Services": null,
                           "WorkShop": {
                               "success": false,
                               "notFound": true,
                               "description": "Sin Tallers"
                           },
                           "Phone": {
                               "success": true,
                               "description": "Phone",
                               "result": [
                                   {
                                       "Numero": "1572751",
                                       "Lada": "238",
                                       "CodigoPais": "+52"
                                   }
                               ]
                           },
                           "Address": [
                               {
                                   "id_Workshop": "15",
                                   "Street": "Av. de la Juventud",
                                   "Colony": "El Humilladero",
                                   "Number": "1964",
                                   "InteriorNumber": "0"
                               }
                           ],
                           "Images": {
                               "success": false,
                               "notFound": true,
                               "description": "Sin Imagenes"
                           },
                           "Distancia": 3221.74
                       },
                       {
                           "id_Workshop": "16",
                           "NumberWhatsapp": "2385936813",
                           "EncargadoNombre": "Gabriel",
                           "EncargadoApellidoPA": "de los Santos",
                           "EncargadoApellidoMA": "Trujillo",
                           "NombreC": "Mecanico",
                           "NombreTaller": "Amortiguadores Reconstruidos Orizaba",
                           "Descripcion": "Servicio de Amortiguadores",
                           "Latitud": "18.4438057",
                           "Longitud": "-97.3833257",
                           "Estado": "Puebla",
                           "Ciudad": "Tehuacan",
                           "Image_P": "",
                           "Services": null,
                           "WorkShop": {
                               "success": false,
                               "notFound": true,
                               "description": "Sin Tallers"
                           },
                           "Phone": {
                               "success": true,
                               "description": "Phone",
                               "result": [
                                   {
                                       "Numero": "1572751",
                                       "Lada": "238",
                                       "CodigoPais": "+52"
                                   }
                               ]
                           },
                           "Address": [
                               {
                                   "id_Workshop": "16",
                                   "Street": "Av. de la Juventud",
                                   "Colony": "El Humilladero",
                                   "Number": "1964",
                                   "InteriorNumber": "0"
                               }
                           ],
                           "Images": {
                               "success": false,
                               "notFound": true,
                               "description": "Sin Imagenes"
                           },
                           "Distancia": 3221.74
                       },
                       {
                           "id_Workshop": "2",
                           "NumberWhatsapp": "",
                           "EncargadoNombre": "Jose Miguel",
                           "EncargadoApellidoPA": "Carrera",
                           "EncargadoApellidoMA": "Pacheco",
                           "NombreC": "Mecanico",
                           "NombreTaller": "Taller Mecánico Zárate",
                           "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                           "Latitud": "18.4709522",
                           "Longitud": "-97.3983035",
                           "Estado": "Veracurz",
                           "Ciudad": "Mendoza",
                           "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                           "Services": null,
                           "WorkShop": {
                               "success": false,
                               "notFound": true,
                               "description": "Sin Tallers"
                           },
                           "Phone": {
                               "success": false,
                               "notFound": true,
                               "description": "Sin Phone"
                           },
                           "Address": {
                               "success": false,
                               "notFound": true,
                               "description": "Direccion no encontrada"
                           },
                           "Images": {
                               "success": true,
                               "description": "Todo bien",
                               "result": [
                                   {
                                       "Descripcion": "https://www.guia33.com/wp-content/uploads/cache/images/remote/www-guia33-com/guia33-cornella-automocion-taller-tallers-travessera-cornella-14924-513580225.jpg",
                                       "id_Workshop": "2"
                                   },
                                   {
                                       "Descripcion": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_JxsCKVDukxOYZwGTQQpZf8XMNSJRXHPuW63cj9C2wUgROlg",
                                       "id_Workshop": "2"
                                   }
                               ]
                           },
                           "Distancia": 3930.37
                       }
                   ],
                   "10k": [],
                   ">10k": [],
                   "Count": 3,
                   "success": true
               }
   <hr>
   <h4>get:</h4>
        <h6>/category/{id}</h6>
        
    {"result":{"success":true,"description":"Detalles de la Categoria","result":[{"id_Category":"5","NombreC":"Prueba2"}]}} 
       
   
<h2>WorkShop</h2>
    <h4>post: <h6>/workshop</h6></h4>
 {
 	"Addrees":{
 		"Street":{
 			"Street": "Nardo"
 		},
 		"Colony":{
 			"Colony": "Bella Vista"
 		},
 		"Numbers":{
 			"Number": "3905",
 			"InteriorNumber": "0"
 		}
 	},
 	"WorkShop":{
 		"NombreTaller": "PrueabaRelacion",
 		"Descripcion": "Direccion",
 		"EncargadoNombre": "Ricardo",
 		"EncargadoApellidoPA": "Gonzalez",
 		"EncargadoApellidoMA": "Hernandez",
 		"NumberWhatsapp": "2381030200",
 		"Image_P": "urlP",
		"HoraApertura": "10:28:00" ,
		"HoraCierre": "23:44:2"
 	},
 	"Coordinate":{
 		"Latitud": "18.4466967",
 		"Longitud": "-97.4135775",
 		"Estado": "Puebla",
 		"Ciudad": "Tehuacan"
 	},
 	"Images":[
 			"url",
 			"url1",
 			"url2"
 		],
 	"Phone":{
 		"Numero": "2381928913",
 		"CodigoPais":"+53",
 		"Lada": "048"	
 	},
 	"Id_User": 3
 }
   <hr>
     
    {"succes":true,"description":"Taller ingresado","id_WorkShop": $idTaller}
   <hr> 
   <h4>get:<h6>/workshopMax/{id}</h6></h4>
   
     {"success":true,"description":"Detalles de las Categorias","result":[{"NombreTaller":"Taller Mecanico Rojas","Descripcion":"Calle V\u00eda Puebla, Aquiles Serd\u00e1n, Tehuac\u00e1n, Pue.","EncargadoNombre":"Pedro","EncargadoApellidoPA":"ApellidoPA","EncargadoApellidoMA":"Apppe","Numero":"2147483647","Lada":"044","CodigoPais":"+52"},{"NombreTaller":"Pedro Taller","Descripcion":"Calle","EncargadoNombre":"Carlos Antonio","EncargadoApellidoPA":"Mendez","EncargadoApellidoMA":"Mendez","Numero":"23855555","Lada":"045","CodigoPais":"+52"}]}

<h6>/workshopE/{idUser}</h6>
    
        {"success":true,"description":"Detalles sus talleres","result":[{"id_Workshop":"1","NombreTaller":"Taller Mecanico
        Rojas","Descripcion":"Compromiso por la calidad, rapidez, confianza en el trabajo y lo m\u00e1s importante, la seguridad
        e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que d\u00eda a
        d\u00eda trabaja por ofrecer el mejor servicio integral automotriz desde hace m\u00e1s de 40
        a\u00f1os.","EncargadoNombre":"Pedro","EncargadoApellidoPA":"ApellidoPA","EncargadoApellidoMA":"Apppe","Latitud":"18.4711583","Longitud":"-97.3987217","Estado":"Puebla","Ciudad":"Tehuacan","Image_P":"https:\/\/firebasestorage.googleapis.com\/v0\/b\/alloncars-d4cb6.appspot.com\/o\/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d","Service":{"success":false,"notFound":true,"description":"Sin
        Servicios"},"Address":{"success":false,"notFound":true,"description":"Direccion no encontrada"}}]}
        
<h6>/workshopEditable/{idUser}</h6>
            
            {
                "success": true,
                "description": "Total",
                "Count": 1,
                "result": [
                    {
                        "Editable": "1",
                        "Status": "1",
                        "id_Workshop": "3"
                    }
                ]
            }
            
<h6>/workshopActivos/{idUser}</h6>   


        {
            "success": true,
            "description": "Total",
            "Count": 2,
            "result": [
                {
                    "Editable": "1",
                    "Status": "1",
                    "id_Workshop": "1"
                },
                {
                    "Editable": "0",
                    "Status": "1",
                    "id_Workshop": "5"
                }
            ]
        }         

<h6>workshop\{id}</h6>
    
        {
            "success": true,
            "description": "Detalles sus talleres",
            "result": [
                {
                    "id_Workshop": "3",
                    "NombreTaller": "Grúas Tehuacán",
                    "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                    "EncargadoNombre": "Bricia",
                    "EncargadoApellidoPA": "Suarez",
                    "EncargadoApellidoMA": "Osorio",
                    "Latitud": "18.8345851",
                    "Longitud": "-97.120737",
                    "Estado": "Veracruz",
                    "Ciudad": "mendoza",
                    "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                    "Service": {
                        "success": true,
                        "description": "Total de Servicios del Teller Solicitado",
                        "result": [
                            {
                                "id_Service": "3",
                                "Nombre": "Gruas",
                                "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                "NombreC": "Servicios Especiales",
                                "NombreTaller": "Grúas Tehuacán"
                            }
                        ]
                    },
                    "Address": [
                        {
                            "id_Workshop": "3",
                            "Street": "271-3956 Risus. St.",
                            "Colony": "Guernsey",
                            "Number": "1980",
                            "InteriorNumber": "918"
                        }
                    ]
                }
            ]
        }
        
<h6>/workshopP/{id}</h6>

                {
                    "success": true,
                    "description": "Detalles sus talleres",
                    "result": [
                        {
                            "id_Workshop": "3",
                            "NombreTaller": "Grúas Tehuacán",
                            "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                            "EncargadoNombre": "Bricia",
                            "EncargadoApellidoPA": "Suarez",
                            "EncargadoApellidoMA": "Osorio",
                            "Latitud": "18.8345851",
                            "Longitud": "-97.120737",
                            "Estado": "Veracruz",
                            "Ciudad": "mendoza",
                            "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                            "Service": {
                                "success": true,
                                "description": "Total de Servicios del Teller Solicitado",
                                "result": [
                                    {
                                        "id_Service": "3",
                                        "Nombre": "Gruas",
                                        "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                        "NombreC": "Servicios Especiales",
                                        "NombreTaller": "Grúas Tehuacán"
                                    }
                                ]
                            },
                            "Address": [
                                {
                                    "id_Workshop": "3",
                                    "Street": "271-3956 Risus. St.",
                                    "Colony": "Guernsey",
                                    "Number": "1980",
                                    "InteriorNumber": "918"
                                }
                            ]
                        }
                    ]
                }

<h4>put: <h6>/workshop</h6></h4>
{
	"idWorkShop": 1,
	"WorkShop":{
		"Status": 0
	},
	"Addrees":{
		"Street":{
			"Street": "Av. de la Juventud"
		},
		"Colony":{
			"Colony": "El Humilladero"
		},
		"Numbers":{
			"Number": "1964",
			"InteriorNumber": ""
		}
	},
	"Coordinate":{
		"Latitud": "18.4438057",
		"Longitud": "-97.3833257",
		"Estado": "Mexico",
		"Ciudad": "Tehuacan"
	},
	"Phone":{
		"Numero": "1572751",
		"CodigoPais":"+22",
		"Lada": "222"	
	}
}

    {"success":true,"info":"Todo bien"}
    
    
<h4>put: <h6>/workshopDelete</h6></h4>    
    //Status Eliminado  =====   D
    {
        "idWorkShop":  1 
    }
    
    
<h2>Service:</h2>
    <h4>put:<h6>/service</h6></h4>
    {
    	"service":{
    		"Nombre": "Cambio de Balatas 1",
    		"Descripcion": "Cambio de balatas",
    		"id_Category": "2",
    		"Status": 1
    	},
    	"idService": 1
    }
        
        {"success":true,"description":"Modificacion Service"}
         
   <h4>get:<h6>/services</h6></h4>
    
                {"success":true,"description":"Total de Servicios","result":[{"id_Service":"1","Nombre":"Cambio de Balatas","Descripcion":"Cambio de balatas Traceras"},{"id_Service":"2","Nombre":"Cambio de bujes","Descripcion":"Cambio de Bujes"},{"id_Service":"3","Nombre":"Gruas","Descripcion":"Remolque las 24 horas"},{"id_Service":"4","Nombre":"Renta de Torton","Descripcion":"Viaje de Graba"},{"id_Service":"5","Nombre":"Trailer","Descripcion":"Material Radioactivo"},{"id_Service":"6","Nombre":"Trailer Pruaba","Descripcion":"Material Radioactivo"},{"id_Service":"7","Nombre":"Trailer Pruaba","Descripcion":"Material Radioactivo"}]}
   <h6>/servicesI/{idCategory}</h6>
                
                {
                    "success": true,
                    "result": [
                        {
                            "Nombre": "Gruas",
                            "Repetidas": "1"
                        },
                        {
                            "Nombre": "Renta de Torton",
                            "Repetidas": "1"
                        },
                        {
                            "Nombre": "Trailer",
                            "Repetidas": "1"
                        },
                        {
                            "Nombre": "Trailer Pruaba",
                            "Repetidas": "1"
                        }
                    ]
                }
                      
   <h4>get:<h6>/serviceWorkShop/{id}</h6></h4>
    
    {"success":true,"description":"Total de Servicios del Teller Solicitado","result":[{"id_Service":"1","Nombre":"Cambio de Balatas","Descripcion":"Calle 8 Pte. 402, Cerritos, 75731 Tehuac\u00e1n, Pue.","NombreC":"Mecanico","NombreTaller":"Taller Mec\u00e1nico Z\u00e1rate"},{"id_Service":"2","Nombre":"Cambio de bujes","Descripcion":"Calle 8 Pte. 402, Cerritos, 75731 Tehuac\u00e1n, Pue.","NombreC":"Mecanico","NombreTaller":"Taller Mec\u00e1nico Z\u00e1rate"}]}
   <hr>   
    <h4>post:<h6>/service</h6></h4>
    {
    	"Nombre": "Trailer",
    	"Descripcion": "Material Radioactivo",
    	"id_Category": 1,
    	"id_WorkShop": 2
    }   <hr>
    
    {"succes":true,"description":"Registro insertado","idSer":"7"}
   <hr>
   <h6>/BuscadorService/{Frase}</h6>
    {
    	"Latitud": "0",
    	"Longitud": "0",
    	"idUser": 1
    }
     
            {
                "1k": [],
                "5k": [],
                "10k": [],
                ">10k": [
                    {
                        "id_Workshop": "16",
                        "NumberWhatsapp": "2385936813",
                        "NombreTaller": "Amortiguadores Reconstruidos Orizaba",
                        "Latitud": "18.4438057",
                        "Estado": "Puebla",
                        "Ciudad": "Tehuacan",
                        "Longitud": "-97.3833257",
                        "Image_P": "",
                        "Favourite": 0,
                        "Services": null,
                        "WorkShops": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Talleres"
                        },
                        "Address": [
                            {
                                "id_Workshop": "16",
                                "Street": "Av. de la Juventud",
                                "Colony": "El Humilladero",
                                "Number": "1964",
                                "InteriorNumber": "0"
                            }
                        ],
                        "Images": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Imagenes"
                        },
                        "Distancia": 10780218.64
                    },
                    {
                        "id_Workshop": "15",
                        "NumberWhatsapp": "2381030200",
                        "NombreTaller": "Amortiguadores Reconstruidos Orizaba",
                        "Latitud": "18.4438057",
                        "Estado": "Puebla",
                        "Ciudad": "Tehuacan",
                        "Longitud": "-97.3833257",
                        "Image_P": "",
                        "Favourite": 0,
                        "Services": null,
                        "WorkShops": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Talleres"
                        },
                        "Address": [
                            {
                                "id_Workshop": "15",
                                "Street": "Av. de la Juventud",
                                "Colony": "El Humilladero",
                                "Number": "1964",
                                "InteriorNumber": "0"
                            }
                        ],
                        "Images": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Imagenes"
                        },
                        "Distancia": 10780218.64
                    },
                    {
                        "id_Workshop": "5",
                        "NumberWhatsapp": "",
                        "NombreTaller": "Pedro Taller",
                        "Latitud": "18.4466967",
                        "Estado": "Puebla",
                        "Ciudad": "Tehuacan",
                        "Longitud": "-97.4135775",
                        "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                        "Favourite": 0,
                        "Services": null,
                        "WorkShops": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Talleres"
                        },
                        "Address": [
                            {
                                "id_Workshop": "5",
                                "Street": "721-661 Eu Rd.",
                                "Colony": "Guernsey",
                                "Number": "6592",
                                "InteriorNumber": "1740"
                            }
                        ],
                        "Images": {
                            "success": true,
                            "description": "Todo bien",
                            "result": [
                                {
                                    "Descripcion": "http://www.tallerszamora.com/wp-content/uploads/2014/09/small1.jpg",
                                    "id_Workshop": "5"
                                },
                                {
                                    "Descripcion": "https://www.guia33.com/wp-content/uploads/cache/images/remote/www-guia33-com/guia33-cornella-automocion-taller-tallers-travessera-cornella-14924-513580225.jpg",
                                    "id_Workshop": "5"
                                }
                            ]
                        },
                        "Distancia": 10783392.04
                    },
                    {
                        "id_Workshop": "9",
                        "NumberWhatsapp": "",
                        "NombreTaller": "PrueabaRelacion",
                        "Latitud": "18.4466967",
                        "Estado": "Puebla",
                        "Ciudad": "Tehuacan",
                        "Longitud": "-97.4135775",
                        "Image_P": "",
                        "Favourite": 0,
                        "Services": null,
                        "WorkShops": {
                            "success": true,
                            "description": "Detalles de las Talleres",
                            "result": [
                                {
                                    "id_Workshop": "9",
                                    "NombreTaller": "PrueabaRelacion",
                                    "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                    "EncargadoNombre": "Ricardo",
                                    "EncargadoApellidoPA": "Gonzalez",
                                    "EncargadoApellidoMA": "Hernandez",
                                    "Numero": "2147483647",
                                    "Lada": "048",
                                    "CodigoPais": "+53",
                                    "Latitud": "18.4466967",
                                    "Longitud": "-97.4135775",
                                    "Estado": "Puebla",
                                    "Ciudad": "Tehuacan",
                                    "Services": null,
                                    "Address": [
                                        {
                                            "id_Workshop": "9",
                                            "Street": "P.O. Box 149, 731 Nunc Ave",
                                            "Colony": "China",
                                            "Number": "2874",
                                            "InteriorNumber": "1247"
                                        }
                                    ],
                                    "WorkShop": {
                                        "success": false,
                                        "notFound": true,
                                        "description": "Sin Tallers"
                                    }
                                },
                                {
                                    "id_Workshop": "11",
                                    "NombreTaller": "PrueabaRelacion",
                                    "Descripcion": "Direccion",
                                    "EncargadoNombre": "Ricardo",
                                    "EncargadoApellidoPA": "Gonzalez",
                                    "EncargadoApellidoMA": "Hernandez",
                                    "Numero": "2381928913",
                                    "Lada": "048",
                                    "CodigoPais": "+53",
                                    "Latitud": "18.4466967",
                                    "Longitud": "-97.4135775",
                                    "Estado": "Puebla",
                                    "Ciudad": "Tehuacan",
                                    "Services": null,
                                    "Address": [
                                        {
                                            "id_Workshop": "11",
                                            "Street": "Nardo",
                                            "Colony": "Bella Vista",
                                            "Number": "3905",
                                            "InteriorNumber": "0"
                                        }
                                    ],
                                    "WorkShop": {
                                        "success": false,
                                        "notFound": true,
                                        "description": "Sin Tallers"
                                    }
                                },
                                {
                                    "id_Workshop": "12",
                                    "NombreTaller": "mas",
                                    "Descripcion": "Direccion",
                                    "EncargadoNombre": "Ricardo",
                                    "EncargadoApellidoPA": "Gonzalez",
                                    "EncargadoApellidoMA": "Hernandez",
                                    "Numero": "2381928913",
                                    "Lada": "048",
                                    "CodigoPais": "+53",
                                    "Latitud": "18.4466967",
                                    "Longitud": "-97.4135775",
                                    "Estado": "Puebla",
                                    "Ciudad": "Tehuacan",
                                    "Services": null,
                                    "Address": [
                                        {
                                            "id_Workshop": "12",
                                            "Street": "Nardo",
                                            "Colony": "",
                                            "Number": "3905",
                                            "InteriorNumber": "0"
                                        }
                                    ],
                                    "WorkShop": {
                                        "success": false,
                                        "notFound": true,
                                        "description": "Sin Tallers"
                                    }
                                },
                                {
                                    "id_Workshop": "13",
                                    "NombreTaller": "mas",
                                    "Descripcion": "Direccion",
                                    "EncargadoNombre": "Ricardo",
                                    "EncargadoApellidoPA": "Gonzalez",
                                    "EncargadoApellidoMA": "Hernandez",
                                    "Numero": "2381928913",
                                    "Lada": "048",
                                    "CodigoPais": "+53",
                                    "Latitud": "18.4466967",
                                    "Longitud": "-97.4135775",
                                    "Estado": "Puebla",
                                    "Ciudad": "Tehuacan",
                                    "Services": null,
                                    "Address": [
                                        {
                                            "id_Workshop": "13",
                                            "Street": "Nardo",
                                            "Colony": "",
                                            "Number": "3905",
                                            "InteriorNumber": "0"
                                        }
                                    ],
                                    "WorkShop": {
                                        "success": false,
                                        "notFound": true,
                                        "description": "Sin Tallers"
                                    }
                                },
                                {
                                    "id_Workshop": "14",
                                    "NombreTaller": "Fecha",
                                    "Descripcion": "alskdnklas",
                                    "EncargadoNombre": "Pedro",
                                    "EncargadoApellidoPA": "Gonzalez",
                                    "EncargadoApellidoMA": "Hernandez",
                                    "Numero": "1696154",
                                    "Lada": "238",
                                    "CodigoPais": "+52",
                                    "Latitud": "18.4466967",
                                    "Longitud": "-97.4135775",
                                    "Estado": "Puebla",
                                    "Ciudad": "Tehuacan",
                                    "Services": null,
                                    "Address": [
                                        {
                                            "id_Workshop": "14",
                                            "Street": "Calle 7 Oriente",
                                            "Colony": "Colonia del empleado",
                                            "Number": "311",
                                            "InteriorNumber": "0"
                                        }
                                    ],
                                    "WorkShop": {
                                        "success": false,
                                        "notFound": true,
                                        "description": "Sin Tallers"
                                    }
                                }
                            ]
                        },
                        "Address": [
                            {
                                "id_Workshop": "9",
                                "Street": "P.O. Box 149, 731 Nunc Ave",
                                "Colony": "China",
                                "Number": "2874",
                                "InteriorNumber": "1247"
                            }
                        ],
                        "Images": {
                            "success": true,
                            "description": "Todo bien",
                            "result": [
                                {
                                    "Descripcion": "http://tallersegria.com/showImage/54cb6d2d2925bf4224000017",
                                    "id_Workshop": "9"
                                },
                                {
                                    "Descripcion": "http://www.tallersautoada.com/wp-content/uploads/2017/04/fa%C3%A7ana_autoada.jpg",
                                    "id_Workshop": "9"
                                },
                                {
                                    "Descripcion": "http://www.tallerssantaeulalia.com/wp-content/uploads/2015/11/taller-11.jpg",
                                    "id_Workshop": "9"
                                }
                            ]
                        },
                        "Distancia": 10783392.04
                    }
                ],
                "Count": 4,
                "success": true
            }
        
   <hr>
<h2>Phone:</h2>
    <h4>post:<h6>/phone</h6></h4>
    {
    	{
        "Phone":{
        		"Numero": "2381928913",
        		"CodigoPais":"+53",
        		"Lada": "048"	
        	}
        	
        }
    } 
   <hr>
  
     {"succes":true,"description":"Registro insertado","idPhone":"2"}
   <hr>
   <h6>/Rphone</h6>
   {
   	"id_Phone": "5",
   	"id_Workshop": "1"
   }<hr>
   
    {"success":true,"description":"Relacion Realizada Phone ?=? WorkShop"}
    
   <hr>
<h2>User:</h2>
<h4>put:<h6>/updateUser</h6></h4>
    {
    	"Tipo": "Image", ---Todo-----Phone-----Image-----User---
    	"idUser": 1,
    	"Phone":{
    		"Numero": "2381892669",
    		"Lada": "049",
    		"CodigoPais": "+56"
    	},
    	"User":{
    		"Nombre": "José Miguel",
    		"Apellido_Pa": "Carrera",
    		"Apellido_Ma": "Pacheco",
    		"Correo": "kalio@gmail.com",
    		"TerminosC": 1
    	},
    	"Image":{
    		"url": "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
    	}
    }
    
        {"success":true,"description":"Ingreso correcto de Relacion"}
    
<h4>post:<h6>/insertUser</h6></h4>
   {
   	"Nombre": "Jorge",
   	"Apellido_Pa": "Mendez",
   	"Apellido_Ma": "Sanches",
   	"Correo": "chivo@k.com",
   	"RFC": "RFC",
   	"id_TP": "2",
   	"Password":"123",
   	"URLImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUIt6djMKLK2HEQzfop2_6v0Ml4CKjJjW6LTEwQ-xAglYwdigLA",
   	"Phone":{
   		"Numero": "2381928913",
   		"CodigoPais":"+53",
   		"Lada": "048"	
   	}
   	
   }
    
        {"succes":true,"description":"Usuario ingresado"}
        {"success":false,"info":"El correo ya fue registrado"}
        
   <h4>get: <h6>/TypeUserCliente/{id}</h6><h4>
            
            {success' : true, 'description':'Usuario Modificado Tipo de Usuario : Cliente'};
        
   <h4>get: <h6>/perfil/{id} </h6></h4>
       
      {
          "success": true,
          "description": "Datos del Usuario",
          "result": [
              {
                  "id_User": "2",
                  "Nombre": "José Miguel",
                  "Apellido_Pa": "Carrera",
                  "Apellido_Ma": "Pacheco",
                  "Correo": "kalio@gmail.com",
                  "ValidacionCorreo": "1",
                  "Status": "1",
                  "BootV": "0",
                  "RFC": null,
                  "Descripcion": "Cliente",
                  "Image": "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
              }
          ],
          "Phone": {
              "success": true,
              "description": "id Phone",
              "result": [
                  {
                      "id_Phone": "11",
                      "Numero": "2381892669",
                      "Lada": "049",
                      "CodigoPais": "+56"
                  }
              ]
          }
      }
<h2>Correo:</h2>        
    <h4>post:<h6>/EnviarCorreo</h6></h4>
    {
    	"Recuperacion": true,
    	"Email": "pedro.gonzalez@alumno.uttehuacan.edu.mx"
    }
    
        {"success":false,"info":"SMTP connect() failed. https:\/\/github.com\/PHPMailer\/PHPMailer\/wiki\/Troubleshooting"}
        
        {"success":true,"info":"Correo
        Enviado","result:":{"id_User":"1","Fecha":"2019-09-03","Hora":"03:28:28","Clave":782351}}
   <h6>/EnviarCorreo</h6>   
  {
  	"Automatica": true,
  	"Email": "pedro.gonzalez@alumno.uttehuacan.edu.mx",
  	"Password": "pedro123",
  	"idUser": 1
  }
    
     {"success":false,"info":"SMTP connect() failed. https:\/\/github.com\/PHPMailer\/PHPMailer\/wiki\/Troubleshooting"}
           
     {"success":true,"info":"Mensaje Enviado"}
<h4>Recuperación</h4>
    <h6>/PassRecovery</h6>   
    {
    	"Password": 123,
    	"idUser": 1
    }
    
        {
            "success": true,
            "description": "Contresaña Modificada"
        }
  
<h2>Pagos</h2>
    <h4>post:<h6>/PagonUno</h6></h4>
    {
    	"idUser": 1,
    	"token": "ñasndñmasñl",
    	"card": "12312313",
    	"description": "description",
    	"total":100
    }
    
   <h6>/Plane</h6>
   {
   	"Name": "Plan Basico",
   	"amout": 100,
   	"frequency": 1
   }
    
    {"succes":true,"description":"Plan Guardado"}

<h2>Version</h2>
    <h4>get: <h6>/version/{version}</h6></h4>
    
        array('success' => true, 'description' => 'Versión agregada');
    
   <h6>/version</h6>
            
            {"success":true,"description":"Ultima Versi\u00f3n","result":[{"ID":"2"}]}   
<h2>Favorite</h2>
<h4>get: <h6>\Favorite\1</h6></h4>

        {
            "success": true,
            "description": "Datos Favoritos",
            "result": [
                {
                    "id_Workshop": "1",
                    "NombreTaller": "Taller Mecanico Rojas",
                    "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                    "EncargadoNombre": "Pedro",
                    "EncargadoApellidoPA": "ApellidoPA",
                    "EncargadoApellidoMA": "Apppe",
                    "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                    "Latitud": "18.4711583",
                    "Longitud": "-97.3987217",
                    "Estado": "Puebla",
                    "Ciudad": "Tehuacan",
                    "Like": "1",
                    "Services": {
                        "success": true,
                        "description": "Total de Servicios del Teller Solicitado",
                        "result": [
                            {
                                "id_Service": "1",
                                "Nombre": "Cambio de Balatas 1",
                                "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                "NombreC": null,
                                "NombreTaller": "Taller Mecanico Rojas"
                            },
                            {
                                "id_Service": "2",
                                "Nombre": "Cambio de bujes",
                                "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                "NombreC": "Mecanico",
                                "NombreTaller": "Taller Mecanico Rojas"
                            }
                        ]
                    },
                    "WorkShops": {
                        "success": false,
                        "notFound": true,
                        "description": "Sin Talleres"
                    },
                    "Address": [
                        {
                            "id_Workshop": "1",
                            "Street": "101-3221 Lorem Ave",
                            "Colony": "Indonesia",
                            "Number": "6592",
                            "InteriorNumber": "1740"
                        }
                    ],
                    "Images": {
                        "success": true,
                        "description": "Todo bien",
                        "result": [
                            {
                                "Descripcion": "http://www.tallerszamora.com/wp-content/uploads/2014/09/small1.jpg",
                                "id_Workshop": "1"
                            },
                            {
                                "Descripcion": "http://tallersegria.com/showImage/54cb6d2d2925bf4224000017",
                                "id_Workshop": "1"
                            }
                        ]
                    }
                },
                {
                    "id_Workshop": "3",
                    "NombreTaller": "Grúas Tehuacán",
                    "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                    "EncargadoNombre": "Bricia",
                    "EncargadoApellidoPA": "Suarez",
                    "EncargadoApellidoMA": "Osorio",
                    "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                    "Latitud": "18.8345851",
                    "Longitud": "-97.120737",
                    "Estado": "Puebla",
                    "Ciudad": "Tehuacan",
                    "Like": "0",
                    "Services": {
                        "success": true,
                        "description": "Total de Servicios del Teller Solicitado",
                        "result": [
                            {
                                "id_Service": "3",
                                "Nombre": "Gruas",
                                "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                                "NombreC": "Servicios Especiales",
                                "NombreTaller": "Grúas Tehuacán"
                            }
                        ]
                    },
                    "WorkShops": {
                        "success": false,
                        "notFound": true,
                        "description": "Sin Talleres"
                    },
                    "Address": [
                        {
                            "id_Workshop": "3",
                            "Street": "271-3956 Risus. St.",
                            "Colony": "Guernsey",
                            "Number": "1980",
                            "InteriorNumber": "918"
                        }
                    ],
                    "Images": {
                        "success": true,
                        "description": "Todo bien",
                        "result": [
                            {
                                "Descripcion": "https://www.guia33.com/wp-content/uploads/cache/images/remote/www-guia33-com/guia33-cornella-automocion-taller-tallers-travessera-cornella-14924-513580225.jpg",
                                "id_Workshop": "3"
                            },
                            {
                                "Descripcion": "http://www.tallerszamora.com/wp-content/uploads/2014/09/small1.jpg",
                                "id_Workshop": "3"
                            }
                        ]
                    }
                }
            ]
        }


    
<h4>post: <h6>/toogleFavorite</h6></h4> 
       {
       	"idUser": 1,
       	"idWorkshop": 3,
       	"Like": 0
       }
       
        {"success":true,"description":"Cambio del Registro sin problema"}
<h2>History</h2>
    <h4>post:<h6>/History</h6></h4>    
    {
    	"id_User": 1,
    	"id_WorkShop": 9
    }
    
        {"success":true,"description":"Historia Agregado"}
   <h4>get: <h6>/History/{idUser}</h6> </h4>
   
            {
                "success": true,
                "description": "Todo bien",
                "result": [
                    {
                        "Hora": "10:24:15",
                        "Fecha": "2019-09-08",
                        "NombreTaller": "Pedro Taller",
                        "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d"
                    },
                    {
                        "Hora": "19:59:20",
                        "Fecha": "2019-09-08",
                        "NombreTaller": "PrueabaRelacion",
                        "Image_P": ""
                    }
                ]
            }
            
<h2>SessionStart</h2> 
    <h4>post: <h6>/InserSession</h6></h4>  
    {
    	"idUser": 1,
    		"Coordinate":{
        		"Latitud": "18.4466967",
        		"Longitud": "-97.4135775",
        		"Estado": "Puebla",
        		"Ciudad": "Tehuacan"
        	}
    }
    
        {"success":true,"description":"Session agregada"}         

<h2>Pagos</h2> 
<h4>get:</h4>
<h6>/Payment/{id}</h6>
 
        {
            "success": true,
            "description": "Pagos del usuario",
            "result": [
                {
                    "id_Ordere": "10",
                    "Description": "Prueba Face",
                    "FechaFinal": "2019-11-23",
                    "Fecha": "2019-10-26",
                    "Total": "100",
                    "name": "Plan Basico",
                    "frequency": "1"
                },
                {
                    "id_Ordere": "11",
                    "Description": "Prueba Face",
                    "FechaFinal": "2019-11-24",
                    "Fecha": "2019-10-26",
                    "Total": "100",
                    "name": "Plan Basico",
                    "frequency": "1"
                },
                {
                    "id_Ordere": "12",
                    "Description": "Prueba Face",
                    "FechaFinal": "2019-11-26",
                    "Fecha": "2019-10-26",
                    "Total": "100",
                    "name": "Plan Basico",
                    "frequency": "1"
                },
                {
                    "id_Ordere": "13",
                    "Description": "Prueba Todo bien",
                    "FechaFinal": "2019-11-26",
                    "Fecha": "2019-10-26",
                    "Total": "350",
                    "name": "Plan Basico",
                    "frequency": "1"
                }
            ]
        }

<h4>post: <h6>\AddCard</h6></h4>       
            {
            	"idUser": 2,
            	"token": "tok_test_visa_4242"
            }
           
                    {"succes":false,"info":"Aun no es cliente de coneckta"}
                    {"succes":true,"info":"Si"}
                    


<h6>/Payment</h6>
{
	"idUser": 2,
	"Order":{
		"PaymentType": "faceToFace" ,
		"Total": 0,
		"Description":  "Pruebas",
		"Status": "paid"
	},
	"Plane":{
		"id_Planes":3,
		"month": 1
	},
	"Workshop":{
		"id": 1
	}
}


   {"success":true,"description":"Taller Modificado"}
   
                 
                   
<h6>/OdenesPago</h6>
{
	"idUser": 2,
	"typePyment": "card" ,
	"Total": 350,
	"description":  "Prueba Todo bien",
	"ConTar": false,
	"token": "tok_test_amex_8431",
	"idCard": "src_2mKdrveFvU2KJgTMD",
	"Plane":{
		"id_Planes":3,
		"month":1
	}
}
//Mejor lo platicamos hasta yo me enrrede

                    
<h2>RepairShop</h2>
<h4>post: <h6>/insertReparirShop</h6></h4>
    {
    	"Coordinate":{
    		"Latitud": "18.4466967",
    		"Longitud": "-97.4135775",
    		"Estado": "Puebla",
    		"Ciudad": "Tehuacan"
    	},
    	"idUser":"10",
    	"Numero":"2398763456",
    	"Lada":"044",
    	"CodigoPais":"+52",
    	"NombreR": "Refaccionaria Noams",
    	"DireccionR":"calle nomas #445"
    }
             
              {"success":true,"description":"Relacion Realizada Phone ?=? Repair"}
              
<h6>/updateRepairShop</h6>
{
	"idRepairShop": "1",
	"TipoUpdate": "Phone", /* "Coordinate"  "RepairShop"  "Desactivar */
	"Phone":{
		"Numero": "1234567890",
		"Lada":"047",
		"CodigoPais": "+57"
	},
	"Coordinate":{
		"Latitud": "18.8345851",
		"Longitud":"-97.120737",
		"Estado": "Veracruz",
		"Ciudad": "mendoza"
	},
	
}   

        {"success":true,"description":"Registro Modificacdo"}        
        
<h2>Notification</h2>
<h4>post:<h6>/insertRUNotification</h6></h4>      
      {
      	"id_User": 1,
      	"id_Notification": 1
      	"Status": 1 (1 = si la vio , 0 = no la vio)
      }
      
        {"success":true,"info":"Registro ingresado"}
        Sirve para dar a conoces que el usuario ya recibio la notificación
        se guarda la fecha y el status si ya vio la Notificacion 
        
<h6>/insertNotifacation</h6>
{
	"TRelacion": "P", 'S' 'P' 'T',
	"UbicacionR": "event", 'Nombre de la tabla'
	"id_Relacion": 2,
	"id_TypeUser": 2
	
}

            {"success":true,"info":"Registro ingresado"}
        
<h4>put:</h4> <h6>/updateViewNoti</h6>       
 {
 	"id_User": 1,
 	"id_Notification": 1
 }
    
    {"success":true,"info":"Registro Modificado"}
    Indica que ya se ha visto la notificación
    
 <h6>/updateNotification</h6>
    {
    	"TipoUpdate": "General",
    	"id_Notification": "2",
    	"Notification":{
    		"TRelacion": "S",
    		"UbicacionR": "HP",
    		"id_Relacion": 1,
    		"id_TypeUser":1
    	}
    }
    
        {"success":true,"info":"Registro Modificado"}
        
<h4>get:</h4>        
<h6>/selectNotification/{idUser}</h6>
                   
        
        {
            "success": true,
            "info": "Todas las Notificaciones",
            "NotificacionesNuevas": [
                {
                    "id_Notification": "1",
                    "Fecha": "2019-09-13",
                    "TRelacion": "S",
                    "UbicacionR": "event",
                    "id_Relacion": "1",
                    "id_TypeUser": "1",
                    "Descripcion": {
                        "success": true,
                        "description": "Datos Individuales",
                        "result": [
                            {
                                "id_event": "1",
                                "NombreE": "Inaguracion All On Cars",
                                "Descripcion": "Se celebra la inaguracion de All On Cars en México",
                                "FechaE": "2019-10-01",
                                "Status": "1",
                                "id_Coordinates": "2",
                                "id_Image": "45"
                            }
                        ]
                    }
                },
                {
                    "id_Notification": "2",
                    "Fecha": "2019-09-13",
                    "TRelacion": "S",
                    "UbicacionR": "event",
                    "id_Relacion": "2",
                    "id_TypeUser": "1",
                    "Descripcion": {
                        "success": true,
                        "description": "Datos Individuales",
                        "result": [
                            {
                                "id_event": "2",
                                "NombreE": "Pruba",
                                "Descripcion": "Prueba",
                                "FechaE": "2019-12-05",
                                "Status": "1",
                                "id_Coordinates": "32",
                                "id_Image": "40"
                            }
                        ]
                    }
                }
            ],
            "Notificaciones": [
                {
                    "Fecha": "2019-09-12",
                    "id_Notification": "1",
                    "TRelacion": "S",
                    "UbicacionR": "event",
                    "id_Relacion": "1",
                    "id_TypeUser": "1",
                    "Descripcion": {
                        "success": true,
                        "description": "Datos Individuales",
                        "result": [
                            {
                                "id_event": "1",
                                "NombreE": "Inaguracion All On Cars",
                                "Descripcion": "Se celebra la inaguracion de All On Cars en México",
                                "FechaE": "2019-10-01",
                                "Status": "1",
                                "id_Coordinates": "2",
                                "id_Image": "45"
                            }
                        ]
                    }
                }
            ]
        }
<h2>Mantenimiento</h2>
<h4>get: <h6>/Mantenimiento</h6></h4>        
        
        {"Mantenimiento":false}
        
        
<h2>Background</h2>   
<h4>get: <h6>/select</h6></h4>     

    [
        {
            "id_background": "1",
            "Descripcion": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/Background%2FBackground.jpeg?alt=media&token=bc03700e-d7c9-48ba-8ecc-3649df080329"
        }
    ] 
 
<h2>TTaller</h2>
<h4>post:</h4> 
<h6>/TallerInsertT</h6>   
{
	"Coordinates":{
		"Latitud": "18.447083",
		"Longitud": "-97.3807542",
		"Estado": "Puebla",
		"Ciudad": "San Diego"
	},
	"Addrees":{
		"Street":{
			"Street": "Nardo"
		},
		"Colony":{
			"Colony": "Granjas de Oriente"
		},
		"Numbers":{
			"Number": "3905",
			"InteriorNumber": "0"
		}
	},
"Taller":{
		"Nombre": "PruebaTemporal",
		"Status": "I"   o "N"
	}
}

    {"success":true,"description":"Taller ingresado"}
    
<h4>put:</h4> 
<h6>/TallerInsertT</h6>    
{
	"Coordinates":{
		"Latitud": "18.44703",
		"Longitud": "-97.3807542",
		"Estado": "Pueblo",
		"Ciudad": "San Diego"
	},
	"Addrees":{
		"Street":{
			"Street": "Nardo"
		},
		"Colony":{
			"Colony": "Granjas de "
		},
		"Numbers":{
			"Number": "39005",
			"InteriorNumber": "0"
		}
	},
	"Taller":{
		"Nombre": "PruebaTemporala",
		"Status": "I"
	},
	"idTaller": "3"
}

    {"success":true,"description":"Taller modificado"}
    
   <h4>get:</h4> 
   <h6>/TallerInsertT</h6>  
  
  
        {
            "success": true,
            "description": "Datos Taller T",
            "result": [
                {
                    "Nombre": "PruebaTemporala",
                    "id_Address": "102",
                    "Status": "I",
                    "id_Coordinates": "37",
                    "Addrees": {
                        "success": true,
                        "description": "Datos Address",
                        "result": [
                            {
                                "Street": "Nardo",
                                "Colony": "Granjas de ",
                                "Number": "39005",
                                "InteriorNumber": "0"
                            }
                        ]
                    },
                    "Coordinate": {
                        "success": true,
                        "description": "Datos Coordinate",
                        "result": [
                            {
                                "Latitud": "18.44703",
                                "Longitud": "-97.3807542",
                                "Estado": "Pueblo",
                                "Ciudad": "San Diego"
                            }
                        ]
                    }
                },
                {
                    "Nombre": "PruebaTemporal Vamos",
                    "id_Address": "103",
                    "Status": "N",
                    "id_Coordinates": "39",
                    "Addrees": {
                        "success": true,
                        "description": "Datos Address",
                        "result": [
                            {
                                "Street": "Nardo",
                                "Colony": "Granjas de Oriente  2",
                                "Number": "3905",
                                "InteriorNumber": "0"
                            }
                        ]
                    },
                    "Coordinate": {
                        "success": true,
                        "description": "Datos Coordinate",
                        "result": [
                            {
                                "Latitud": "18.447083",
                                "Longitud": "-97.3807542",
                                "Estado": "Puebla",
                                "Ciudad": "San Diego"
                            }
                        ]
                    }
                }
            ]
        }
    
<h2>Validad Correo</h2>
<h4>get:</h4>
<h6>/Validar/{id}</h6>

<h2>Promotion</h2>
<h4>post: </h4>
<h6>/promotion</h6>
{
	"Promotion":{
		"Titulo": "Prueba_Final",
       	"Color": "#efefef",
       	"Description": "Ya acabe Insert"
       	"Font": "Lo que vayas a poenr"
	},
	"Image": "https://lh3.googleusercontent.com/xIQEcQTJnX2xxLcmowjuvNlY42fXEsN9yL0Z0zjnPWjNAT0v1DFABu2LzXfLBeoZHsh6et2CRYG8KsRX2j0ILwZL_-8ByDvlsvI=w268-h200-n-e365",
	"idWorkShop": 3
}

    {"success":true,"description":"Promocion Agregada"}
    {"success":true,"description":"Promocion Agregada sin Imagen"}
    
    
<h4>put: </h4>
<h6>/promotion</h6>

{
	"Promotion":{
		"Titulo": "Cambio Todo",
		"Description": "Ya",
		"Color": "#FFF",
		"id_Promotion": 1
	}
}


            {"success":true,"description":"Modificacion Promotion"}
            
            
<h6>/promotio_user</h6>
    {
    	"id_User": 7,
    	"id_Promotion": 2
    }
        
        {"success":true,"description":"Registro exitoso"}
        
    
<h4>get: </h4>
<h6>/promotion</h6>
{
	"User": 7
}

    {
        "View": {
            "success": true,
            "description": "Total de Promociones del Taller Solicitado",
            "result": [
                {
                    "id_Promotion": "1",
                    "Titulo": "Cambio Todo",
                    "Description": "Ya",
                    "FechaFinal": "2020-01-18",
                    "id_Image": "152",
                    "Fecha": "2020-01-17",
                    "Hora": "10:10:10",
                    "Status": "1",
                    "Color": "#FFF",
                    "id_Workshop": "3",
                    "Favourite": 0,
                    "WorkShop": {
                        "EstadoLocal": "Cerrado",
                        "Services": {
                            "success": true,
                            "description": "Total de Servicios del Teller Solicitado",
                            "result": [
                                {
                                    "id_Service": "6",
                                    "Nombre": "Servicios de Radiadores y sistema de enfriamiento",
                                    "Descripcion": "Servicios de Radiadores y sistema de enfriamiento.",
                                    "NombreC": "Radiadores y Aire acondicionado",
                                    "NombreTaller": "Radiadores SIENA"
                                }
                            ]
                        },
                        "WorkShop": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Tallers"
                        },
                        "Phone": {
                            "success": true,
                            "description": "Phone",
                            "result": [
                                {
                                    "Numero": "1674236",
                                    "Lada": "238",
                                    "CodigoPais": "+52"
                                }
                            ]
                        },
                        "Address": [
                            {
                                "id_Workshop": "3",
                                "Street": "Amado Nervo",
                                "Colony": "Ricardo Flores Magón",
                                "Number": "126",
                                "InteriorNumber": "0"
                            }
                        ],
                        "Images": {
                            "success": false,
                            "notFound": true,
                            "description": "Sin Imagenes"
                        },
                        "EvalutionP": {
                            "No.": "2302",
                            "success": false,
                            "notFound": true,
                            "description": "Datos vacios"
                        },
                        "Promedio": {
                            "No.": "2302",
                            "success": false,
                            "notFound": true,
                            "description": "Datos vacios"
                        }
                    }
                }
            ]
        },
        "Favorite": {
            "success": false,
            "notFound": true,
            "description": "Sin Promociones"
        }
    }

   
<h6>/promotion/city</h6> 
    
        Encaso de no tener acceso a ciudad mandar false
        {
            "success": true,
            "description": "Total de Promociones del Taller Solicitado",
            "result": [
                {
                    "id_Promotion": "1",
                    "Titulo": "Prueba Promotion",
                    "Description": "Cada vez mas rapido",
                    "FechaInicio": "2019-10-01",
                    "FechaFinal": "2019-10-18",
                    "id_Image": "59",
                    "Estado": "Puebla",
                    "Ciudad": "Tehuacan",
                    "NombreTaller": "Grúas Tehuacán",
                    "Images": {
                        "success": true,
                        "description": "Image",
                        "result": [
                            {
                                "id_Image": "59",
                                "Descripcion": "https://lh3.googleusercontent.com/xIQEcQTJnX2xxLcmowjuvNlY42fXEsN9yL0Z0zjnPWjNAT0v1DFABu2LzXfLBeoZHsh6et2CRYG8KsRX2j0ILwZL_-8ByDvlsvI=w268-h200-n-e365"
                            }
                        ]
                    }
                },
                {
                    "id_Promotion": "2",
                    "Titulo": "Cambio Todo",
                    "Description": "Ya",
                    "FechaInicio": "2019-10-01",
                    "FechaFinal": "2019-10-18",
                    "id_Image": "60",
                    "Estado": "Puebla",
                    "Ciudad": "Tehuacan",
                    "NombreTaller": "Grúas Tehuacán",
                    "Images": {
                        "success": true,
                        "description": "Image",
                        "result": [
                            {
                                "id_Image": "60",
                                "Descripcion": "Url Prueba UP"
                            }
                        ]
                    }
                },
                {
                    "id_Promotion": "3",
                    "Titulo": "Prueba Promotion 3",
                    "Description": "Cada vez mas rapido",
                    "FechaInicio": "2019-10-01",
                    "FechaFinal": "2019-10-18",
                    "id_Image": "0",
                    "Estado": "Veracurz",
                    "Ciudad": "Mendoza",
                    "NombreTaller": "Taller Mecánico Zárate",
                    "Images": {
                        "success": false,
                        "notFound": true,
                        "description": "Sin Image"
                    }
                }
            ]
        }
        
        
<h2>Request</h2>
<h4>post:</h4>
<h6>/request</h6>
       {
       	"Request":{
       		"id_User": "18",
       		"id_WorkShop":"16"
       	},
       	"Coordinate":{
       		"Latitud": "18.4438057",
       		"Longitud": "-97.3833257",
       		"Estado": "Puebla",
       		"Ciudad": "Tehuacan"
       	}
       	
       }
       
        {"success":true,"description":"Registro exitoso"}
<h4>get:</h4>        
  <h6>/request/{id}</h6>
  
        {
            "success": true,
            "description": "servicio",
            "Count": 1,
            "result": [
                {
                    "Fecha": "2019-10-26",
                    "Hora": "17:25:26",
                    "Nombre": "FECHA",
                    "Apellido_Pa": "Rogelio",
                    "Apellido_Ma": "Montoya",
                    "NombreTaller": "Amortiguadores Reconstruidos Orizaba",
                    "Latitud": "18.4438057",
                    "Longitud": "-97.3833257",
                    "Estado": "Puebla",
                    "Ciudad": "Tehuacan"
                }
            ]
        }
        
<h2>Evalation</h2>
<h4>post:</h4>
<h6>/evaluacion</h6>   

{
	"Evaluacion":{
		"AttentionRating": "1", Opcional 2,3,4 
		"SatisfactionRating": "1",Opcional 2,3,4,
		"Commentary": "El comentario es obcional",
		"id_WorkShop": 12 Obligatorio,
		"id_User": 1
	}
}   

    {"success":true,"description":"Registro exitoso"}
    
    
<h6> /evaluacionC</h6>    
{
	"Evaluacion": {
		"User": 50,
		"WorkShop":12
	}
}

    {
        "success": true,
        "notFound": false,
        "description": "Calificacion",
        "result": [
            {
                "AttentionRating": "2",
                "SatisfactionRating": "1",
                "Commentary": "El comentario es obcional",
                "id_User": "3"
            }
        ]
    }
    
<h4>put:</h4>
<h6>/evaluacion</h6>     
     {
     	"Evaluacion":{
     		"AttentionRating": "1", 
     		"SatisfactionRating": "3",
     		"id_WorkShop": 1,
     		"id_User": 1
     	},
     	"idEvaluacion": 1
     }
     
  <hr>
  <h4>get:</h4>
  <h6>/evaluacion/{idWorkShop}</h6>  +
  
           {
               "success": true,
               "notFound": false,
               "description": "Calificacion",
               "result": [
                   {
                       "Atencion": "2.2",
                       "Satisfaccion": "2.6",
                       "Total": "5"
                   }
               ],
               "commentary": {
                   "success": true,
                   "notFound": false,
                   "description": "Comentarios",
                   "result": [
                       {
                           "Commentary": "El comentario es obcional"
                       },
                       {
                           "Commentary": "El comentario es obcional"
                       },
                       {
                           "Commentary": "El comentario es obcional"
                       },
                       {
                           "Commentary": "El comentario es obcional"
                       },
                       {
                           "Commentary": "El comentario es obcional"
                       }
                   ]
               }
           }
 <h2>ReferencesServices</h2>
 <h4>post:</h4>
 <h6>/ReferencesServices</h6>   
 {
 	"ReferenciaS":{
 		"NameService": "Cambio de aceito",
 		"id_Category": "3"
 	}
 }
 
    {"success":true,"description":"Registro exitoso"}   
    
  <h4>put:</h4>
  <h6>/ReferencesServices</h6>           
  
  {
  	"ReferenciaS":{
  		"NameService": "Cambio de Aceito",
  		"id_Category": "3"
  	},
  	"idServicio":"3"
  }   
  
    {"success":true,"description":"Registro exitoso"}   
    
 <h4>get:</h4>
   <h6>/ReferencesServices/{rs}</h6>   
   
   
   
   
 <h2>Referrals</h2>
     <h4>post: <h6>/Referrals</h6></h4>     
     {
     	"Referencias":{
     		"CodigoReferidos" : "JCP4601200",
     		"id_User": 3
     	}
     }
  <h4>get:</h4>   
  <h6>\ReferralsU/{id}</h6>
  
        {"success":true,"info":"Ya cuenta con codifo de referidos","result":"JCP4601200"}
  <h6>/Referrals/{Codigo}</h6>      
  
    {"success":true,"description":"Si Existe codigo"}
    
    
<h2>Image 2</h2>
     <h4>get:<h6>/image</h6></h4>  
        
        {
            "success": true,
            "description": "Total",
            "result": [
                {
                    "id_Image": "49",
                    "Descripcion": "url2",
                    "id_Workshop": "11",
                    "NombreTaller": "PrueabaRelacion",
                    "id_User": "3",
                    "Nombre": "Ricardo"
                },
                {
                    "id_Image": "56",
                    "Descripcion": "url",
                    "id_Workshop": "12",
                    "NombreTaller": "mas",
                    "id_User": "3",
                    "Nombre": "Ricardo"
                },
                {
                    "id_Image": "57",
                    "Descripcion": "url1",
                    "id_Workshop": "12",
                    "NombreTaller": "mas",
                    "id_User": "3",
                    "Nombre": "Ricardo"
                },
                {
                    "id_Image": "58",
                    "Descripcion": "url2",
                    "id_Workshop": "12",
                    "NombreTaller": "mas",
                    "id_User": "3",
                    "Nombre": "Ricardo"
                }
            ]
        } 
        
 <h4>put:<h6>/image</h6></h4>  
 {
 	"Image":{
 		"Descripcion": "Cambio"
 	},
 	"idImage":"31"
 }
 
    {"success":true,"description":"Modificacion Image"}
    
<h2>Statistic</h2>
<h4>post:</h4>
    <h6> /CommentsDates </h6>
    {
    	"WorkShop":{
    		"id": 12
    	},
    	"Fechas":{
    		"Inicio": "2019-11-01",
    		"Final": "2019-11-30"
    	}
    }
    
    {
        "success": true,
        "result": [
            {
                "AttentionRating": "4",
                "SatisfactionRating": "4",
                "Commentary": "El comentario es obcional",
                "id_User": "2",
                "id_WorkShop": "12",
                "Fecha": "2019-11-08"
            },
            {
                "AttentionRating": "3",
                "SatisfactionRating": "2",
                "Commentary": "El comentario es obcional",
                "id_User": "2",
                "id_WorkShop": "12",
                "Fecha": "2019-11-15"
            },
            {
                "AttentionRating": "3",
                "SatisfactionRating": "2",
                "Commentary": "El comentario es obcional",
                "id_User": "9",
                "id_WorkShop": "12",
                "Fecha": "2019-11-04"
            }
        ]
    }    
    
<h4>post:</h4>
    <h6> /FavoritesDates </h6>   
    {
    	"WorkShop":{
    		"id": 12
    	},
    	"Fechas":{
    		"Inicio": "2019-11-01",
    		"Final": "2019-11-30"
    	}
    }
    
    
    {
        "success": true,
        "result": [
            {
                "id_User": "18",
                "id_WorkShop": "12",
                "Like": "1",
                "Fecha": "2019-11-13"
            }
        ]
    }
    
   <h6> /HistoryDates </h6>   
         {
         	"WorkShop":{
         		"id": 12
         	},
         	"Fechas":{
         		"Inicio": "2019-11-01",
         		"Final": "2019-11-30"
         	}
         }
         
         {
             "success": true,
             "Count": 1,
             "result": [
                 {
                     "id_User": "8",
                     "id_WorkShop": "12",
                     "Hora": "20:05:19",
                     "Fecha": "2019-11-14"
                 }
             ]
         }
         
  <h6> /CommentsDates\noviembre</h6> 
  <h6> \FavoritesDates\noviembre</h6> 
  <h6> /HistoryDates\noviembre </h6> 
 {
 		"id": 12
 }
 
    {
        "success": true,
        "Count": 1,
        "result": [
            {
                "id_User": "18",
                "id_WorkShop": "12",
                "Like": "1",
                "Fecha": "2019-11-13"
            }
        ]
    }
    
 <h6> /StatisticsDates </h6>   
 {
 	"User":{
 		"id": 2
 	},
 	"Fechas":{
 		"Inicio": "2019-11-01",
 		"Final": "2019-11-30"
 	}
 }
 
       {
           "success": true,
           "description": "Detalles sus talleres",
           "result": [
               {
                   "id_Workshop": "1",
                   "Status": "1",
                   "NombreTaller": "Taller Mecanico Rojas",
                   "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                   "EncargadoNombre": "Pedro",
                   "EncargadoApellidoPA": "ApellidoPA",
                   "EncargadoApellidoMA": "Apppe",
                   "Latitud": "18.4438057",
                   "Longitud": "-97.3833257",
                   "Estado": "Mexico",
                   "Ciudad": "Tehuacan",
                   "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                   "Services": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Servicios"
                   },
                   "Address": [
                       {
                           "id_Workshop": "1",
                           "Street": "Av. de la Juventud",
                           "Colony": "El Humilladero",
                           "Number": "1964",
                           "InteriorNumber": "0"
                       }
                   ],
                   "Phone": {
                       "success": true,
                       "description": "Phone",
                       "result": [
                           {
                               "Numero": "1572751",
                               "Lada": "222",
                               "CodigoPais": "+22"
                           }
                       ]
                   },
                   "Images": {
                       "success": true,
                       "description": "Todo bien",
                       "result": [
                           {
                               "Descripcion": "url",
                               "id_Workshop": "1"
                           },
                           {
                               "Descripcion": "url1",
                               "id_Workshop": "1"
                           },
                           {
                               "Descripcion": "url2",
                               "id_Workshop": "1"
                           }
                       ]
                   },
                   "Comments": {
                       "No.": "2302",
                       "success": false,
                       "notFound": true,
                       "description": "Datos vacios"
                   },
                   "Favorites": {
                       "No.": "2302",
                       "success": false,
                       "notFound": true,
                       "description": "Datos vacios"
                   },
                   "History": {
                       "No.": "2302",
                       "success": false,
                       "notFound": true,
                       "description": "Datos vacios"
                   }
               },
               {
                   "id_Workshop": "5",
                   "Status": "1",
                   "NombreTaller": "Pedro Taller",
                   "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                   "EncargadoNombre": "Carlos Antonio",
                   "EncargadoApellidoPA": "Mendez",
                   "EncargadoApellidoMA": "Mendez",
                   "Latitud": "18.4466967",
                   "Longitud": "-97.4135775",
                   "Estado": "Puebla",
                   "Ciudad": "Tehuacan",
                   "Image_P": "https://firebasestorage.googleapis.com/v0/b/alloncars-d4cb6.appspot.com/o/imagenesMenu%2FTaller.png?alt=media&token=3b4e4c55-ce9b-40d3-be4d-da4cba9eb33d",
                   "Services": {
                       "success": true,
                       "description": "Total de Servicios del Teller Solicitado",
                       "result": [
                           {
                               "id_Service": "5",
                               "Nombre": "Trailer",
                               "Descripcion": "Compromiso por la calidad, rapidez, confianza en el trabajo y lo más importante, la seguridad e integridad de cada uno de nuestros clientes son los valores que hacen de Taller Rojas una empresa que día a día trabaja por ofrecer el mejor servicio integral automotriz desde hace más de 40 años.",
                               "NombreC": "Servicios Especiales",
                               "NombreTaller": "Pedro Taller"
                           }
                       ]
                   },
                   "Address": [
                       {
                           "id_Workshop": "5",
                           "Street": "721-661 Eu Rd.",
                           "Colony": "Guernsey",
                           "Number": "1964",
                           "InteriorNumber": "0"
                       }
                   ],
                   "Phone": {
                       "success": false,
                       "notFound": true,
                       "description": "Sin Phone"
                   },
                   "Images": {
                       "success": true,
                       "description": "Todo bien",
                       "result": [
                           {
                               "Descripcion": "http://www.tallerszamora.com/wp-content/uploads/2014/09/small1.jpg",
                               "id_Workshop": "5"
                           },
                           {
                               "Descripcion": "https://www.guia33.com/wp-content/uploads/cache/images/remote/www-guia33-com/guia33-cornella-automocion-taller-tallers-travessera-cornella-14924-513580225.jpg",
                               "id_Workshop": "5"
                           }
                       ]
                   },
                   "Comments": {
                       "success": true,
                       "Count": 1,
                       "result": [
                           {
                               "AttentionRating": "3",
                               "SatisfactionRating": null,
                               "Commentary": "El comentario es obcional",
                               "id_User": "4",
                               "id_WorkShop": "5",
                               "Fecha": "2019-11-14"
                           }
                       ]
                   },
                   "Favorites": {
                       "No.": "2302",
                       "success": false,
                       "notFound": true,
                       "description": "Datos vacios"
                   },
                   "History": {
                       "success": true,
                       "Count": 4,
                       "result": [
                           {
                               "id_User": "2",
                               "id_WorkShop": "5",
                               "Hora": "00:53:06",
                               "Fecha": "2019-11-04"
                           },
                           {
                               "id_User": "20",
                               "id_WorkShop": "5",
                               "Hora": "12:45:33",
                               "Fecha": "2019-11-18"
                           },
                           {
                               "id_User": "10",
                               "id_WorkShop": "5",
                               "Hora": "15:43:44",
                               "Fecha": "2019-11-06"
                           },
                           {
                               "id_User": "16",
                               "id_WorkShop": "5",
                               "Hora": "03:54:04",
                               "Fecha": "2019-11-16"
                           }
                       ]
                   }
               }
           ],
           "General": {
               "History": {
                   "success": true,
                   "result": [
                       {
                           "History": "2",
                           "Fecha": "2019-09-08"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-09-09"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-10-11"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-10-13"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-11-04"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-11-06"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-11-16"
                       },
                       {
                           "History": "1",
                           "Fecha": "2019-11-18"
                       }
                   ]
               },
               "Comments": {
                   "success": true,
                   "result": [
                       {
                           "Evaluation": "1",
                           "Fecha": "2019-11-14"
                       }
                   ]
               },
               "Favorites": {
                   "success": true,
                   "result": [
                       {
                           "Favorites": "1",
                           "Fecha": "2019-09-11"
                       },
                       {
                           "Favorites": "1",
                           "Fecha": "2019-10-09"
                       },
                       {
                           "Favorites": "1",
                           "Fecha": "2019-10-15"
                       },
                       {
                           "Favorites": "1",
                           "Fecha": "2019-10-27"
                       },
                       {
                           "Favorites": "1",
                           "Fecha": "2019-11-03"
                       },
                       {
                           "Favorites": "1",
                           "Fecha": "2019-11-08"
                       }
                   ]
               }
           }
       }#   a v a n c e A l l O n C a r s  
 