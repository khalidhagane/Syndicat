
const supertest = require('supertest')
const app = require('../../server') ;


//------------------------------------------- test login -----------------------------------------------------------------------------------
describe("POST api/auth/login",() =>{
    test("should res with a 400 status code",async () =>{
        const response = await supertest(app).post("/api/auth/login").send({
            email:"",
            password:""
        })
        expect(response.statusCode).toBe(400)
    })

    test("should res with a 201 status code, email and password correct",async () =>{
        const response = await supertest(app).post("/api/auth/login").send({
            email:"Khagane10@gmail.com",
            password:"khalid10"
        })
        expect(response.statusCode).toBe(201)
    })

    test("should res with a 400 status code, check status",async () =>{
        const response = await supertest(app).post("/api/auth/login").send({
            email:"lolo@gmail.com",
            password:"lolo"
        })
        expect(response.statusCode).toBe(400)
    })
})

//----------------------------------------------------- test add appartement  ------------------------------------------------------------------------
    describe("POST api/appartement/addappartement   ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).post("/api/appartement/addappartement").send({
                imeuble:"",
                etage:"",
                appartement:""
            })
            expect(response.statusCode).toBe(400)
        })

        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).post("/api/appartement/addappartement").send({
                imeuble:"",
                etage:"A1",
                appartement:"A1"
            })
            expect(response.statusCode).toBe(400)
        })

        test("should res with a 200 status code",async () =>{
            const response = await supertest(app).post("/api/appartement/addappartement").send({
                imeuble:"A1",
                etage:"1",
                appartement:"12"
            })
            expect(response.statusCode).toBe(200)
        })
    })

//------------------- test delete appartement -----------------

    describe("delete api/appartement/deleteappartement   ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).delete("/api/appartement/deleteappartement/63b40823f4796c6b9cf900bb").send({
            
            })
            expect(response.statusCode).toBe(200)
        })
    })

    //------------ test get one appartement -----------------
    describe("get  api/appartement/getoneappartement   ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).get("/api/appartement/getoneappartement/63b41b3df315045140c071bf").send({
            
            })
            expect(response.statusCode).toBe(200)
        })

                                // test("should res with a 400 status code",async () =>{
                                //     const response = await supertest(app).get("/api/appartement/getoneappartement/63b40823f4796c6b9cf900bb").send({
                                    
                                //     })
                                //     expect(response.statusCode).toBe(400)
                                // })
    })

    //--------------------- test update appartement-----------------
    // describe("update api/appartement/updateappartement   ",() =>{

    //     test("should res with a 400 status code",async () =>{
    //         const response = await supertest(app).put("/api/appartement/updateappartement/63b40823f4796c6b9cf900bb").send({
    //             imeuble:"A1",
    //             etage:"A1",
    //             appartement:"A1"
    //         })
    //         expect(response.statusCode).toBe(200)
    //     })

    // })

    //----------------------------------------- test add paiement ----------------------------------------------------------------------------

    describe("POST api/paiement/addpaiement   ",() =>{

    test("should res with a 400 status code",async () =>{
        const response = await supertest(app).post("/api/paiement/addpaiement").send({
            prix:"",
            date:"",
            id_appartement:"",
            id_client:""
        })
        expect(response.statusCode).toBe(400)
    })

    test("should res with a 200 status code",async () =>{
        const response = await supertest(app).post("/api/paiement/addpaiement").send({
            prix:"23",
            date:"2022-12-12",
            id_appartement:"63b40823f4796c6b9cf900bb",
            id_client:"63b335c1ec3bb6c2d0602f90"
        })
        expect(response.statusCode).toBe(200)
    })

    })

    // //------------------- test delete paiement -----------------

    describe("delete api/paiement/deletepaiement   ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).delete("/api/paiement/deletepaiement/63b40823f4796c6b9cf900bb").send({
                
            })
            expect(response.statusCode).toBe(200)
        })
    })

     //------------ test get one paiement -----------------
    describe("get api/paiement/getonepaiement   ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).get("/api/paiement/getonepaiement/63b40823f4796c6b9cf900bb").send({
               
            })
            expect(response.statusCode).toBe(200)
        })
    })

    //     //--------------------- test update paiement- ----------------
    // describe("update api/paiement/updatepaiement   ",() =>{

    //     test("should res with a 400 status code",async () =>{
    //         const response = await supertest(app).put("/api/paiement/updatepaiement/63b40823f4796c6b9cf900bb").send({
    //             prix:"23",
    //            date:"2022-12-12",
    //            id_appartement:"63b40823f4796c6b9cf900bb",
    //            id_client:"63b335c1ec3bb6c2d0602f90"
    //         })
    //         expect(response.statusCode).toBe(200)
    //     })

    // })

    //------------------------------------------------------- add client------------------------------------------------------------------------

    describe("POST api/client/addclient   ",() =>{

        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).post("/api/client/addclient").send({
                name:"",
                cin:"",
                tele:"",
                id_appartement:""
            })
            expect(response.statusCode).toBe(400)
        })
    
        test("should res with a 200 status code",async () =>{
            const response = await supertest(app).post("/api/client/addclient").send({
                name:"noaman",
                cin:"HA202212",
                tele:"636654767",
                id_appartement:"63b335c1ec3bb6c2d0602f90"
            })
            expect(response.statusCode).toBe(200)
        })
    
        })
    
        // //------------------- test delete client -----------------
    
        describe("delete api/client/deleteclient  ",() =>{
            test("should res with a 400 status code",async () =>{
                const response = await supertest(app).delete("/api/client/deleteclient/63b40823f4796c6b9cf900bb").send({
                    
                })
                expect(response.statusCode).toBe(200)
            })
        })
    
         //------------ test get one client -----------------
        describe("get api/client/getoneclient   ",() =>{
            test("should res with a 400 status code",async () =>{
                const response = await supertest(app).get("/api/client/getoneclient/63b40823f4796c6b9cf900bb").send({
                   
                })
                expect(response.statusCode).toBe(200)
            })
        })
    
        //     //--------------------- test update client- ----------------
        // describe("update api/client/updatelient   ",() =>{
    
        //     test("should res with a 400 status code",async () =>{
        //         const response = await supertest(app).put("/api/client/updateclient/63b40823f4796c6b9cf900bb").send({
        //              name:"khalid",
                        // cin:"HA202778",
                        // tele:"0456775467",
                        // id_appartement:"63b335c1ec3bb6c2d0602f90"
        //         })
        //         expect(response.statusCode).toBe(200)
        //     })
    
        // })
    
