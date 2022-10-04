import { HotComment } from "../../components/types/HotComment.types"


export enum EnumComments {
  UpdateComments = "UPDATE_COMMENTS"
}

export type CommentAction = {
  type: EnumComments,
  data: HotComment[],
}


export function updateComments(data: HotComment[]): CommentAction {
  return {
    type: EnumComments.UpdateComments,
    data: data,
  }
}

