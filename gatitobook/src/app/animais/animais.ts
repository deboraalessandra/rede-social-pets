export interface Animal { //propriedades da API
  id: number;
  postDate: Date; //data da postagem que vem da API
  url: string; //url da foto
  description: string; // Vem da API
  allowComments: boolean; //permitir comentários
  likes: number; //número de likes
  comments: number;
  userId: number; //usuário proprietário da foto
}

export type Animais = Array<Animal>; //array de animais
