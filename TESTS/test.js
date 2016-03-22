var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://127.0.0.1:3000");

// UNIT test begin

describe("unit tests",function(){

  it("create user with valid inputs",function(done){
    server
    .post('/api/users/register')
    .send({
		"firstName"	: "asd",
		"lastName" : "asd",
		"contact"		: "+919910208891",
		"emailAddress": "kshailove@gmail.com",
		"bloodGroup" : "O+",
		"Address"		: "Noida",
		"IP"			: "1.2.3.4",
		"Lat" 			: 12,
		"Long"			: 12 	
	})
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });



  it("create user with invalid inputs",function(done){
    server
    .post('/api/users/register')
    .send({
		"firstName"	: "",
		"lastName" : "asd",
		"contact"		: "+919910208891",
		"emailAddress": "kshailove@gmail.com",
		"bloodGroup" : "O+",
		"Address"		: "Noida",
		"IP"			: "1.2.3.4",
		"Lat" 			: 12,
		"Long"			: 12 	
	})
    .end(function(err,res){
      res.status.should.equal(400);
      done();
    });
  });

  it("create user with invalid inputs",function(done){
    server
    .post('/api/users/register')
    .send({
		"lastName" : "asd",
		"contact"		: "+919910208891",
		"emailAddress": "kshailove@gmail.com",
		"bloodGroup" : "O+",
		"Address"		: "Noida",
		"IP"			: "1.2.3.4",
		"Lat" 			: 12,
		"Long"			: 12 	
	})
    .end(function(err,res){
      res.status.should.equal(400);
      done();
    });
  });

  it("delete user with invalid id",function(done){
    server
    .del('/api/users/foo')
    .end(function(err,res){
      res.status.should.equal(500);
      done();
    });
  });

  it("delete user with valid id",function(done){
    server
    .del('/api/users/56e92da27ac44db933333333')
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

});
