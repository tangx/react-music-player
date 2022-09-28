import axios from 'axios'
import { Song } from '../types/Song.types'

interface RespData {
  code: number
  result: {
    hasMore: boolean
    songCount: number
    songs: Song[]
  }
}

export default function SearchMusic(name: string) {
  const target = `https://autumnfish.cn/search?keywords=${name}`
  console.log('@@', target);

  axios.get<RespData>(target)
    .then(
      (resp) => {
        // console.log("==>", resp.data);
        console.log("@@=>", resp.data.result.songs);
      },
      (err) => {
        console.log(err);
      }
    )
}