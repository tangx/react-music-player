import axios from 'axios'

export type Song = {
  id: number,
  name: string,
}

type Artist = {
  img1v1Url: string
  name: string
}


type SearchData = {
  code: number
  result: {
    songs: Song[]
  }
}

export function searchMusic(name: string): Song[] {

  let songs: Song[] = []
  // axios.get 是一个泛型函数， 指定定义的类型之后
  // 在 response.data 中就可以通过 ... 的取得想要的数据了。
  axios.get<SearchData>(`https://autumnfish.cn/search?keywords=${name}`)
    .then(
      (response) => {
        console.log(response.data.result.songs);
      },
      (err) => {
        console.log(err);
      }
    )

  return songs
}