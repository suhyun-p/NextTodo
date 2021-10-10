import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == "GET") {
        try {
            /*
            const todosBuffer = fs.readFileSync("data/todos.json");
            const todosString = todos.toString();
            if(!todosString) {
                res.statusCode = 200;
                res.send([]);
            }
            const todos: TodoType[] = JSON.parse(todosString);
            */

            const todos: TodoType[] = [
                { id:1, text:"마트 가서 장보기", color: "red", checked: false },
                { id:2, text:"수학 숙제하기", color: "orange", checked: false },
                { id:3, text:"코딩하기", color: "yellow", checked: true },
                { id:4, text:"넥스트 공부하기", color: "green", checked: true },
                { id:5, text:"요리 연습하기", color: "blue", checked: false },
                { id:6, text:"분리수거 하기", color: "navy", checked: false },
            ];

            res.statusCode = 200;
            return res.send(todos);

            /*
            
            */
            // return resolve(todos.toString());
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