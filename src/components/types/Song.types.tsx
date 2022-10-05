
export type Song = {
  id: number,
  name: string,
  mvid: number,
}

// 歌曲详细信息
export type SongDetail = {
  id: number
  url: string
  md5: string
  time: number
  size: number
}

// 歌曲封面信息
export type SongCover = {
  name: string
  al: {
    id: number
    pic: number
    name: string
    picUrl: string
  }
}

export type Music = {
  musicURL: string
  coverURL: string
  isPlaying: boolean
}


