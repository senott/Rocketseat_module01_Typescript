import { response } from "express";

import { Request, Response } from 'express';

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  
  const user = createUser({ 
    name: 'José da Silva', 
    email: 'jose.silva@gmail.com', 
    password: '123456',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 80 }
    ]
  });

  return response.json({ message: `Hello ${user.name}` });
}