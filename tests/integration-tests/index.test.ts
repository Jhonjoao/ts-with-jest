import express from 'express';
import request from 'supertest';
import routes from '../../src/routes';

const app = express();
app.use("/", routes);

describe("testing-server-routes", () => {
    it("GET / - success", async () => {
      
        const { statusCode } = await request(app).get("/"); //uses the request function that calls on express app instance

      expect(200).toEqual(statusCode);
    
    });
  });