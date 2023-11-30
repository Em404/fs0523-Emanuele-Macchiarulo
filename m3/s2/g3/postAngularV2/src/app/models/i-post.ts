export interface IPost {
  id:number
  body:string
  title:string
  active:boolean
  topic:string
  author:string
}

export interface IUser {
  id:number
  name:string
  email:string
  role:string
}
