
export type Song = {
  id: number,
  name: string,
  mvid: number,
}



export type Music = {
  id: number
  url: string
  md5: string
  time: number
  size: number
}


export type MusicDetail = {
  name: string
  al: {
    id: number
    pic: number
    name: string
    picUrl: string
  }

}