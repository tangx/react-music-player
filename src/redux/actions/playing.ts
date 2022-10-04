

/* Playing */
export enum EnumPlaying {
  IsPlaying = "IS_PLAYING"
}


export type PlayingAction = {
  type: EnumPlaying,
  data: boolean,
}

export function setPlayingState(data: boolean): PlayingAction {
  return {
    type: EnumPlaying.IsPlaying,
    data: data
  }
}