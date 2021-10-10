import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../../types/todo";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == "GET") {
        try {
            const todos = Data.todo.getList();
            res.statusCode = 200;
            return res.send(todos);
        } catch (e) {
            console.log(e);
            res.statusCode = 500;
            res.send(e);
        }
    }

    res.statusCode = 405;
    console.log(res.statusCode);
    return res.end();
};