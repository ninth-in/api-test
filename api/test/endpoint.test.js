import envConfig from "../config/env.config";

const {PORT, API_ROOT_PATH} = envConfig;
describe("POST /product", () => {
    const newTodo = {
      // todo 
    }
    afterAll(async () => {
      await request().delete(`/product/${newTodo.id}`)
    })
    it("should add an item to product array", async () => {
      const response = await request(API_ROOT_PATH).post("/product").send(newTodo);
      const lastItem = response.body.data[response.body.data.length-1]
      expect(response.statusCode).toBe(201);
      expect(lastItem.item).toBe(newTodo["item"]);
      expect(lastItem.completed).toBe(newTodo["completed"]);
    });
  });