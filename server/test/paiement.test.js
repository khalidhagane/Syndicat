// const supertest = require('supertest')
// const app = require('../../server') ;

//     describe("POST api/paiement/addpaiement   ",() =>{

//         test("should res with a 400 status code",async () =>{
//             const response = await supertest(app).post("/api/paiement/addpaiement").send({
//                 prix:"",
//                 date:"",
//                 id_appartement:"",
//                 id_client:""
//             })
//             expect(response.statusCode).toBe(400)
//         })

//         test("should res with a 200 status code",async () =>{
//             const response = await supertest(app).post("/api/paiement/addpaiement").send({
                
//                 prix:"23",
//                 date:"2022-12-12",
//                 id_appartement:"63b40823f4796c6b9cf900bb",
//                 id_client:"63b335c1ec3bb6c2d0602f90"
//             })
//             expect(response.statusCode).toBe(200)
//         })
//     })

// //------------------- test delete -----------------

//     describe("delete api/paiement/deletepaiement   ",() =>{

//         test("should res with a 400 status code",async () =>{
//             const response = await supertest(app).delete("/api/paiement/deletepaiement/63b40823f4796c6b9cf900bb").send({
                
//             })
//             expect(response.statusCode).toBe(200)
//         })

//     })

//     //------------ test get one paiement -----------------
//     describe("get api/paiement/getonepaiement   ",() =>{

//         test("should res with a 400 status code",async () =>{
//             const response = await supertest(app).get("/api/paiement/getonepaiement/63b40823f4796c6b9cf900bb").send({
               
//             })
//             expect(response.statusCode).toBe(200)
//         })

//     })
        
//     //--------------------- test update paiement- ----------------
//     // describe("update api/paiement/updatepaiement   ",() =>{

//     //     test("should res with a 400 status code",async () =>{
//     //         const response = await supertest(app).put("/api/paiement/updatepaiement/63b40823f4796c6b9cf900bb").send({
//     //             prix:"23",
//                 date:"2022-12-12",
//                 id_appartement:"63b40823f4796c6b9cf900bb",
//                 id_client:"63b335c1ec3bb6c2d0602f90"
//     //         })
//     //         expect(response.statusCode).toBe(200)
//     //     })

//     // })