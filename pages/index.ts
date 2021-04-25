import { NowRequest, NowResponse } from '@vercel/node';


export default async (request: NowRequest, response: NowResponse) => {
  const solvedHandle = request.query.solved;
  const cofoHandle = request.query.cofo;

  
}